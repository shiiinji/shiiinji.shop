import React from 'react'
import { Container, Grid, HStack } from '@chakra-ui/react'
import { Header } from '@components/common/Header'
import { ProductCard } from '@components/common/ProductCard'
import { client } from '@graphql/client'
import { GetProductsDocument, GetProductsQuery } from '@services/shop/client'

type Props = {
  products: GetProductsQuery['products']
}

export default function Home(props: Props) {
  return (
    <>
      <Header />
      <Container maxW={'7xl'} p="12">
        <HStack spacing={8}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {props.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        </HStack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client
    .query<GetProductsQuery>(GetProductsDocument, {
      args: {
        where: {
          published: true,
        },
      },
    })
    .toPromise()

  console.log(data)

  return {
    props: {
      products: data?.products ?? [],
    },
  }
}
