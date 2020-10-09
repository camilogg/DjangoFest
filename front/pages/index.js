import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from 'components/Layout'
import KawaiiHeader from 'components/KawaiiHeader/KawaiiHeader'
import ProductList from 'components/ProductList/'

export const getStaticProps = async () => {
  const response = await fetch('http://djangofest:8000/api/avocado/')
  const { results: productList } = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage