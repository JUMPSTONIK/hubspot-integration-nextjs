'use client'
import { Link, VStack, Heading, Box, Divider, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Links() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Heading as="h1" size="xl" mb={8}>Link Styles</Heading>

            <VStack spacing={8} width="100%" maxWidth="600px" align="flex-start">
                {/* Default Link */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>Default Link</Heading>
                    <Link as={NextLink} href="#">
                        BTicino Simple Link
                    </Link>
                </Box>

                <Divider />

                {/* No Underline Variant */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>No Underline Link (until hover)</Heading>
                    <Link as={NextLink} href="#" variant="noUnderline">
                        BTicino Simple Link without underline
                    </Link>
                </Box>

                <Divider />

                {/* Secondary Color Variant */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>Secondary Color Link</Heading>
                    <Link as={NextLink} href="#" variant="secondary">
                        Secondary BTicino Link
                    </Link>
                </Box>

                <Divider />

                {/* Button-like Link */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>Button-like Link</Heading>
                    <Link as={NextLink} href="#" variant="button">
                        Button-like Link
                    </Link>
                </Box>

                <Divider />

                {/* External Link */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>External Link Example</Heading>
                    <Link href="https://www.bticino.com" isExternal>
                        Visit BTicino Website
                    </Link>
                </Box>
            </VStack>

            <Text fontSize="sm" color="gray.500" mt={10}>
                    All link variants are displayed above
            </Text>
        </div>
    );
}