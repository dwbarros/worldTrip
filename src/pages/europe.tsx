import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { CitiesGrid } from "../components/CitiesGrid";


export default function europe() {
    return (
        <Container maxW='full' p='0'>
            <Flex
                w='full'
                h={['163px', '250px', '250px', '500px']}
                bgImage='/img/continents/europe.jpg'
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPosition='center'
                alignItems='end'
            >
                <Container maxW='1440px' padding='0 auto' w='90%' paddingBottom={['8', '20']}>
                    <Heading
                        color='text'
                        fontWeight='600'
                        fontSize='5xl'
                        textShadow='0.1rem 0.1rem 0.5rem black'
                    >
                        Europa
                    </Heading>
                </Container>
            </Flex>

            <Container maxW='1440px' padding='0 auto' w='90%' paddingBottom='20'>
                <Flex
                    paddingY='12'
                    justify='space-between'
                    align='center'
                    direction={['column', 'column', 'row', 'row']}
                >
                    <Text w={['100%', '100%', '50%', '50%']} fontSize='xl' textAlign='justify'>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste. A Europa é limitada pelo oceano Glacial Ártico e outros corpos de água no norte, pelo oceano Atlântico a oeste, pelo mar Mediterrâneo ao sul, e pelo mar Negro e por vias navegáveis interligadas ao sudeste.
                    </Text>

                    <Flex w={['100%', '70%', '40%', '40%']} paddingY='10' justify='space-between'>
                        <Flex w="25%" direction='column' marginRight='8'>
                            <Text color='yellow.900' fontWeight='600' fontSize={['4xl', '3xl', '4xl', '5xl']}>50</Text>
                            <Text whiteSpace='nowrap' fontWeight='600' fontSize={['xl', 'lg', 'xl', '2xl']}>países</Text>
                        </Flex>

                        <Flex w="25%" direction='column' marginRight='8'>
                            <Text color='yellow.900' fontWeight='600' fontSize={['4xl', '3xl', '4xl', '5xl']}>60</Text>
                            <Text whiteSpace='nowrap' fontWeight='600' fontSize={['xl', 'lg', 'xl', '2xl']}>línguas</Text>
                        </Flex>

                        <Flex w="25%" direction='column' marginRight='8'>
                            <Text color='yellow.900' fontWeight='600' fontSize={['4xl', '3xl', '4xl', '5xl']}>27</Text>
                            <Text whiteSpace='nowrap' fontWeight='600' fontSize={['xl', 'lg', 'xl', '2xl']}>cidades +100</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex direction='column'>
                    <Heading fontWeight='500' fontSize='4xl' marginBottom='10'>
                        Cidades +100
                    </Heading>

                    <CitiesGrid continent='europe'/>
                </Flex>
            </Container>
        </Container>
    )
}