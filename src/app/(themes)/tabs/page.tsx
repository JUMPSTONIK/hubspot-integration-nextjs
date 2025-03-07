'use client'
import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Divider,
    Grid,
    GridItem,
    Flex,
    Icon,
    Badge,
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react';
import { FaHome, FaUser, FaCog, FaEnvelope, FaCheck, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

const TabsShowcasePage: React.FC = () => {
    return (
        <Box maxWidth="1000px" mx="auto" py={10} px={[4, 6, 8]}>
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">Tabs Component Showcase</Heading>

                <Text fontSize="md" textAlign="center" mb={6}>
                    Various styles and sizes of the Tabs component
                </Text>

                {/* Enclosed Tabs (Default) */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>Enclosed Tabs (Default)</Heading>
                    <Box mx="auto">
                        <Tabs variant="enclosed">
                            <TabList>
                                <Tab>Account Information</Tab>
                                <Tab>Personal Details</Tab>
                                <Tab>Payment Methods</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Heading as="h3" size="sm" mb={3}>Account Information</Heading>
                                    <Text mb={3}>Manage your account settings and preferences.</Text>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={FaCheck} color="green.500" />
                                            Email: user@example.com
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={FaCheck} color="green.500" />
                                            Username: user123
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={FaInfoCircle} color="blue.500" />
                                            Account created: January 15, 2023
                                        </ListItem>
                                    </List>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h3" size="sm" mb={3}>Personal Details</Heading>
                                    <Text mb={3}>Update your personal information.</Text>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={FaCheck} color="green.500" />
                                            Name: John Doe
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={FaCheck} color="green.500" />
                                            Phone: (555) 123-4567
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={FaExclamationTriangle} color="orange.500" />
                                            Address: Please add your address
                                        </ListItem>
                                    </List>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h3" size="sm" mb={3}>Payment Methods</Heading>
                                    <Text mb={3}>Manage your payment methods and billing information.</Text>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={FaCheck} color="green.500" />
                                            Credit Card ending in 4321
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={FaCheck} color="green.500" />
                                            PayPal account linked
                                        </ListItem>
                                    </List>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Box>

                <Divider my={8} />

                {/* Tab Variants */}
                <Box>
                    <Heading as="h2" size="md" mb={6}>Tab Variants</Heading>
                    <Grid templateColumns={["1fr", "1fr", "repeat(1, 1fr)"]} gap={12}>
                        {/* Soft Rounded Variant */}
                        <GridItem>
                            <Heading as="h3" size="sm" mb={3}>Soft Rounded Variant</Heading>
                            <Tabs variant="soft-rounded" colorScheme="blue">
                                <TabList>
                                    <Tab>Dashboard</Tab>
                                    <Tab>Settings</Tab>
                                    <Tab>Messages</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>View your dashboard with key metrics and information.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Configure your application settings and preferences.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Read and respond to your messages and notifications.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </GridItem>

                        {/* Solid Rounded Variant */}
                        <GridItem>
                            <Heading as="h3" size="sm" mb={3}>Solid Rounded Variant</Heading>
                            <Tabs variant="solid-rounded">
                                <TabList>
                                    <Tab>Products</Tab>
                                    <Tab>Services</Tab>
                                    <Tab>Resources</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>Browse our products catalog and featured items.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Learn about the services we offer to our customers.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Access helpful resources, guides, and documentation.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </GridItem>

                        {/* Line Variant */}
                        <GridItem>
                            <Heading as="h3" size="sm" mb={3}>Line Variant</Heading>
                            <Tabs variant="line">
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Features</Tab>
                                    <Tab>Pricing</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>Get a high-level overview of our product capabilities.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Explore the detailed features and functionality of our product.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>View our transparent pricing and subscription options.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </GridItem>
                    </Grid>
                </Box>

                <Divider my={8} />

                {/* Tab Sizes */}
                <Box>
                    <Heading as="h2" size="md" mb={6}>Tab Sizes</Heading>
                    <VStack spacing={12} align="stretch">
                        {/* Small Size */}
                        <Box>
                            <Heading as="h3" size="sm" mb={3}>Small Size</Heading>
                            <Tabs size="sm" variant="enclosed">
                                <TabList>
                                    <Tab>Summary</Tab>
                                    <Tab>Details</Tab>
                                    <Tab>Notes</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>A brief summary of the content.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>More detailed information and context.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Additional notes and references.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>

                        {/* Medium Size (Default) */}
                        <Box>
                            <Heading as="h3" size="sm" mb={3}>Medium Size (Default)</Heading>
                            <Tabs size="md" variant="enclosed">
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Specifications</Tab>
                                    <Tab>Reviews</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>A comprehensive overview of the product.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Technical specifications and requirements.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Customer reviews and ratings.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>

                        {/* Large Size */}
                        <Box>
                            <Heading as="h3" size="sm" mb={3}>Large Size</Heading>
                            <Tabs size="lg" variant="enclosed">
                                <TabList>
                                    <Tab>Introduction</Tab>
                                    <Tab>Getting Started</Tab>
                                    <Tab>Advanced</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>An introduction to the product and its features.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Quick start guide for beginners.</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Advanced usage and configuration options.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </VStack>
                </Box>

                <Divider my={8} />

                {/* Advanced Examples */}
                <Box>
                    <Heading as="h2" size="md" mb={6}>Advanced Examples</Heading>

                    {/* Tabs with Icons */}
                    <Box mb={12}>
                        <Heading as="h3" size="sm" mb={3}>Tabs with Icons</Heading>
                        <Tabs variant="enclosed">
                            <TabList>
                                <Tab>
                                    <Flex align="center">
                                        <Icon as={FaHome} mr={2} />
                                        <Text>Home</Text>
                                    </Flex>
                                </Tab>
                                <Tab>
                                    <Flex align="center">
                                        <Icon as={FaUser} mr={2} />
                                        <Text>Profile</Text>
                                    </Flex>
                                </Tab>
                                <Tab>
                                    <Flex align="center">
                                        <Icon as={FaCog} mr={2} />
                                        <Text>Settings</Text>
                                    </Flex>
                                </Tab>
                                <Tab>
                                    <Flex align="center">
                                        <Icon as={FaEnvelope} mr={2} />
                                        <Text>Messages</Text>
                                    </Flex>
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Home Dashboard</Heading>
                                    <Text>Welcome to your personalized dashboard. Here you can see an overview of your recent activity and important notifications.</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>User Profile</Heading>
                                    <Text>Manage your profile information, avatar, and personal settings.</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Account Settings</Heading>
                                    <Text>Configure your account settings, notification preferences, and security options.</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Message Center</Heading>
                                    <Text>Read and respond to messages from your contacts and team members.</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>

                    {/* Tabs with Badges */}
                    <Box>
                        <Heading as="h3" size="sm" mb={3}>Tabs with Notification Badges</Heading>
                        <Tabs variant="enclosed">
                            <TabList>
                                <Tab>
                                    <Flex align="center">
                                        <Text>Inbox</Text>
                                        <Badge ml={2} colorScheme="red" borderRadius="full">3</Badge>
                                    </Flex>
                                </Tab>
                                <Tab>
                                    <Flex align="center">
                                        <Text>Drafts</Text>
                                        <Badge ml={2} colorScheme="gray" borderRadius="full">2</Badge>
                                    </Flex>
                                </Tab>
                                <Tab>
                                    <Flex align="center">
                                        <Text>Sent</Text>
                                    </Flex>
                                </Tab>
                                <Tab isDisabled>
                                    <Flex align="center">
                                        <Text>Archived</Text>
                                    </Flex>
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Inbox (3 unread)</Heading>
                                    <Text>You have 3 unread messages in your inbox.</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Drafts (2)</Heading>
                                    <Text>You have 2 draft messages saved.</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Sent Messages</Heading>
                                    <Text>View your sent messages and delivery status.</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading as="h4" size="sm" mb={2}>Archived Messages</Heading>
                                    <Text>Access your archived messages and history.</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default TabsShowcasePage;