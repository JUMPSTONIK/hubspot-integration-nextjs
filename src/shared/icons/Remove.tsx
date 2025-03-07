import { ChakraProps, Icon } from '@chakra-ui/react'

export const RemoveIcon = (props: ChakraProps) => (
    <Icon viewBox='0 0 16 16' {...props} fill='none'>
        <rect width="16" height="16" rx="8" fill="#33475B" />
        <path d="M4.8 12L4 11.2L7.2 8L4 4.8L4.8 4L8 7.2L11.2 4L12 4.8L8.8 8L12 11.2L11.2 12L8 8.8L4.8 12Z" fill="white" />
    </Icon>
)
