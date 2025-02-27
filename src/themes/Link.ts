export const Link = {

    baseStyle: {
        fontFamily: 'var(--font-lexend)',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        textDecorationLine: 'underline',
        color: '#0091AE',
        _hover: {
            textDecoration: 'underline',
            color: '#00768F',
        },
        _active: {
            color: '#005D6F',
        },
        _focus: {
            boxShadow: 'none',
            outline: 'none',
        },
    },

    variants: {
        default: {},

        noUnderline: {
            textDecorationLine: 'none',
            textDecoration: 'none',
            _hover: {
                textDecorationLine: 'underline',
                textDecoration: 'underline',
            },
        },

        secondary: {
            color: '#33475B',
            _hover: {
                color: '#2A3B4C',
            },
            _active: {
                color: '#1F2E3B',
            },
        },

        button: {
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            backgroundColor: 'transparent',
            border: '1px solid #0091AE',
            transition: 'all 0.3s ease',
            _hover: {
                backgroundColor: 'rgba(0, 145, 174, 0.05)',
                textDecoration: 'none',
            },
        },
    },

    defaultProps: {
        variant: 'default',
    },
};