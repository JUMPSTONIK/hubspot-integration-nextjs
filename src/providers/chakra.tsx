'use client'

import { globalTheme } from '@/themes/globalTheme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

const theme = extendTheme(globalTheme)

export function ChakraProviders({ children }: Readonly<{ children: ReactNode }>) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
