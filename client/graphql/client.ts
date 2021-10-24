import { createClient } from 'urql'

export const client = createClient({
  url: String(
    process.env.NEXT_PUBLIC_GRAPHQL_CLIENT ||
      'https://shiiinji-shop-server-aysssbazza-an.a.run.app/graphql',
  ),
  suspense: true,
  requestPolicy: 'cache-first',
})
