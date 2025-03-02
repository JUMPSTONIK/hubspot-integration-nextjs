export const Text = {
    baseStyle: {
        color: 'text.default',
        lineHeight: '1.5',
        margin: 0,
    },

    sizes: {
        xs: {
            fontSize: '12px',
        },
        sm: {
            fontSize: '14px',
        },
        md: {
            fontSize: '16px',
        },
        lg: {
            fontSize: '18px',
        },
        xl: {
            fontSize: '20px',
        },
        '2xl': {
            fontSize: '24px',
        },
        '3xl': {
            fontSize: '30px',
        },
        '4xl': {
            fontSize: '36px',
        },
        '5xl': {
            fontSize: '48px',
        },
        '6xl': {
            fontSize: '60px',
        },
    },

    variants: {
        normal: {},

        secondary: {
            color: 'brand.secondary',
        },

        accent: {
            color: 'brand.accent',
        },

        subtle: {
            color: 'gray.500',
        },

        strong: {
            fontWeight: 'semibold',
        },

        headline: {
            fontSize: 'xl',
            fontWeight: 'bold',
            lineHeight: '1.2',
        },

        caption: {
            fontSize: 'xs',
            color: 'gray.500',
        },
    },

    defaultProps: {
        size: 'md',
        variant: 'normal',
    },
};