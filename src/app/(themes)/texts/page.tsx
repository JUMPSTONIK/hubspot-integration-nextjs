'use client'
import {
    Box,
    VStack,
    Text,
    Heading,
    Divider,
    Grid,
    GridItem,
    Container,
    Flex,
    Badge
} from '@chakra-ui/react'

export default function TextShowcase() {
    // Define text sizes
    const textSizes = [
        { name: 'xs', pixels: '12px' },
        { name: 'sm', pixels: '14px' },
        { name: 'md', pixels: '16px' },
        { name: 'lg', pixels: '18px' },
        { name: 'xl', pixels: '20px' },
        { name: '2xl', pixels: '24px' },
        { name: '3xl', pixels: '30px' },
        { name: '4xl', pixels: '36px' },
        { name: '5xl', pixels: '48px' },
        { name: '6xl', pixels: '60px' },
    ]

    // Define color variants
    const colorVariants = [
        { name: 'Default (text.default)', value: 'text.default' },
        { name: 'Primary', value: 'brand.primary' },
        { name: 'Secondary', value: 'brand.secondary' },
        { name: 'Accent', value: 'brand.accent' },
        { name: 'Gray 500', value: 'gray.500' },
        { name: 'Gray 600', value: 'gray.600' },
        { name: 'Gray 700', value: 'gray.700' },
        { name: 'Gray 800', value: 'gray.800' },
    ]

    // Define font weight variants
    const fontWeights = [
        { name: 'light', value: 300 },
        { name: 'normal', value: 400 },
        { name: 'medium', value: 500 },
        { name: 'semibold', value: 600 },
        { name: 'bold', value: 700 },
    ]

    return (
        <Container w={"100%"} maxW="container.xl" py={10} className="w-full font-[family-name:var(--font-lexend)]">
            <VStack w="100%" spacing={12} align="stretch">
                <Box>
                    <Heading as="h1" size="2xl" mb={8}>
                        Text Component Showcase
                    </Heading>
                    <Text fontSize="xl">
                        This page demonstrates all Text component variants, sizes, colors, and font weights.
                    </Text>
                </Box>

                {/* Text Sizes Section */}
                <Box as="section">
                    <Heading as="h2" size="xl" mb={6}>
                        Text Sizes
                    </Heading>
                    <VStack align="stretch" spacing={6} bg="gray.50" p={6} borderRadius="md">
                        {textSizes.map((size) => (
                            <Flex key={size.name} align="center">
                                <Text fontSize={size.name} flex="1">
                                    This is text with size {size.name}
                                </Text>
                                <Badge colorScheme="blue" fontSize="sm" px={2}>
                                    {size.name} ({size.pixels})
                                </Badge>
                            </Flex>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                {/* Text Colors Section */}
                <Box as="section">
                    <Heading as="h2" size="xl" mb={6}>
                        Text Colors
                    </Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                        {colorVariants.map((color) => (
                            <GridItem key={color.name} bg="white" p={4} borderRadius="md" boxShadow="sm">
                                <Text color={color.value} fontSize="lg">
                                    Text with color: {color.name}
                                </Text>
                                <Badge mt={2} colorScheme="purple" fontSize="xs">
                                    {color.value}
                                </Badge>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>

                <Divider />

                {/* Font Weights Section */}
                <Box as="section">
                    <Heading as="h2" size="xl" mb={6}>
                        Font Weights
                    </Heading>
                    <VStack align="stretch" spacing={6} bg="gray.50" p={6} borderRadius="md">
                        {fontWeights.map((weight) => (
                            <Flex key={weight.name} align="center">
                                <Text fontWeight={weight.value} fontSize="xl" flex="1">
                                    This text has font weight {weight.name}
                                </Text>
                                <Badge colorScheme="green" fontSize="sm" px={2}>
                                    {weight.name} ({weight.value})
                                </Badge>
                            </Flex>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                {/* Combined Examples Section */}
                <Box as="section">
                    <Heading as="h2" size="xl" mb={6}>
                        Combined Examples
                    </Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>
                        <GridItem bg="white" p={6} borderRadius="md" boxShadow="md">
                            <Text fontSize="2xl" fontWeight="bold" color="brand.primary" mb={3}>
                                Primary Heading Text
                            </Text>
                            <Text fontSize="md" color="gray.600">
                                Regular body text in gray 600
                            </Text>
                            <Badge colorScheme="gray" mt={2}>2xl + bold + brand.primary</Badge>
                        </GridItem>

                        <GridItem bg="white" p={6} borderRadius="md" boxShadow="md">
                            <Text fontSize="xl" fontWeight="semibold" color="brand.secondary" mb={3}>
                                Secondary Feature Text
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                Smaller supporting text in gray 500
                            </Text>
                            <Badge colorScheme="gray" mt={2}>xl + semibold + brand.secondary</Badge>
                        </GridItem>

                        <GridItem bg="white" p={6} borderRadius="md" boxShadow="md">
                            <Text fontSize="lg" fontWeight="medium" color="brand.accent" mb={3}>
                                Accent Highlight Text
                            </Text>
                            <Text fontSize="xs" color="gray.700">
                                Extra small footnote text in gray 700
                            </Text>
                            <Badge colorScheme="gray" mt={2}>lg + medium + brand.accent</Badge>
                        </GridItem>

                        <GridItem bg="brand.primary" p={6} borderRadius="md" boxShadow="md">
                            <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
                                Inverted Text on Primary
                            </Text>
                            <Text fontSize="md" color="gray.100">
                                Light text on dark background
                            </Text>
                            <Badge colorScheme="gray" mt={2} bg="whiteAlpha.300">xl + bold + white</Badge>
                        </GridItem>
                    </Grid>
                </Box>

                <Divider />

                {/* Paragraph Examples Section */}
                <Box as="section">
                    <Heading as="h2" size="xl" mb={6}>
                        Paragraph Examples
                    </Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>
                        <GridItem bg="white" p={6} borderRadius="md" boxShadow="md">
                            <Text fontSize="xl" fontWeight="semibold" mb={4}>
                                Standard Paragraph (MD)
                            </Text>
                            <Text fontSize="md" mb={2}>
                                This is a standard paragraph with medium (16px) text size. It demonstrates how body text appears in your application.
                            </Text>
                            <Text fontSize="md">
                                Additional paragraph with the same styling. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                            </Text>
                            <Badge colorScheme="gray" mt={4}>fontSize= md (16px)</Badge>
                        </GridItem>

                        <GridItem bg="white" p={6} borderRadius="md" boxShadow="md">
                            <Text fontSize="lg" fontWeight="semibold" mb={4}>
                                Large Paragraph (LG)
                            </Text>
                            <Text fontSize="lg" mb={2}>
                                This is a larger paragraph with large (18px) text size. Use this for important content that needs slightly more emphasis.
                            </Text>
                            <Text fontSize="lg">
                                Second paragraph with large text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                            <Badge colorScheme="gray" mt={4}>fontSize=lg (18px)</Badge>
                        </GridItem>
                    </Grid>
                </Box>
            </VStack>
        </Container>
    )
}