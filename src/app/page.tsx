'use client'
import { VStack, Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20">
      <VStack>

      <Heading as="h1" size="xl">My HubSpot Integration</Heading>
      <Heading as="h2" size="lg">Design System</Heading>
      </VStack>

      <VStack spacing={12} width="100%" align="center">
        <Link as={NextLink} href="/buttons">
          Buttons
        </Link>
        <Link as={NextLink} href="/links">
          Links
        </Link>
        <Link as={NextLink} href="/texts">
          Texts
        </Link>
        <Link as={NextLink} href="/headings">
          Headings
        </Link>
      </VStack>

      <Text fontSize="sm" color="gray.500" mt={10}>
        All component variants, sizes and styles are listed above
      </Text>
    </div>
  );
}