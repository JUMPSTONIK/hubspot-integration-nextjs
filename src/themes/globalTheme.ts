import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { FormLabel } from "./components/Label";
import { Link } from "./components/Link";
import { NumberInput } from "./components/NumberInput";
import { Text } from "./components/Text";
import { Textarea } from "./components/TextArea";

export const globalTheme = {
    styles: {
        global: {
            body: {
                color: '#33475B',
                bg: 'white',
            },
            'h1, h2, h3, h4, h5, h6, p, span, div': {
                color: '#33475B',
            },
        },
    },
    components: {
        Button,
        Link,
        Text,
        Heading,
        Input,
        NumberInput,
        Textarea,
        FormLabel
    },
    colors: {
        brand: {
            primary: '#33475B',
            secondary: '#0091AE',
            accent: '#FF7A53',
        },
        text: {
            default: '#33475B',
        },
    },
    fonts: {
        heading: 'var(--font-lexend)',
        body: 'var(--font-lexend)',
    },
}