import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';


export function Banner() {
    return (
        <Container
            maxW='full'
            h={['200px', '250px', '250px', '335px']}
            paddingLeft={['6', '8']}
            centerContent
            bgImage='/img/home/background.png'
            bgRepeat='no-repeat'
            bgSize='cover'
            justifyContent='center'
            alignItems='center'
        >
            <Flex w='full' maxW='1440px' justify='center' align='center'>
                <Stack 
                    w={['100%', '100%', '45%', '45%']}
                    marginRight={['0', '0', '8', '8']}
                    direction='column'
                    color='white'
                >
                    <Heading 
                        fontWeight='500'
                        fontSize={['xl', '2xl', '2xl', '4xl']}
                        marginBottom={['2', '4']}

                    >
                        5 Continentes, infinitas possibilidades.
                    </Heading>

                    <Text
                        w="80%"
                        fontSize={['sm', 'lg', 'lg', 'xl']}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Stack>

                <Image
                    w={['0', '0', '42%', '40%']}
                    transform={['translate(0, 50px)', 'translate(0, 50px)', 'translate(0, 40px)', 'translate(0, 50px)']}
                    src='/img/home/airplane.svg'
                    alt='Desenho de avião com nuvens ao fundo'
                />
            </Flex>
        </Container>
    )
}