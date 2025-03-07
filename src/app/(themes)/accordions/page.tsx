'use client'
import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Divider,
    Grid,
    GridItem,
    Flex,
    Icon,
    Badge
} from '@chakra-ui/react';
import { FaChevronDown, FaLaptop, FaCreditCard, FaShippingFast, FaQuestionCircle } from 'react-icons/fa';

const AccordionShowcasePage: React.FC = () => {
    return (
        <Box maxWidth="1000px" mx="auto" py={10} px={[4, 6, 8]}>
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">Accordion Component Showcase</Heading>

                <Text fontSize="md" textAlign="center" mb={6}>
                    Various styles and sizes of the Accordion component
                </Text>

                {/* Standard Accordion (Default) */}
                <Box>
                    <Heading as="h2" size="md" mb={4}>Standard Accordion (Default)</Heading>
                    <Box maxW="533px" mx="auto">
                        <Accordion>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            What is your return policy?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    We offer a 30-day return policy for most items. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            How do I track my order?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number on our website or the carriers website to track your package.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            Do you ship internationally?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Yes, we ship to most countries worldwide. International shipping rates and delivery times vary depending on the destination. You can see the shipping cost during checkout before completing your purchase.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Box>

                <Divider my={8} />

                {/* Accordion Variants */}
                <Box>
                    <Heading as="h2" size="md" mb={6}>Accordion Variants</Heading>
                    <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
                        {/* Filled Variant */}
                        <GridItem>
                            <Heading as="h3" size="sm" mb={3}>Filled Variant</Heading>
                            <Accordion variant="filled" defaultIndex={[0]}>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Payment Methods
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        We accept Visa, MasterCard, American Express, and PayPal. All transactions are secure and encrypted.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Billing Information
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        Your billing address must match the address associated with your credit card for verification purposes.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </GridItem>

                        {/* Flush Variant */}
                        <GridItem>
                            <Heading as="h3" size="sm" mb={3}>Flush Variant</Heading>
                            <Accordion variant="flush" defaultIndex={[0]}>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Shipping Information
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free shipping is available for orders over $50.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Delivery Options
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        We offer standard delivery, express delivery, and same-day delivery in select metro areas. Delivery timeframes are estimates and not guaranteed.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </GridItem>
                    </Grid>
                </Box>

                <Divider my={8} />

                {/* Accordion Sizes */}
                <Box>
                    <Heading as="h2" size="md" mb={6}>Accordion Sizes</Heading>
                    <VStack spacing={8} align="stretch">
                        {/* Small Size */}
                        <Box>
                            <Heading as="h3" size="sm" mb={3}>Small Size</Heading>
                            <Box maxW="533px" mx="auto">
                                <Accordion size="sm">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Technical Specifications
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            Our product meets all industry standards and specifications. For detailed technical information, please refer to the product manual.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>

                        {/* Medium Size (Default) */}
                        <Box>
                            <Heading as="h3" size="sm" mb={3}>Medium Size (Default)</Heading>
                            <Box maxW="533px" mx="auto">
                                <Accordion size="md">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Customer Support
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            Our customer support team is available Monday through Friday, 9am to 5pm EST. You can reach us by phone, email, or live chat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>

                        {/* Large Size */}
                        <Box>
                            <Heading as="h3" size="sm" mb={3}>Large Size</Heading>
                            <Box maxW="533px" mx="auto">
                                <Accordion size="lg">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Warranty Information
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            All our products come with a standard 1-year limited warranty that covers manufacturing defects. Extended warranty options are available for purchase at checkout.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>
                    </VStack>
                </Box>

                <Divider my={8} />

                {/* Advanced Examples */}
                <Box>
                    <Heading as="h2" size="md" mb={6}>Advanced Examples</Heading>

                    {/* Custom Icons */}
                    <Box mb={8}>
                        <Heading as="h3" size="sm" mb={3}>Custom Icons</Heading>
                        <Box maxW="533px" mx="auto">
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Flex flex="1" textAlign="left" alignItems="center">
                                                <Icon as={FaLaptop} mr={3} color="#0091AE" />
                                                <Text>Technical Support</Text>
                                            </Flex>
                                            <Icon as={FaChevronDown} transition="all 0.2s" transform={`rotate(0deg)`} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        Our technical support team can help with installation, troubleshooting, and product-related issues. Contact us for assistance.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Flex flex="1" textAlign="left" alignItems="center">
                                                <Icon as={FaCreditCard} mr={3} color="#0091AE" />
                                                <Text>Payment Options</Text>
                                            </Flex>
                                            <Icon as={FaChevronDown} transition="all 0.2s" transform={`rotate(0deg)`} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        We accept various payment methods including credit cards, debit cards, and digital wallets. All payments are processed securely.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Flex flex="1" textAlign="left" alignItems="center">
                                                <Icon as={FaShippingFast} mr={3} color="#0091AE" />
                                                <Text>Shipping & Delivery</Text>
                                            </Flex>
                                            <Icon as={FaChevronDown} transition="all 0.2s" transform={`rotate(0deg)`} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        We ship to most countries worldwide. Shipping times vary depending on your location and chosen shipping method.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>

                    {/* FAQ Style with Badges */}
                    <Box>
                        <Heading as="h3" size="sm" mb={3}>FAQ Style with Badges</Heading>
                        <Box maxW="533px" mx="auto">
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                <Flex alignItems="center">
                                                    <Icon as={FaQuestionCircle} mr={3} color="#0091AE" />
                                                    <Text>How do I create an account?</Text>
                                                    <Badge ml={2} colorScheme="green">Easy</Badge>
                                                </Flex>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        To create an account, click on the Sign Up button in the top right corner of our website. Fill out the required information and click Create Account. Youll receive a confirmation email to activate your account.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                <Flex alignItems="center">
                                                    <Icon as={FaQuestionCircle} mr={3} color="#0091AE" />
                                                    <Text>How do I reset my password?</Text>
                                                    <Badge ml={2} colorScheme="green">Easy</Badge>
                                                </Flex>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        To reset your password, click on the Forgot Password link on the login page. Enter your email address, and well send you a link to reset your password. Follow the instructions in the email to create a new password.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                <Flex alignItems="center">
                                                    <Icon as={FaQuestionCircle} mr={3} color="#0091AE" />
                                                    <Text>How do I set up two-factor authentication?</Text>
                                                    <Badge ml={2} colorScheme="yellow">Medium</Badge>
                                                </Flex>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        To set up two-factor authentication, go to your account settings and select Security. Under the Two-Factor Authentication section, click Enable and follow the instructions to set up an authentication app on your mobile device.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default AccordionShowcasePage;