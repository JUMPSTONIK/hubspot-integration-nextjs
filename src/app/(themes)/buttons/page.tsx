'use client'
import { Button, ButtonGroup, VStack, Heading, Text, Box, Flex } from '@chakra-ui/react'

export default function ButtonsPage() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-lexend)]">
            <Heading as="h1" size="xl" mb={8}>Button Styles</Heading>

            <VStack spacing={12} width="100%" align="center">
                {/* Small Buttons */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">Small Buttons</Heading>
                    <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                        <Button size="sm">Primary</Button>
                        <Button size="sm" variant='secondary'>Secondary</Button>
                        <Button size="sm" variant='tertiary'>Tertiary</Button>
                    </ButtonGroup>
                </Box>

                {/* Medium Buttons (Default) */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">Medium Buttons (Default)</Heading>
                    <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                        <Button>Primary</Button>
                        <Button variant='secondary'>Secondary</Button>
                        <Button variant='tertiary'>Tertiary</Button>
                    </ButtonGroup>
                </Box>

                {/* Large Buttons */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">Large Buttons</Heading>
                    <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                        <Button size="lg">Primary</Button>
                        <Button size="lg" variant='secondary'>Secondary</Button>
                        <Button size="lg" variant='tertiary'>Tertiary</Button>
                    </ButtonGroup>
                </Box>

                {/* Button Variants with Icons */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">With Icons</Heading>
                    <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                        <Button leftIcon={<Text color="white">→</Text>}>Primary</Button>
                        <Button variant='secondary' rightIcon={<Text color="white">←</Text>}>Secondary</Button>
                        <Button variant='tertiary' leftIcon={<Text color="white">→</Text>} rightIcon={<Text color="white">←</Text>}>Tertiary</Button>
                    </ButtonGroup>
                </Box>

                {/* Button States */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">Button States</Heading>
                    <Flex direction="column" gap={6} align="center">
                        <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                            <Button isDisabled>Disabled Primary</Button>
                            <Button variant='secondary' isDisabled>Disabled Secondary</Button>
                            <Button variant='tertiary' isDisabled>Disabled Tertiary</Button>
                        </ButtonGroup>

                        <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                            <Button isLoading>Loading Primary</Button>
                            <Button variant='secondary' isLoading>Loading Secondary</Button>
                            <Button variant='tertiary' isLoading>Loading Tertiary</Button>
                        </ButtonGroup>
                    </Flex>
                </Box>
                {/* Unstyled Button for Text Links */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">Text Link Using Unstyled Button</Heading>
                    <Flex direction="column" gap={6} align="center">
                        <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                            <Button
                                variant="unstyled"
                            >
                                This looks like a link but is a button
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </Box>

                {/* Icon Button */}
                <Box width="100%">
                    <Heading as="h2" size="md" mb={4} textAlign="center">Icon Button Using Unstyled</Heading>
                    <Flex direction="column" gap={6} align="center">
                        <ButtonGroup gap='4' display="flex" justifyContent="center" flexWrap="wrap">
                            <Button
                                variant="unstyled"
                                aria-label="Icon Button"
                            >
                                ✕
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </Box>
            </VStack>

            <Text fontSize="sm" color="gray.500" mt={10}>
                All button variants and sizes are displayed above
            </Text>
        </div>
    );
}