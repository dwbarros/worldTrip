import { Container, Flex, Text } from '@chakra-ui/react';
import ContinentSlide from './ContinentSlide';


export function Continents() {

  
    return (
        <Container
            maxW='1440px'
            paddingBottom='20'
            centerContent
            justifyContent='center'
        >
            <Flex
                direction='column'
                align='center'
                fontSize='4xl'
                fontWeight='500'
                marginBottom='8'
            >
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </Flex>

            <ContinentSlide />
        </Container>
    )
}