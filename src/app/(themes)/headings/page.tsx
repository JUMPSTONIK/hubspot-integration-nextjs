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
    Badge,
    Card,
    CardHeader,
    CardBody
} from '@chakra-ui/react'

export default function HeadingShowcase() {
    // Define heading levels and their default sizes
    const headingLevels = [
        { level: 'h1' as const, size: '4xl', pixels: '36px-48px', description: 'Page titles, major section headers' },
        { level: 'h2' as const, size: '3xl', pixels: '30px-36px', description: 'Major section headers, feature titles' },
        { level: 'h3' as const, size: '2xl', pixels: '24px-30px', description: 'Subsection headers, card titles' },
        { level: 'h4' as const, size: 'xl', pixels: '20px-24px', description: 'Minor section titles, form headers' },
        { level: 'h5' as const, size: 'lg', pixels: '18px-20px', description: 'Small section headers, widget titles' },
        { level: 'h6' as const, size: 'md', pixels: '16px-18px', description: 'The smallest heading level' },
    ]

    // Define color variants
    const colorVariants = [
        { name: 'Default (text.default)', value: 'text.default' },
        { name: 'Primary', value: 'brand.primary' },
        { name: 'Secondary', value: 'brand.secondary' },
        { name: 'Accent', value: 'brand.accent' },
        { name: 'Gray 600', value: 'gray.600' },
        { name: 'Gray 700', value: 'gray.700' },
    ]

    // Define font weight variants
    const fontWeights = [
        { name: 'medium', value: 500 },
        { name: 'semibold', value: 600 },
        { name: 'bold', value: 700 },
        { name: 'extrabold', value: 800 },
    ]

    // Define heading variants from the theme
    const headingVariants = [
        { name: 'standard', description: 'Default heading style' },
        { name: 'section', description: 'With bottom border for section headers' },
        { name: 'subtle', description: 'Lighter color with medium weight' },
        { name: 'primary', description: 'Using primary brand color' },
        { name: 'secondary', description: 'Using secondary brand color' },
        { name: 'accent', description: 'Using accent brand color' },
    ]

    return (
        <Container maxW="container.xl" py={10} className="font-[family-name:var(--font-lexend)]">
            <VStack spacing={12} align="stretch">
                <Box>
                    <Heading as="h1" size="4xl" mb={8}>
                        Heading Component Showcase
                    </Heading>
                    <Text fontSize="xl">
                        This page demonstrates all Heading component variants, sizes, colors, and font weights.
                    </Text>
                </Box>

                {/* Heading Levels Section */}
                <Box as="section">
                    <Heading as="h2" size="3xl" mb={6}>
                        Heading Levels (h1-h6)
                    </Heading>
                    <VStack align="stretch" spacing={8} bg="gray.50" p={6} borderRadius="md">
                        {headingLevels.map((heading) => (
                            <Box key={heading.level}>
                                <Flex align="center" justify="space-between" mb={2}>
                                    <Badge colorScheme="blue" fontSize="sm" px={2}>
                                        {heading.level} | size={heading.size} ({heading.pixels})
                                    </Badge>
                                    <Text fontSize="sm" color="gray.500">
                                        {heading.description}
                                    </Text>
                                </Flex>
                                <Heading as={heading.level} size={heading.size}>
                                    This is a {heading.level.toUpperCase()} Heading
                                </Heading>
                            </Box>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                {/* Heading Colors Section */}
                <Box as="section">
                    <Heading as="h2" size="3xl" mb={6}>
                        Heading Colors
                    </Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                        {colorVariants.map((color) => (
                            <GridItem key={color.name} bg="white" p={4} borderRadius="md" boxShadow="sm">
                                <Heading as="h3" size="xl" color={color.value} mb={2}>
                                    {color.name}
                                </Heading>
                                <Text fontSize="sm">
                                    Color value: <code>{color.value}</code>
                                </Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>

                <Divider />

                {/* Font Weights Section */}
                <Box as="section">
                    <Heading as="h2" size="3xl" mb={6}>
                        Font Weights
                    </Heading>
                    <VStack align="stretch" spacing={6} bg="gray.50" p={6} borderRadius="md">
                        {fontWeights.map((weight) => (
                            <Box key={weight.name}>
                                <Flex align="center" justify="space-between" mb={2}>
                                    <Badge colorScheme="green" fontSize="sm" px={2}>
                                        fontWeight={weight.name} ({weight.value})
                                    </Badge>
                                </Flex>
                                <Heading as="h3" size="xl" fontWeight={weight.value}>
                                    This heading uses {weight.name} weight
                                </Heading>
                            </Box>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                {/* Heading Variants Section */}
                <Box as="section">
                    <Heading as="h2" size="3xl" mb={6}>
                        Heading Variants
                    </Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                        {headingVariants.map((variant) => (
                            <GridItem key={variant.name} bg="white" p={5} borderRadius="md" boxShadow="sm">
                                <Heading as="h3" size="xl" variant={variant.name} mb={3}>
                                    {variant.name} variant
                                </Heading>
                                <Text fontSize="sm" color="gray.600">
                                    {variant.description}
                                </Text>
                                <Badge mt={3} colorScheme="purple" fontSize="xs">
                                    variant={variant.name}
                                </Badge>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>

                <Divider />

                {/* Real-world Examples Section */}
                <Box as="section">
                    <Heading as="h2" size="3xl" mb={8}>
                        Real-world Examples
                    </Heading>

                    {/* Article Example */}
                    <Box mb={12} bg="white" p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="3xl" mb={4}>
                            Article Layout Example
                        </Heading>

                        <Heading as="h1" size="4xl" mb={6} color="brand.primary">
                            How to Master Typography in Web Design
                        </Heading>

                        <Text fontSize="xl" color="gray.600" mb={10}>
                            Published on February 27, 2025 • 10 min read
                        </Text>

                        <Heading as="h2" size="2xl" mb={4} variant="section">
                            The Fundamentals of Type
                        </Heading>

                        <Text mb={8}>
                            Typography begins with understanding how different elements work together to create hierarchy and flow.
                        </Text>

                        <Heading as="h3" size="xl" mb={3} fontWeight="semibold">
                            Choosing the Right Typeface
                        </Heading>

                        <Text mb={8}>
                            The typeface you select sets the tone for your entire design. Consider both readability and personality.
                        </Text>

                        <Heading as="h4" size="lg" mb={2} color="brand.secondary">
                            Font Pairing Strategies
                        </Heading>

                        <Text mb={6}>
                            Effective font pairing creates contrast while maintaining harmony throughout your design.
                        </Text>

                        <Badge colorScheme="gray">Article Layout Example</Badge>
                    </Box>

                    {/* Dashboard Example */}
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            md: "repeat(3, 1fr)"
                        }}
                        gap={6}
                        mb={10}
                    >
                        <GridItem colSpan={{ base: 1, md: 3 }}>
                            <Heading as="h2" size="3xl" mb={4}>
                                Dashboard UI Example
                            </Heading>
                        </GridItem>

                        <GridItem>
                            <Card>
                                <CardHeader>
                                    <Heading as="h3" size="lg" fontWeight="semibold">
                                        Monthly Sales
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Heading as="h4" size="3xl" fontWeight="bold" color="brand.accent">
                                        $24,834
                                    </Heading>
                                    <Text color="green.500" fontWeight="medium">
                                        +12% from last month
                                    </Text>
                                </CardBody>
                            </Card>
                        </GridItem>

                        <GridItem>
                            <Card>
                                <CardHeader>
                                    <Heading as="h3" size="lg" fontWeight="semibold">
                                        Active Users
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Heading as="h4" size="3xl" fontWeight="bold" color="brand.secondary">
                                        1,248
                                    </Heading>
                                    <Text color="gray.500" fontWeight="medium">
                                        +8% from last week
                                    </Text>
                                </CardBody>
                            </Card>
                        </GridItem>

                        <GridItem>
                            <Card>
                                <CardHeader>
                                    <Heading as="h3" size="lg" fontWeight="semibold">
                                        Conversion Rate
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Heading as="h4" size="3xl" fontWeight="bold" color="brand.primary">
                                        3.6%
                                    </Heading>
                                    <Text color="red.500" fontWeight="medium">
                                        -0.4% from last month
                                    </Text>
                                </CardBody>
                            </Card>
                        </GridItem>

                        <GridItem colSpan={{ base: 1, md: 3 }}>
                            <Badge colorScheme="gray">Dashboard UI Example</Badge>
                        </GridItem>
                    </Grid>
                </Box>
            </VStack>
        </Container>
    )
}