'use client'
import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Text,
    Flex,
    Grid,
    GridItem,
    Button,
    IconButton,
    Divider,
    HStack,
    Badge,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Tooltip,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react';
import { DeleteIcon } from '@shared/icons/Delete';
import { EditIcon } from '@shared/icons/Edit';
import { EditNoteIcon } from '@shared/icons/EditNote';
import { RemoveIcon } from '@shared/icons/Remove';
import { SearchIcon } from '@shared/icons/Search';


const IconShowcasePage: React.FC = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.700');

    return (
        <Box maxWidth="1200px" mx="auto" py={10} px={[4, 6, 8]}>
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">Custom Icons Showcase</Heading>

                <Text fontSize="md" textAlign="center" mb={6}>
                    A collection of custom SVG icons for use throughout the application
                </Text>

                {/* Basic Icons Display */}
                <Box>
                    <Heading as="h2" size="lg" mb={6}>Icon Library</Heading>
                    <Grid templateColumns={["1fr", "1fr 1fr", "repeat(5, 1fr)"]} gap={6}>

                        {/* DeleteIcon */}
                        <GridItem bg={bgColor} p={6} borderRadius="md" boxShadow="sm">
                            <VStack spacing={4}>
                                <DeleteIcon boxSize={10} />
                                <Text fontWeight="medium">DeleteIcon</Text>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Used for delete actions and removing items
                                </Text>
                            </VStack>
                        </GridItem>

                        {/* EditIcon */}
                        <GridItem bg={bgColor} p={6} borderRadius="md" boxShadow="sm">
                            <VStack spacing={4}>
                                <EditIcon boxSize={10} />
                                <Text fontWeight="medium">EditIcon</Text>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Used for edit actions and modifying content
                                </Text>
                            </VStack>
                        </GridItem>

                        {/* EditNoteIcon */}
                        <GridItem bg={bgColor} p={6} borderRadius="md" boxShadow="sm">
                            <VStack spacing={4}>
                                <EditNoteIcon boxSize={10} />
                                <Text fontWeight="medium">EditNoteIcon</Text>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Used for editing notes and text content
                                </Text>
                            </VStack>
                        </GridItem>

                        {/* RemoveIcon */}
                        <GridItem bg={bgColor} p={6} borderRadius="md" boxShadow="sm">
                            <VStack spacing={4}>
                                <RemoveIcon boxSize={10} />
                                <Text fontWeight="medium">RemoveIcon</Text>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Used for closing modals and removing selections
                                </Text>
                            </VStack>
                        </GridItem>

                        {/* SearchIcon */}
                        <GridItem bg={bgColor} p={6} borderRadius="md" boxShadow="sm">
                            <VStack spacing={4}>
                                <SearchIcon boxSize={10} />
                                <Text fontWeight="medium">SearchIcon</Text>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Used for search functionality and finding content
                                </Text>
                            </VStack>
                        </GridItem>
                    </Grid>
                </Box>

                <Divider my={8} />

                {/* Icon Sizes */}
                <Box>
                    <Heading as="h2" size="lg" mb={6}>Icon Sizes</Heading>
                    <Grid templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap={6}>
                        <GridItem>
                            <VStack align="center" spacing={4}>
                                <Heading as="h3" size="sm">Extra Small (4)</Heading>
                                <Flex justify="space-around" width="100%">
                                    <DeleteIcon boxSize={4} />
                                    <EditIcon boxSize={4} />
                                    <EditNoteIcon boxSize={4} />
                                    <RemoveIcon boxSize={4} />
                                    <SearchIcon boxSize={4} />
                                </Flex>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <VStack align="center" spacing={4}>
                                <Heading as="h3" size="sm">Small (6)</Heading>
                                <Flex justify="space-around" width="100%">
                                    <DeleteIcon boxSize={6} />
                                    <EditIcon boxSize={6} />
                                    <EditNoteIcon boxSize={6} />
                                    <RemoveIcon boxSize={6} />
                                    <SearchIcon boxSize={6} />
                                </Flex>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <VStack align="center" spacing={4}>
                                <Heading as="h3" size="sm">Medium (8)</Heading>
                                <Flex justify="space-around" width="100%">
                                    <DeleteIcon boxSize={8} />
                                    <EditIcon boxSize={8} />
                                    <EditNoteIcon boxSize={8} />
                                    <RemoveIcon boxSize={8} />
                                    <SearchIcon boxSize={8} />
                                </Flex>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <VStack align="center" spacing={4}>
                                <Heading as="h3" size="sm">Large (12)</Heading>
                                <Flex justify="space-around" width="100%">
                                    <DeleteIcon boxSize={12} />
                                    <EditIcon boxSize={12} />
                                    <EditNoteIcon boxSize={12} />
                                    <RemoveIcon boxSize={12} />
                                    <SearchIcon boxSize={12} />
                                </Flex>
                            </VStack>
                        </GridItem>
                    </Grid>
                </Box>

                <Divider my={8} />

                {/* Icon Usage Examples */}
                <Box>
                    <Heading as="h2" size="lg" mb={6}>Usage Examples</Heading>

                    {/* Table with Action Icons */}
                    <Box mb={10}>
                        <Heading as="h3" size="md" mb={4}>Table with Action Icons</Heading>
                        <TableContainer>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Email</Th>
                                        <Th>Status</Th>
                                        <Th>Actions</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>John Doe</Td>
                                        <Td>john.doe@example.com</Td>
                                        <Td>Active</Td>
                                        <Td>
                                            <HStack spacing={2}>
                                                <Tooltip label="Search records">
                                                    <IconButton
                                                        aria-label="Search records"
                                                        icon={<SearchIcon boxSize={5} />}
                                                        variant="ghostPrimary"
                                                        size="sm"
                                                    />
                                                </Tooltip>
                                                <Tooltip label="Edit user">
                                                    <IconButton
                                                        aria-label="Edit user"
                                                        icon={<EditIcon boxSize={5} />}
                                                        variant="ghostPrimary"
                                                        size="sm"
                                                    />
                                                </Tooltip>
                                                <Tooltip label="Delete user">
                                                    <IconButton
                                                        aria-label="Delete user"
                                                        icon={<DeleteIcon boxSize={5} />}
                                                        variant="ghostSecondary"
                                                        size="sm"
                                                    />
                                                </Tooltip>
                                            </HStack>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Jane Smith</Td>
                                        <Td>jane.smith@example.com</Td>
                                        <Td>Inactive</Td>
                                        <Td>
                                            <HStack spacing={2}>
                                                <Tooltip label="Search records">
                                                    <IconButton
                                                        aria-label="Search records"
                                                        icon={<SearchIcon boxSize={5} />}
                                                        variant="ghostPrimary"
                                                        size="sm"
                                                    />
                                                </Tooltip>
                                                <Tooltip label="Edit user">
                                                    <IconButton
                                                        aria-label="Edit user"
                                                        icon={<EditIcon boxSize={5} />}
                                                        variant="ghostPrimary"
                                                        size="sm"
                                                    />
                                                </Tooltip>
                                                <Tooltip label="Delete user">
                                                    <IconButton
                                                        aria-label="Delete user"
                                                        icon={<DeleteIcon boxSize={5} />}
                                                        variant="ghostSecondary"
                                                        size="sm"
                                                    />
                                                </Tooltip>
                                            </HStack>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {/* Card with Icons */}
                    <Box>
                        <Heading as="h3" size="md" mb={4}>Card with Icons</Heading>
                        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
                            <Card>
                                <CardHeader>
                                    <Flex justify="space-between" align="center">
                                        <Heading size="md">Project Task</Heading>
                                        <HStack>
                                            <IconButton
                                                aria-label="Search task"
                                                icon={<SearchIcon boxSize={5} />}
                                                variant="ghost"
                                                size="sm"
                                            />
                                            <IconButton
                                                aria-label="Edit task"
                                                icon={<EditIcon boxSize={5} />}
                                                variant="ghost"
                                                size="sm"
                                            />
                                            <IconButton
                                                aria-label="Delete task"
                                                icon={<DeleteIcon boxSize={5} />}
                                                variant="ghost"
                                                size="sm"
                                            />
                                        </HStack>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Text>Review the project requirements and make notes on implementation details.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button leftIcon={<EditNoteIcon />} variant="ghostPrimary" size="sm">
                                        Add Notes
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Flex justify="space-between" align="center">
                                        <Heading size="md">Document</Heading>
                                        <Badge colorScheme="green">Completed</Badge>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Text>Final project proposal with budget estimates and timeline.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex justifyContent="space-between" width="100%">
                                        <Button leftIcon={<SearchIcon />} variant="outlineSecondary" size="sm" mr={2}>
                                            Search
                                        </Button>
                                        <Button leftIcon={<EditIcon />} variant="outlineSecondary" size="sm">
                                            Edit
                                        </Button>
                                        <IconButton
                                            aria-label="Remove document"
                                            icon={<RemoveIcon boxSize={5} />}
                                            variant="ghostTertiary"
                                            size="sm"
                                        />
                                    </Flex>
                                </CardFooter>
                            </Card>
                        </Grid>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default IconShowcasePage;