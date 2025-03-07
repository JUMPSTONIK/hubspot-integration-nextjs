export const Tabs = {
    baseStyle: {
        tablist: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "1px solid",
            borderColor: "#CBD6E2",
            mb: "0",
        },
        tab: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 19px",
            gap: "10px",
            width: "188px",
            height: "49.64px",
            transition: "all 0.2s",
            fontWeight: "medium",

            color: "#33475B",
            bg: "#EAF0F6",
            _selected: {
                color: "#33475B",
                bg: "white",
            },
            _hover: {
                bg: "#F5F8FA",
            },
            _active: {
                bg: "#F5F8FA",
            },
            _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
            },
        },
        tabpanel: {
            p: "16px",
            border: "none",
        },
    },
    sizes: {
        sm: {
            tab: {
                padding: "10px 14px",
                height: "40px",
                fontSize: "sm",
            },
            tabpanel: {
                p: "12px",
            },
        },
        md: {
            tab: {
                padding: "15px 19px",
                height: "49.64px",
                fontSize: "md",
            },
            tabpanel: {
                p: "16px",
            },
        },
        lg: {
            tab: {
                padding: "18px 24px",
                height: "60px",
                fontSize: "lg",
            },
            tabpanel: {
                p: "20px",
            },
        },
    },
    variants: {
        enclosed: {
            tablist: {
                borderBottom: "1px solid",
                borderColor: "#CBD6E2",
            },
            tab: {
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#CBD6E2",
                bg: "#EAF0F6",
                borderRadius: "0px",
                mb: "0",
                color: "#33475B",
                _selected: {
                    color: "#33475B",
                    bg: "white",
                },
            },
            tabpanel: {
                border: "none",
            },
        },
        "soft-rounded": {
            tab: {
                borderRadius: "8px",
                fontWeight: "medium",
                border: "none",
                color: "#33475B",
                bg: "#EAF0F6",
                _selected: {
                    color: "white",
                    bg: "#0091AE",
                    border: "none",
                },
            },
            tabpanel: {
                border: "none",
                p: "16px 0",
            },
        },
        "solid-rounded": {
            tablist: {
                borderBottom: "none",
            },
            tab: {
                borderRadius: "999px",
                fontWeight: "medium",
                border: "none",
                color: "#33475B",
                bg: "#EAF0F6",
                _selected: {
                    color: "white",
                    bg: "#0091AE",
                    border: "none",
                },
            },
            tabpanel: {
                border: "none",
                p: "16px 0",
            },
        },
        "line": {
            tablist: {
                borderBottom: "1px solid",
                borderColor: "#CBD6E2",
            },
            tab: {
                border: "none",
                borderBottom: "2px solid",
                borderColor: "transparent",
                borderRadius: "0px",
                bg: "transparent",
                mb: "-1px",
                color: "#33475B",
                _selected: {
                    color: "#0091AE",
                    bg: "transparent",
                    borderColor: "currentColor",
                },
            },
            tabpanel: {
                border: "none",
            },
        },
    },
    defaultProps: {
        size: "md",
        variant: "enclosed",
    },
};