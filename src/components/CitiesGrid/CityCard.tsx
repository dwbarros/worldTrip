import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";


interface CityCardProps {
    imgCover: string;
    city: string;
    country: string;
    imgFlag: string;
}


export function CityCard({ imgCover, city, country, imgFlag }: CityCardProps) {
    return (
        <GridItem
            w='100%'
            h='280px'
            maxWidth='300px'
            border='solid 1px'
            borderColor='yellow.500'
            borderRadius='4px'
            bgColor='white'
        >
            <Box
                w='100%'
                h='60%'
                bgImage={imgCover}
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPosition='center'
                borderRadius='4px 4px 0 0'
            />

            <Flex justify='space-around'>
                <Box p='4'>
                    <Heading
                        size='md'
                        fontFamily='Barlow'
                        fontWeight='600'
                        marginBottom='2'
                    >
                        {city}
                    </Heading>

                    <Text
                        fontFamily='Barlow'
                        fontWeight='500'
                        color='gray.400'
                    >
                        {country}
                    </Text>
                </Box>

                <Box
                    w='30px'
                    h='30px'
                    margin='4'
                    alignSelf='center'
                    borderRadius='full'
                    bgImage={imgFlag}
                    bgRepeat='no-repeat'
                    bgSize='cover'
                    bgPosition='center'
                />
            </Flex>
        </GridItem>
    )
}