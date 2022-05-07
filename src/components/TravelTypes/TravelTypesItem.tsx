import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";


interface TravelTypesItemProps {
    icon: string;
    text: string;
}


export function TravelTypesItem({ icon, text }: TravelTypesItemProps) {

    const isMobile = useBreakpointValue({
        base: false,
        md: true,
    })

    return (
        <Flex
            m='4'
            direction={["row", "row", "column", "column"]}
            align="center"
            justify="center"
        >
            {isMobile
                ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" marginBottom='3'/>
                : <Box bgColor="yellow.400" w="10px" h="10px" mr='2' borderRadius='full'/>
            }
            <Text fontWeight="600" fontSize={["md", "xl", "xl", "2xl"]}>{text}</Text>
        </Flex>
    )
}