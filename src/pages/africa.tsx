import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CitiesGrid } from "../components/CitiesGrid";


export default function africa() {
    return (
        <Container maxW='full' p='0'>
            <Flex
                w='full'
                h={['163px', '250px', '250px', '500px']}
                bgImage='/img/continents/africa.jpg'
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
                        África
                    </Heading>
                </Container>
            </Flex>

            <Container maxW='1440px' paddingX='20' paddingBottom='20'>
                <Flex paddingY='12' justify='space-between' align='center'>
                    <Text w="50%" fontSize='xl' textAlign='justify'>
                        A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.
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

                    <CitiesGrid continent='africa'/>
                </Flex>
            </Container>
        </Container>
    )
}