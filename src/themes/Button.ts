export const Button = {
    baseStyle: {
        fontWeight: 'normal',
        borderRadius: '5px',
        _focus: {
            boxShadow: 'none'
        },
        color: 'white'
    },

    variants: {
        primary: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 27px',
            gap: '10px',
            bg: '#33475B',
            color: 'white',
            _hover: {
                bg: '#2a3b4c',
            },
            _active: {
                bg: '#23323f',
            }
        },
        secondary: {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7px 14px',
            bg: '#0091AE',
            color: 'white',
            border: '1px solid #CBD6E2',
            _hover: {
                bg: '#007a93',
            },
            _active: {
                bg: '#006a80',
            }
        },
        tertiary: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 27px',
            gap: '10px',
            bg: '#FF7A53',
            color: 'white',
            _hover: {
                bg: '#e86e4a',
            },
            _active: {
                bg: '#d5613f',
            }
        },
        unstyled: {
            background: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            border: 'none',
            padding: 0,
            margin: 0,
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            borderRadius: 0,
            height: 'auto',
            minWidth: 'auto',
            boxShadow: 'none',
            textDecoration: 'none',
            position: 'static',
            display: 'inline-block',
            _hover: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                textDecoration: 'none',
            },
            _active: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            _focus: {
                boxShadow: 'none',
                outline: 'none',
            },
            transition: 'none',
        }
    },

    sizes: {
        sm: {
            height: '38px',
            fontSize: 'sm',
        },
        md: {
            height: '48px',
            fontSize: 'md',
        },
        lg: {
            height: '58px',
            fontSize: 'lg',
        }
    },

    defaultProps: {
        variant: 'primary',
        size: 'md',
    }
};