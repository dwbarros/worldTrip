import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CitiesGrid } from "../components/CitiesGrid";


export default function southamerica() {
    return (
        <Container maxW='full' p='0'>
            <Flex
                w='full'
                h={['163px', '250px', '250px', '500px']}
                bgImage='/img/continents/south_america.jpg'
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
                        América do Sul
                    </Heading>
                </Container>
            </Flex>

            <Container maxW='1440px' paddingX='20' paddingBottom='20'>
                <Flex paddingY='12' justify='space-between' align='center'>
                    <Text w="50%" fontSize='xl' textAlign='justify'>
                        A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico. O Brasil representa atualmente a metade da população e produto econômico desta região.
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

                    <CitiesGrid continent='southAmerica'/>
                </Flex>
            </Container>
        </Container>
    )
}