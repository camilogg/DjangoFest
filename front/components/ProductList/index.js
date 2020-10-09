import { Card } from 'semantic-ui-react'
import Link from 'next/link'

const mapProductsToCards = products =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href='/product/[id]' as={`/product/${id}`} passHref>
      <Card
        as='a'
        header={name}
        image={image.replace('djangofest', 'localhost')}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ))

const ProductList = ({ products }) => (
  <Card.Group itemsPerRow={3} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
