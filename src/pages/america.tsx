import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CitiesGrid } from "../components/CitiesGrid";


export default function america() {
    return (
        <Container maxW='full' p='0'>
            <Flex
                w='full'
                h={['163px', '250px', '250px', '500px']}
                bgImage='/img/continents/america.jpg'
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
                        América do Norte
                    </Heading>
                </Container>
            </Flex>

            <Container maxW='1440px' paddingX='20' paddingBottom='20'>
                <Flex paddingY='12' justify='space-between' align='center'>
                    <Text w="50%" fontSize='xl' textAlign='justify'>
                        A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe). 
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

                    <CitiesGrid continent='america'/>
                </Flex>
            </Container>
        </Container>
    )
}