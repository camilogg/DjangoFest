import Navbar from '../Navbar'
import Footer from 'components/Footer'
import { Container } from 'semantic-ui-react'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container as='main' text>
        {children}
      </Container>
      <Footer />
    </>
  )
}
