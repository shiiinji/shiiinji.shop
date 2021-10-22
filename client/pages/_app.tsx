import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  </ChakraProvider>
)

export default MyApp
