import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import { Header, Button } from 'semantic-ui-react'
import Layout from 'components/Layout'

const fetchResultServer = async () => {
  const res = await fetch('http://djangofest:8000/api/random-smile/')
  const { smile } = await res.json()

  return smile === ':)' ? 'yes :)' : 'no :('
}

const fetchResultClient = async () => {
  const res = await fetch('http://localhost:8000/api/random-smile/')
  const { smile } = await res.json()

  return smile === ':)' ? 'yes :)' : 'no :('
}

export async function getServerSideProps() {
  const initialResult = await fetchResultServer()

  return {
    props: {
      initialResult,
    },
  }
}

const YesOrNo = ({ initialResult }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResultClient().then(initialResult => {
      setResult(initialResult)
      setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <Layout>
      <div>
        <Header as='h1' color={isLoading ? 'grey' : 'green'}>
          {result}
        </Header>

        <p>
          <Button
            color='green'
            onClick={onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            Intentar de nuevo
          </Button>
        </p>
        <p>
          <Link href='/'>
            <a className='ui black button basic'>Volver al inicio</a>
          </Link>
        </p>
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(h1.header) {
          font-size: 7rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo
