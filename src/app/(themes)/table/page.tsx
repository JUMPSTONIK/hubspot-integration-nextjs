'use client'
import React, { useState } from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Text,
    VStack,
    NumberInput,
    NumberInputField,
    Flex,
} from '@chakra-ui/react';

interface ProductRow {
    id: number;
    sku: string;
    name: string;
    unit: number;
    origin: string;
    stock: number;
    discount: number;
    price: number;
    margin: string;
    familyMargin: string;
    cost: string;
    quantity: number;
    total: string;
}

const TableShowcasePage: React.FC = () => {
    const initialData: ProductRow[] = [
        {
            id: 1,
            sku: '#2088394',
            name: 'Interruptor BTicino.Simple',
            unit: 2,
            origin: 'Nac',
            stock: 100,
            discount: 20,
            price: 6.64,
            margin: '2%',
            familyMargin: '2%',
            cost: 'S/3.00',
            quantity: 200,
            total: 'S/XXXX'
        },
        {
            id: 2,
            sku: '#2088394',
            name: 'Interruptor BTicino.Simple',
            unit: 2,
            origin: 'Nac',
            stock: 100,
            discount: 20,
            price: 6.64,
            margin: '2%',
            familyMargin: '2%',
            cost: 'S/3.00',
            quantity: 2,
            total: 'S/XXXX'
        },
        {
            id: 3,
            sku: '#2088394',
            name: 'Interruptor BTicino.Simple',
            unit: 2,
            origin: 'Nac',
            stock: 100,
            discount: 20,
            price: 6.64,
            margin: '2%',
            familyMargin: '2%',
            cost: 'S/3.00',
            quantity: 2,
            total: 'S/XXXX'
        },
        {
            id: 4,
            sku: '#2088394',
            name: 'Interruptor BTicino.Simple',
            unit: 2,
            origin: 'Nac',
            stock: 100,
            discount: 20,
            price: 6.64,
            margin: '2%',
            familyMargin: '2%',
            cost: 'S/3.00',
            quantity: 2,
            total: 'S/XXXX'
        }
    ];

    const [products, setProducts] = useState<ProductRow[]>(initialData);

    const handleQuantityChange = (id: number, newValue: number) => {
        setProducts(currentProducts =>
            currentProducts.map(product =>
                product.id === id ? { ...product, quantity: newValue } : product
            )
        );
    };

    return (
        <Box mx="auto" py={10} px={[4, 6, 8]}>
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">Table Component Showcase</Heading>

                <Text fontSize="md" textAlign="center">
                    Product Inventory Table with Editable Quantities
                </Text>

                <Box overflowX="auto" boxShadow="sm" borderRadius="md">
                    <TableContainer>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th width="50px">N</Th>
                                    <Th width="120px">SKU</Th>
                                    <Th width="200px">Nombres</Th>
                                    <Th width="80px">Unidad</Th>
                                    <Th width="100px">Proced.</Th>
                                    <Th width="80px">Stock</Th>
                                    <Th width="80px">Dsct Sol.</Th>
                                    <Th width="80px">Prec. Inc IGV</Th>
                                    <Th width="80px">Margen</Th>
                                    <Th width="80px">Mar. fam.</Th>
                                    <Th width="100px">Costo prom.</Th>
                                    <Th width="100px">Dcto. 5</Th>
                                    <Th width="100px">Total</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products.map((product) => (
                                    <Tr key={product.id}>
                                        <Td>{product.id}</Td>
                                        <Td>{product.sku}</Td>
                                        <Td color="#0091AE" fontWeight="medium">{product.name}</Td>
                                        <Td>{product.unit}</Td>
                                        <Td>{product.origin}</Td>
                                        <Td isNumeric>{product.stock}</Td>
                                        <Td isNumeric>{product.discount}</Td>
                                        <Td isNumeric>{product.price}</Td>
                                        <Td isNumeric>{product.margin}</Td>
                                        <Td isNumeric>{product.familyMargin}</Td>
                                        <Td>{product.cost}</Td>
                                        <Td>
                                            <NumberInput
                                                value={product.quantity}
                                                min={1}
                                                onChange={(_, valueAsNumber) =>
                                                    handleQuantityChange(product.id, valueAsNumber)
                                                }
                                                size="sm"
                                            >
                                                <NumberInputField textAlign="center" borderRadius="5px" />
                                            </NumberInput>
                                        </Td>
                                        <Td>{product.total}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box mt={8}>
                    <Heading as="h2" size="md" mb={4}>Table Variants</Heading>
                    <Flex direction="column" gap={8}>
                        <Box>
                            <Text mb={2} fontWeight="medium">Simple Variant (Default)</Text>
                            <TableContainer>
                                <Table variant="simple" size="sm">
                                    <Thead>
                                        <Tr>
                                            <Th>Product</Th>
                                            <Th>SKU</Th>
                                            <Th isNumeric>Price</Th>
                                            <Th isNumeric>Quantity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Interruptor BTicino.Simple</Td>
                                            <Td>#2088394</Td>
                                            <Td isNumeric>6.64</Td>
                                            <Td isNumeric>2</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Tomacorriente Triple</Td>
                                            <Td>#2088395</Td>
                                            <Td isNumeric>8.50</Td>
                                            <Td isNumeric>3</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box>
                            <Text mb={2} fontWeight="medium">Striped Variant</Text>
                            <TableContainer>
                                <Table variant="striped" size="sm">
                                    <Thead>
                                        <Tr>
                                            <Th>Product</Th>
                                            <Th>SKU</Th>
                                            <Th isNumeric>Price</Th>
                                            <Th isNumeric>Quantity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Interruptor BTicino.Simple</Td>
                                            <Td>#2088394</Td>
                                            <Td isNumeric>6.64</Td>
                                            <Td isNumeric>2</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Tomacorriente Triple</Td>
                                            <Td>#2088395</Td>
                                            <Td isNumeric>8.50</Td>
                                            <Td isNumeric>3</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box>
                            <Text mb={2} fontWeight="medium">Table Sizes (Medium)</Text>
                            <TableContainer>
                                <Table variant="simple" size="md">
                                    <Thead>
                                        <Tr>
                                            <Th>Product</Th>
                                            <Th>SKU</Th>
                                            <Th isNumeric>Price</Th>
                                            <Th isNumeric>Quantity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Interruptor BTicino.Simple</Td>
                                            <Td>#2088394</Td>
                                            <Td isNumeric>6.64</Td>
                                            <Td isNumeric>2</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Tomacorriente Triple</Td>
                                            <Td>#2088395</Td>
                                            <Td isNumeric>8.50</Td>
                                            <Td isNumeric>3</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box>
                            <Text mb={2} fontWeight="medium">Table Sizes (Large)</Text>
                            <TableContainer>
                                <Table variant="simple" size="lg">
                                    <Thead>
                                        <Tr>
                                            <Th>Product</Th>
                                            <Th>SKU</Th>
                                            <Th isNumeric>Price</Th>
                                            <Th isNumeric>Quantity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Interruptor BTicino.Simple</Td>
                                            <Td>#2088394</Td>
                                            <Td isNumeric>6.64</Td>
                                            <Td isNumeric>2</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Tomacorriente Triple</Td>
                                            <Td>#2088395</Td>
                                            <Td isNumeric>8.50</Td>
                                            <Td isNumeric>3</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Flex>
                </Box>
            </VStack>
        </Box>
    );
};

export default TableShowcasePage;