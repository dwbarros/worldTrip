import { Flex, Image } from "@chakra-ui/react";


export function Header() {
    return (
        <Flex
            h="100px"
            justify="center"
            align="center"
        >
            <Image
                src='/img/logo.svg'
                alt="World Trip logo"
                h='50px'
            />
        </Flex>
    )
}