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
                fontSize={["xl", "2xl", "3xl", "4xl"]}
                fontWeight='500'
                marginBottom='8'
                textAlign='center'
            >
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </Flex>

            <ContinentSlide />
        </Container>
    )
}