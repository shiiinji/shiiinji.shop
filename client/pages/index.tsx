import React from 'react'
import { HStack } from '@chakra-ui/react'
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
      <HStack spacing={8}>
        {props.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </HStack>
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
