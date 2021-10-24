import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Header } from '@components/common/Header'
import { client } from '@graphql/client'
import { GetProductsDocument, GetProductsQuery } from '@services/shop/client'

type Props = {
  products: GetProductsQuery['products']
}

export default function Home(props: Props) {
  return (
    <>
      <Header />
      {props.products.map((product) => (
        <p>{product.title}</p>
      ))}
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=180',
  )

  const { data } = await client
    .query<GetProductsQuery>(GetProductsDocument, {
      args: {
        where: {
          published: true,
        },
      },
    })
    .toPromise()

  return {
    props: {
      products: data?.products ?? [],
    },
  }
}
