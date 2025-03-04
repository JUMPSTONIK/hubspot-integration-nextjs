export const Table = {
    baseStyle: {
        table: {
            fontVariantNumeric: 'lining-nums tabular-nums',
            borderCollapse: 'collapse',
            width: '100%',
        },
        th: {
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 600,
            textTransform: 'none',
            letterSpacing: 'normal',
            textAlign: 'start',
            paddingInline: '4',
            paddingY: '3',
            fontSize: 'sm',
            color: '#33475B',
            borderBottom: '1px solid',
            borderColor: '#E2E8F0',
            background: '#F7FAFC',
        },
        td: {
            fontFamily: 'Lexend, sans-serif',
            textAlign: 'start',
            paddingInline: '4',
            paddingY: '3',
            fontSize: 'sm',
            borderBottom: '1px solid',
            borderColor: '#E2E8F0',
            color: '#33475B',
        },
        caption: {
            marginTop: '4',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'sm',
            color: '#718096',
        },
},
    variants: {
        simple: {
            th: {
                color: '#33475B',
                backgroundColor: '#F7FAFC',
                borderBottom: '1px solid',
                borderColor: '#E2E8F0',
            },
            td: {
                borderBottom: '1px solid',
                borderColor: '#E2E8F0',
            },
            tbody: {
                tr: {
                    '&:nth-of-type(odd)': {
                        'th, td': {
                            borderBottomWidth: '1px',
                            borderColor: '#E2E8F0',
                        },
                        td: {
                            background: '#FFFFFF',
                        },
                    },
                    '&:nth-of-type(even)': {
                        'th, td': {
                            borderBottomWidth: '1px',
                            borderColor: '#E2E8F0',
                        },
                        td: {
                            background: '#F7FAFC',
                        },
                    },
                },
            },
            tfoot: {
                tr: {
                    '&:last-of-type': {
                        th: { borderBottomWidth: 0 },
                    },
                },
            },
        },
        striped: {
            th: {
                color: '#33475B',
                backgroundColor: '#F7FAFC',
                borderBottom: '1px solid',
                borderColor: '#E2E8F0',
            },
            td: {
                borderBottom: '1px solid',
                borderColor: '#E2E8F0',
            },
            tbody: {
                tr: {
                    '&:nth-of-type(odd)': {
                        'th, td': {
                            borderBottomWidth: '1px',
                            borderColor: '#E2E8F0',
                        },
                        td: {
                            background: '#FFFFFF',
                        },
                    },
                    '&:nth-of-type(even)': {
                        'th, td': {
                            borderBottomWidth: '1px',
                            borderColor: '#E2E8F0',
                        },
                        td: {
                            background: '#F7FAFC',
                        },
                    },
                },
            },
            tfoot: {
                tr: {
                    '&:last-of-type': {
                        th: { borderBottomWidth: 0 },
                    },
                },
            },
        },
    },
    sizes: {
        sm: {
            th: {
                px: '3',
                py: '1',
                fontSize: 'xs',
                lineHeight: '4',
            },
            td: {
                px: '3',
                py: '1',
                fontSize: 'xs',
                lineHeight: '4',
            },
            caption: {
                px: '3',
                py: '1',
                fontSize: 'xs',
            },
        },
        md: {
            th: {
                px: '4',
                py: '2',
                fontSize: 'sm',
                lineHeight: '5',
            },
            td: {
                px: '4',
                py: '2',
                fontSize: 'sm',
                lineHeight: '5',
            },
            caption: {
                px: '4',
                py: '2',
                fontSize: 'sm',
            },
        },
        lg: {
            th: {
                px: '6',
                py: '3',
                fontSize: 'md',
                lineHeight: '6',
            },
            td: {
                px: '6',
                py: '3',
                fontSize: 'md',
                lineHeight: '6',
            },
            caption: {
                px: '6',
                py: '3',
                fontSize: 'md',
            },
        },
    },
    defaultProps: {
        variant: 'simple',
        size: 'md',
        colorScheme: 'gray',
    },
};