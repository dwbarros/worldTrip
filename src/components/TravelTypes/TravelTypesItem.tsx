import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";


interface TravelTypesItemProps {
    icon: string;
    text: string;
}


export function TravelTypesItem({ icon, text }: TravelTypesItemProps) {

    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })

    return (
        <Flex direction={["row", "column"]} align="center" justify="center" m='3'>
            {isMobile
                ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" />
                : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>
            }
            <Text fontWeight="600" fontSize={["md", "xl", "2xl"]}>{text}</Text>
        </Flex>
    )
}