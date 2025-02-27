export const Heading = {
    baseStyle: {
        fontFamily: 'var(--font-lexend)',
        color: 'text.default',
        fontWeight: 600,
        lineHeight: 1.2,
        margin: 0,
    },

    sizes: {
        '4xl': {
            fontSize: ['36px', null, '48px'],
            lineHeight: 1.1,
            fontWeight: 700,
        },
        '3xl': {
            fontSize: ['30px', null, '36px'],
            lineHeight: 1.2,
            fontWeight: 700,
        },
        '2xl': {
            fontSize: ['24px', null, '30px'],
            lineHeight: 1.2,
            fontWeight: 600,
        },
        xl: {
            fontSize: ['20px', null, '24px'],
            lineHeight: 1.3,
            fontWeight: 600,
        },
        lg: {
            fontSize: ['18px', null, '20px'],
            lineHeight: 1.4,
            fontWeight: 500,
        },
        md: {
            fontSize: ['16px', null, '18px'],
            lineHeight: 1.4,
            fontWeight: 500,
        },
    },

    variants: {
        standard: {},

        section: {
            borderBottom: '2px solid',
            borderColor: 'gray.200',
            paddingBottom: '8px',
            marginBottom: '16px',
        },

        subtle: {
            color: 'gray.600',
            fontWeight: 500,
        },

        primary: {
            color: 'brand.primary',
        },

        secondary: {
            color: 'brand.secondary',
        },

        accent: {
            color: 'brand.accent',
        },
    },

    defaultProps: {
        size: '2xl',
        variant: 'standard',
    },
};
