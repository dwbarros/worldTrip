import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';


export function Banner() {
    return (
        <Container
            maxW='full' 
            h={['163px', '250px', '250px', '335px']}
            centerContent
            bgImage='/img/background.png'
            bgRepeat='no-repeat'
            bgSize='cover'
            justifyContent='center'
            alignItems='center'
        >
            <Flex w='full' maxW='1440px' justify='center' align='center'
            >
                <Stack w='45%' marginRight={8} direction='column' color='white'>
                    <Heading fontWeight='500' fontSize='4xl' marginBottom={4}>
                        5 Continentes, infinitas possibilidades.
                    </Heading>

                    <Text w="80%" fontSize='lg'>
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Stack>

                <Image
                    w={['320px','320px','320px', '420px']}
                    transform={['translate(0, 50px)', 'translate(0, 50px)', 'translate(0, 40px)', 'translate(0, 50px)']}
                    src='/img/airplane.svg'
                    alt='Desenho de avião com nuvens ao fundo'
                />
            </Flex>
        </Container>
    )
}