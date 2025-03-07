export const Accordion = {
    baseStyle: {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            width: "100%",
            border: "1px solid",
            borderColor: "#E2E8F0",
            borderRadius: "8px",
            boxShadow: "sm",
            overflow: "hidden",
            "& > h2": {
                width: "100%",
            }
        },
        item: {
            borderTop: "1px solid",
            borderColor: "#E2E8F0",
            width: "100%",
            "&:first-of-type": {
                borderTop: "none",
            },
        },
        heading: {
            width: '100%'
        },
        button: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "49px",
            padding: "12px 16px",
            fontSize: "md",
            fontWeight: "medium",
            color: "#33475B",
            textAlign: "left",
            transition: "all 0.2s",
            outline: "none",
            _focus: {
                boxShadow: "none",
                backgroundColor: "#F5F8FA",
            },
            _hover: {
                backgroundColor: "#F5F8FA",
            },
            _expanded: {
                width: '100%',
                backgroundColor: "#F5F8FA",
                fontWeight: "bold",
                color: "#0091AE",
            },
        },
        panel: {
            padding: "16px",
            fontSize: "sm",
            color: "#33475B",
            width: "100%",
            backgroundColor: "white",
        },
        icon: {
            fontSize: "1.25em",
            opacity: 0.8,
            _expanded: {
                transform: "rotate(180deg)",
                color: "#0091AE",
            },
        },
    },
    sizes: {
        sm: {
            button: {
                height: "40px",
                fontSize: "sm",
                padding: "8px 12px",
            },
            panel: {
                padding: "12px",
                fontSize: "xs",
            },
            icon: {
                fontSize: "1em",
            }
        },
        md: {
            button: {
                height: "49px",
                fontSize: "md",
                padding: "12px 16px",
            },
            panel: {
                padding: "16px",
                fontSize: "sm",
            },
            icon: {
                fontSize: "1.25em",
            }
        },
        lg: {
            button: {
                height: "60px",
                fontSize: "lg",
                padding: "16px 20px",
            },
            panel: {
                padding: "20px",
                fontSize: "md",
            },
            icon: {
                fontSize: "1.5em",
            }
        },
    },
    variants: {
        standard: {
            container: {
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: "#E2E8F0",
            },
            item: {
                borderTop: "1px solid",
                borderColor: "#E2E8F0",
                "&:first-of-type": {
                    borderTop: "none",
                },
            },
            button: {
                backgroundColor: "white",
                _expanded: {
                    backgroundColor: "#F5F8FA",
                    color: "#0091AE",
                },
            },
        },
        filled: {
            container: {
                backgroundColor: "#F7FAFC",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: "#E2E8F0",
            },
            item: {
                borderTop: "1px solid",
                borderColor: "#E2E8F0",
                "&:first-of-type": {
                    borderTop: "none",
                },
            },
            button: {
                backgroundColor: "#F7FAFC",
                _expanded: {
                    backgroundColor: "#EDF2F7",
                    color: "#0091AE",
                },
            },
            panel: {
                backgroundColor: "#FFFFFF",
            }
        },
        flush: {
            container: {
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "0",
                boxShadow: "none",
            },
            item: {
                borderBottom: "1px solid",
                borderColor: "#E2E8F0",
                borderTop: "none",
            },
            button: {
                paddingLeft: "0",
                paddingRight: "0",
                _expanded: {
                    color: "#0091AE",
                },
            },
            panel: {
                paddingLeft: "0",
                paddingRight: "0",
            }
        },
    },
    defaultProps: {
        size: "md",
        variant: "standard",
    },
};