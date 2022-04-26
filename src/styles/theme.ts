import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: 'Roboto',
        heading: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.900'
            }
        },
    },
})