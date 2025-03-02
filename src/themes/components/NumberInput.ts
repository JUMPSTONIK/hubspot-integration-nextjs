export const NumberInput = {
    variants: {
        outline: {
            field: {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '9px 13px',
                gap: '10px',
                width: '100%',
                height: '43px',
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
            stepper: {
                border: 'none',
                bg: 'transparent',
                _active: {
                    bg: 'transparent'
                }
            }
        }
    },
    defaultProps: {
        variant: 'outline',
        size: 'md',
    }
};