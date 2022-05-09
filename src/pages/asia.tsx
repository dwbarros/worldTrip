import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { CitiesGrid } from "../components/CitiesGrid";


export default function asia() {
    return (
        <Container maxW='full' p='0'>
            <Flex
                w='full'
                h={['163px', '250px', '250px', '500px']}
                bgImage='/img/continents/asia.jpg'
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPosition='center'
                alignItems='end'
            >
                <Container maxW='1440px' padding='0 auto' w='90%' paddingBottom={['8', '8', '12', '20']}>
                    <Heading
                        color='text'
                        fontWeight='600'
                        fontSize={['3xl', '4xl', '5xl', '5xl']}
                        textShadow='0.1rem 0.1rem 0.5rem black'
                    >
                        Ásia
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
                    <Text w={['100%', '100%', '50%', '50%']} fontSize={['md', 'lg', 'xl', 'xl']} textAlign='justify'>
                        A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador. Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas.
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

                    <CitiesGrid continent='asia'/>
                </Flex>
            </Container>
        </Container>
    )
}