export const Button = {
    baseStyle: {
        fontWeight: 'bold',
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
            padding: '12px 27px',
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
        outlinePrimary: {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '10px',
            bg: '#FFFFFF',
            color: '#33475B',
            border: '2px solid #33475B',
            borderRadius: '5px',
            _hover: {
                bg: '#f7f9fb',
                color: '#2a3b4c',
                borderColor: '#2a3b4c',
            },
            _active: {
                bg: '#f0f3f5',
                color: '#23323f',
                borderColor: '#23323f',
            }
        },
        outlineSecondary: {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '10px',
            bg: '#FFFFFF',
            color: '#0091AE',
            border: '2px solid #0091AE',
            borderRadius: '5px',
            _hover: {
                bg: '#f7f9fb',
                color: '#007a93',
                borderColor: '#007a93',
            },
            _active: {
                bg: '#f0f3f5',
                color: '#006a80',
                borderColor: '#006a80',
            }
        },
        outlineTertiary: {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '10px',
            bg: '#FFFFFF',
            color: '#FF7A53',
            border: '2px solid #FF7A53',
            borderRadius: '5px',
            _hover: {
                bg: '#f7f9fb',
                color: '#e86e4a',
                borderColor: '#e86e4a',
            },
            _active: {
                bg: '#f0f3f5',
                color: '#d5613f',
                borderColor: '#d5613f',
            }
        },
        ghostPrimary: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '13px',
            height: '30px',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#33475B', // Using primary color for text
            _hover: {
                color: '#2a3b4c',
                backgroundColor: 'rgba(51, 71, 91, 0.05)',
            },
            _active: {
                color: '#23323f',
                backgroundColor: 'rgba(51, 71, 91, 0.1)',
            }
        },
        ghostSecondary: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '13px',
            height: '30px',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#0091AE', // Using secondary color for text
            _hover: {
                color: '#007a93',
                backgroundColor: 'rgba(0, 145, 174, 0.05)',
            },
            _active: {
                color: '#006a80',
                backgroundColor: 'rgba(0, 145, 174, 0.1)',
            }
        },
        ghostTertiary: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '13px',
            height: '30px',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#FF7A53', // Using tertiary color for text
            _hover: {
                color: '#e86e4a',
                backgroundColor: 'rgba(255, 122, 83, 0.05)',
            },
            _active: {
                color: '#d5613f',
                backgroundColor: 'rgba(255, 122, 83, 0.1)',
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