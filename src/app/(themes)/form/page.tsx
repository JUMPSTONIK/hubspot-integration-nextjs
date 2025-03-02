'use client'
import React from 'react';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
    VStack,
    Heading,
    Text,
    Flex,
    Divider,
    useToast,
    Grid,
    GridItem
} from '@chakra-ui/react';

// Define the form values interface
interface FormValues {
    fullName: string;
    email: string;
    age: number;
    phone: string;
    address: string;
    message: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    age: Yup.number()
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .min(18, 'You must be at least 18 years old')
        .required('Age is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
});

// Initial form values
const initialValues: FormValues = {
    fullName: '',
    email: '',
    age: 25,
    phone: '',
    address: '',
    message: ''
};

const FormPage: React.FC = () => {
    const toast = useToast();

    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        // Simulate form submission
        setTimeout(() => {
            console.log('Form values:', values);
            toast({
                title: 'Form submitted',
                description: 'We received your submission',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            actions.setSubmitting(false);
            actions.resetForm();
        }, 1000);
    };

    return (
        <Box maxWidth="800px" mx="auto" py={10} px={[4, 6, 8]}>
            <Heading as="h1" size="xl" mb={8} textAlign="center">Form Components Showcase</Heading>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form>
                        <VStack spacing={6} align="stretch">
                            {/* Regular Input Fields */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Input Components</Heading>
                                <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
                                    <GridItem>
                                        <Field name="fullName">
                                            {({ field, form }: FieldProps) => (
                                                <FormControl isInvalid={!!(form.errors.fullName && form.touched.fullName)}>
                                                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                                                    <Input {...field} id="fullName" placeholder="Enter your full name" />
                                                    <FormErrorMessage>{form.errors.fullName as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="email">
                                            {({ field, form }: FieldProps) => (
                                                <FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
                                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                                    <Input {...field} id="email" placeholder="Enter your email" />
                                                    <FormErrorMessage>{form.errors.email as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="phone">
                                            {({ field, form }: FieldProps) => (
                                                <FormControl isInvalid={!!(form.errors.phone && form.touched.phone)}>
                                                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                                                    <Input {...field} id="phone" placeholder="Enter your phone number" />
                                                    <FormErrorMessage>{form.errors.phone as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="address">
                                            {({ field, form }: FieldProps) => (
                                                <FormControl isInvalid={!!(form.errors.address && form.touched.address)}>
                                                    <FormLabel htmlFor="address">Address</FormLabel>
                                                    <Input {...field} id="address" placeholder="Enter your address" />
                                                    <FormErrorMessage>{form.errors.address as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>
                                </Grid>
                            </Box>

                            <Divider my={4} />

                            {/* Number Input */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Number Input Component</Heading>
                                <Field name="age">
                                    {({ field, form }: FieldProps) => (
                                        <FormControl isInvalid={!!(form.errors.age && form.touched.age)}>
                                            <FormLabel htmlFor="age">Age</FormLabel>
                                            <NumberInput
                                                id="age"
                                                min={0}
                                                max={120}
                                                value={field.value}
                                                onChange={(valueString: string) => {
                                                    form.setFieldValue(field.name, valueString === '' ? '' : parseInt(valueString, 10));
                                                }}
                                            >
                                                <NumberInputField placeholder="Enter your age" />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <FormErrorMessage>{form.errors.age as string}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>

                            <Divider my={4} />

                            {/* Textarea */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Textarea Component</Heading>
                                <Field name="message">
                                    {({ field, form }: FieldProps) => (
                                        <FormControl isInvalid={!!(form.errors.message && form.touched.message)}>
                                            <FormLabel htmlFor="message">Message</FormLabel>
                                            <Textarea
                                                {...field}
                                                id="message"
                                                placeholder="Write your message here"
                                                rows={5}
                                            />
                                            <FormErrorMessage>{form.errors.message as string}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>

                            <Divider my={4} />

                            {/* Form States */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Component States</Heading>
                                <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={6}>
                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Disabled Input</FormLabel>
                                            <Input isDisabled placeholder="Disabled input" />
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Disabled Number Input</FormLabel>
                                            <NumberInput isDisabled>
                                                <NumberInputField placeholder="Disabled" />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Disabled Textarea</FormLabel>
                                            <Textarea isDisabled placeholder="Disabled textarea" />
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl isInvalid={true}>
                                            <FormLabel>Invalid Input</FormLabel>
                                            <Input placeholder="Invalid input" />
                                            <FormErrorMessage>This field has an error</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl isInvalid={true}>
                                            <FormLabel>Invalid Number Input</FormLabel>
                                            <NumberInput>
                                                <NumberInputField placeholder="Invalid" />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <FormErrorMessage>This field has an error</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl isInvalid={true}>
                                            <FormLabel>Invalid Textarea</FormLabel>
                                            <Textarea placeholder="Invalid textarea" />
                                            <FormErrorMessage>This field has an error</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                            </Box>

                            <Box pt={6}>
                                <Flex justify="space-between">
                                    <Button
                                        variant="outlineSecondary"
                                        onClick={() => props.resetForm()}
                                        isDisabled={props.isSubmitting}
                                    >
                                        Reset Form
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        isLoading={props.isSubmitting}
                                        loadingText="Submitting"
                                    >
                                        Submit Form
                                    </Button>
                                </Flex>
                            </Box>
                        </VStack>
                    </Form>
                )}
            </Formik>

            <Text fontSize="sm" color="gray.500" mt={10} textAlign="center">
                All form components are displayed with their various states above
            </Text>
        </Box>
    );
};

export default FormPage;