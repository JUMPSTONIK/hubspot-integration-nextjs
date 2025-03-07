export const Select = {
    baseStyle: {
        field: {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '9px 13px',
            width: '100%',
            height: '43px',
            border: '1px solid #33475B',
            borderRadius: '10px',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'md',
            color: '#33475B',
            _focus: {
                borderColor: '#0091AE',
                boxShadow: '0 0 0 1px #0091AE',
                background: '#F5F8FA',
            },
            _hover: {
                borderColor: '#0091AE',
            },
            _disabled: {
                opacity: 0.7,
                cursor: 'not-allowed',
            },
            _invalid: {
                borderColor: '#FF7A53',
                boxShadow: '0 0 0 1px #FF7A53',
            }
        },
        icon: {
            fontSize: 'xl',
            color: '#33475B',
            width: '24px',
            height: '24px',
            right: '13px',
        }
    },
    variants: {
        outline: {
            field: {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '9px 13px',
                border: '1px solid #33475B',
                borderRadius: '10px',
                _focus: {
                    borderColor: '#0091AE',
                    boxShadow: '0 0 0 1px #0091AE',
                    background: '#F5F8FA',
                }
            }
        },
        filled: {
            field: {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '9px 13px',
                background: '#EAECEF',
                border: '1px solid #CBD6E2',
                borderRadius: '10px',
                _focus: {
                    borderColor: '#0091AE',
                    boxShadow: '0 0 0 1px #0091AE',
                    background: '#F5F8FA',
                },
                _hover: {
                    background: '#F5F8FA',
                }
            }
        },
        flushed: {
            field: {
                borderBottom: '1px solid #33475B',
                borderRadius: '0',
                paddingX: '0',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                _focus: {
                    borderColor: '#0091AE',
                    boxShadow: '0 0 0 0px',
                }
            }
        }
    },
    sizes: {
        sm: {
            field: {
                height: '38px',
                fontSize: 'sm',
            },
            icon: {
                fontSize: 'md',
            }
        },
        md: {
            field: {
                height: '43px',
                fontSize: 'md',
            },
            icon: {
                fontSize: 'xl',
            }
        },
        lg: {
            field: {
                height: '52px',
                fontSize: 'lg',
                paddingX: '16px',
            },
            icon: {
                fontSize: '2xl',
            }
        }
    },
    defaultProps: {
        variant: 'outline',
        size: 'md',
    }
};