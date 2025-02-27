'use client'

import { Button } from '@/themes/Button'
import { Heading } from '@/themes/Heading'
import { Link } from '@/themes/Link'
import { Text } from '@/themes/Text'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#33475B',
        bg: 'white',
      },
      'h1, h2, h3, h4, h5, h6, p, span, div': {
        color: '#33475B',
      },
    },
  },
  colors: {
    brand: {
      primary: '#33475B',
      secondary: '#0091AE',
      accent: '#FF7A53',
    },
    text: {
      default: '#33475B',
    },
  },
  components: {
    Button,
    Link,
    Text,
    Heading
  },
  fonts: {
    heading: 'var(--font-lexend)',
    body: 'var(--font-lexend)',
  },
})

export function ChakraProviders({ children }: Readonly<{ children: ReactNode }>) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
