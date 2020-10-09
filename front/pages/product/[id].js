import fetch from 'isomorphic-unfetch'

import Layout from 'components/Layout'
import ProductSummary from 'components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch('http://djangofest:8000/api/avocado')
  const { results: data } = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch(
    `http://djangofest:8000/api/avocado/${params?.id}`
  )
  const product = await response.json()

  // Pass post data to the page via props
  return { props: { product } }
}

const ProductPage = ({ product }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
