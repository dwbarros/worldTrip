import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CitiesGrid } from "../components/CitiesGrid";


export default function oceania() {
    return (
        <Container maxW='full' p='0'>
            <Flex
                w='full'
                h={['163px', '250px', '250px', '500px']}
                bgImage='/img/continents/oceania.jpg'
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPosition='center'
                alignItems='end'
            >
                <Container maxW='1440px' paddingX='20' paddingBottom='20'>
                    <Heading
                        color='text'
                        fontWeight='600'
                        fontSize='5xl'
                        textShadow='0.1rem 0.1rem 0.5rem black'
                    >
                        Oceania
                    </Heading>
                </Container>
            </Flex>

            <Container maxW='1440px' paddingX='20' paddingBottom='20'>
                <Flex paddingY='12' justify='space-between' align='center'>
                    <Text w="50%" fontSize='xl' textAlign='justify'>
                        Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes. Os limites da Oceania são definidos de várias maneiras. A maioria das definições reconhecem partes da Australásia como a Austrália, Nova Zelândia e Nova Guiné, e parte do Arquipélago Malaio como sendo partes da Oceania.
                    </Text>

                    <Stack w='40%' direction='row' justify='space-between'>
                        <Flex direction='column' align='center'>
                            <Text color='yellow.900' fontWeight='600' fontSize='5xl'>50</Text>
                            <Text fontWeight='600' fontSize='2xl'>países</Text>
                        </Flex>

                        <Flex direction='column' align='center'>
                            <Text color='yellow.900' fontWeight='600' fontSize='5xl'>60</Text>
                            <Text fontWeight='600' fontSize='2xl'>línguas</Text>
                        </Flex>

                        <Flex direction='column' align='center'>
                            <Text color='yellow.900' fontWeight='600' fontSize='5xl'>27</Text>
                            <Text fontWeight='600' fontSize='2xl'>cidades +100</Text>
                        </Flex>
                    </Stack>
                </Flex>

                <Flex direction='column'>
                    <Heading fontWeight='500' fontSize='4xl' marginBottom='10'>
                        Cidades +100
                    </Heading>

                    <CitiesGrid continent='oceania'/>
                </Flex>
            </Container>
        </Container>
    )
}