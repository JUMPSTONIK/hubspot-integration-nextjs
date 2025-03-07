'use client'
import { VStack, Heading, Text, Link, Grid, GridItem } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20">
      <VStack mb={10}>
        <Heading as="h1" size="xl">My HubSpot Integration</Heading>
        <Heading as="h2" size="lg">Design System</Heading>
      </VStack>

      <Grid 
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
        gap={6}
        width="100%"
        maxWidth="400px"
        justifyItems="center"
      >
        <GridItem>
          <Link as={NextLink} href="/buttons">
            Buttons
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/links">
            Links
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/texts">
            Texts
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/headings">
            Headings
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/form">
            Form
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/table">
            Tables
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/accordions">
            Accordions
          </Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="/icons">
            Icons
          </Link>
        </GridItem>
      </Grid>

      <Text fontSize="sm" color="gray.500" mt={10}>
        All component variants, sizes and styles are listed above
      </Text>
    </div>
  );
}