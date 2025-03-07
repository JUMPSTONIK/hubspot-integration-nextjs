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
    GridItem,
    Select
} from '@chakra-ui/react';

interface FormValues {
    fullName: string;
    email: string;
    age: number;
    phone: string;
    address: string;
    country: string;
    department: string;
    employmentType: string;
    message: string;
}

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
    country: Yup.string().required('Country is required'),
    department: Yup.string().required('Department is required'),
    employmentType: Yup.string(),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
});

const initialValues: FormValues = {
    fullName: '',
    email: '',
    age: 25,
    phone: '',
    address: '',
    country: '',
    department: '',
    employmentType: '',
    message: ''
};

const FormPage: React.FC = () => {
    const toast = useToast();

    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {

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
                                            {({ field, form }: FieldProps<FormValues>) => (
                                                <FormControl isInvalid={!!(form.errors.fullName && form.touched.fullName)}>
                                                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                                                    <Input 
                                                        id="fullName" 
                                                        placeholder="Enter your full name"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    />
                                                    <FormErrorMessage>{form.errors.fullName as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="email">
                                            {({ field, form }: FieldProps<FormValues>) => (
                                                <FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
                                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                                    <Input 
                                                        id="email" 
                                                        placeholder="Enter your email"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    />
                                                    <FormErrorMessage>{form.errors.email as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="phone">
                                            {({ field, form }: FieldProps<FormValues>) => (
                                                <FormControl isInvalid={!!(form.errors.phone && form.touched.phone)}>
                                                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                                                    <Input 
                                                        id="phone" 
                                                        placeholder="Enter your phone number"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    />
                                                    <FormErrorMessage>{form.errors.phone as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="address">
                                            {({ field, form }: FieldProps<FormValues>) => (
                                                <FormControl isInvalid={!!(form.errors.address && form.touched.address)}>
                                                    <FormLabel htmlFor="address">Address</FormLabel>
                                                    <Input 
                                                        id="address" 
                                                        placeholder="Enter your address"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    />
                                                    <FormErrorMessage>{form.errors.address as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>
                                </Grid>
                            </Box>

                            <Divider my={4} />

                            {/* Select Components */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Select Components</Heading>
                                <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
                                    <GridItem>
                                        <Field name="country">
                                            {({ field, form }: FieldProps<FormValues>) => (
                                                <FormControl isInvalid={!!(form.errors.country && form.touched.country)}>
                                                    <FormLabel htmlFor="country">Country</FormLabel>
                                                    <Select 
                                                        id="country" 
                                                        placeholder="Select your country"
                                                        variant="outline"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    >
                                                        <option value="us">United States</option>
                                                        <option value="ca">Canada</option>
                                                        <option value="mx">Mexico</option>
                                                        <option value="uk">United Kingdom</option>
                                                        <option value="fr">France</option>
                                                        <option value="de">Germany</option>
                                                        <option value="jp">Japan</option>
                                                        <option value="au">Australia</option>
                                                    </Select>
                                                    <FormErrorMessage>{form.errors.country as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="department">
                                            {({ field, form }: FieldProps<FormValues>) => (
                                                <FormControl isInvalid={!!(form.errors.department && form.touched.department)}>
                                                    <FormLabel htmlFor="department">Department</FormLabel>
                                                    <Select 
                                                        id="department" 
                                                        placeholder="Select department"
                                                        variant="filled"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    >
                                                        <option value="engineering">Engineering</option>
                                                        <option value="finance">Finance</option>
                                                        <option value="hr">Human Resources</option>
                                                        <option value="marketing">Marketing</option>
                                                        <option value="sales">Sales</option>
                                                        <option value="support">Customer Support</option>
                                                    </Select>
                                                    <FormErrorMessage>{form.errors.department as string}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <Field name="employmentType">
                                            {({ field }: FieldProps<FormValues>) => (
                                                <FormControl>
                                                    <FormLabel htmlFor="employmentType">Employment Type</FormLabel>
                                                    <Select 
                                                        id="employmentType" 
                                                        placeholder="Select employment type (optional)"
                                                        size="lg"
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    >
                                                        <option value="full-time">Full-time</option>
                                                        <option value="part-time">Part-time</option>
                                                        <option value="contract">Contract</option>
                                                        <option value="freelance">Freelance</option>
                                                        <option value="intern">Internship</option>
                                                    </Select>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl isDisabled>
                                            <FormLabel>Disabled Select</FormLabel>
                                            <Select 
                                                placeholder="This select is disabled"
                                                isDisabled
                                            >
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                            </Box>

                            <Divider my={4} />

                            {/* Number Input */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Number Input Component</Heading>
                                <Field name="age">
                                    {({ field, form }: FieldProps<FormValues>) => (
                                        <FormControl isInvalid={!!(form.errors.age && form.touched.age)}>
                                            <FormLabel htmlFor="age">Age</FormLabel>
                                            <NumberInput
                                                id="age"
                                                min={0}
                                                max={120}
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
                                    {({ field, form }: FieldProps<FormValues>) => (
                                        <FormControl isInvalid={!!(form.errors.message && form.touched.message)}>
                                            <FormLabel htmlFor="message">Message</FormLabel>
                                            <Textarea
                                                id="message"
                                                placeholder="Write your message here"
                                                rows={5}
                                                name={field.name}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                            />
                                            <FormErrorMessage>{form.errors.message as string}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>

                            <Divider my={4} />

                            {/* Component States */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Component States</Heading>
                                <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={6}>
                                    {/* Input States */}
                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Disabled Input</FormLabel>
                                            <Input isDisabled placeholder="Disabled input" />
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <FormControl isInvalid={true}>
                                            <FormLabel>Invalid Input</FormLabel>
                                            <Input placeholder="Invalid input" />
                                            <FormErrorMessage>This field has an error</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    
                                    {/* Select States */}
                                    <GridItem>
                                        <FormControl isInvalid={true}>
                                            <FormLabel>Invalid Select</FormLabel>
                                            <Select placeholder="Invalid select">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                            </Select>
                                            <FormErrorMessage>This field has an error</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    {/* Number Input States */}
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

                                    {/* Textarea States */}
                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Disabled Textarea</FormLabel>
                                            <Textarea isDisabled placeholder="Disabled textarea" />
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

                            {/* Select Variants */}
                            <Box>
                                <Heading as="h2" size="md" mb={4}>Select Variants</Heading>
                                <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={6}>
                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Outline Variant</FormLabel>
                                            <Select placeholder="Select option" variant="outline">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    
                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Filled Variant</FormLabel>
                                            <Select placeholder="Select option" variant="filled">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    
                                    <GridItem>
                                        <FormControl>
                                            <FormLabel>Flushed Variant</FormLabel>
                                            <Select placeholder="Select option" variant="flushed">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </Select>
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