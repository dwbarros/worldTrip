import { Box, Container, Divider, Flex } from '@chakra-ui/react';
import { TravelTypesItem } from '../TravelTypes/TravelTypesItem';


export function TravelTypes() {

    const travelTypesList = [
        { icon: 'cocktail', text: 'vida Noturna' },
        { icon: 'surf', text: 'praia' },
        { icon: 'building', text: 'moderno' },
        { icon: 'museum', text: 'clássico' },
        { icon: 'earth', text: 'e mais...' },
    ];


    return (
        <Container
            maxW='1440px'
            h={['163px', '250px', '250px', '370px']}
            centerContent
            justifyContent='center'
        >
            <Flex
                w='90%'
                justify='space-around'
                align='center'
                direction={["column", "row"]}
                marginRight={8} >
                    {travelTypesList.map( travelType => 
                            <TravelTypesItem 
                                icon={travelType.icon} 
                                text={travelType.text} 
                            />
                    )}
            </Flex>

            <Box w='90px' mt='20'>
                <Divider border='2px' borderColor='gray.700' />
            </Box>    
        </Container>
    )
}