import { Box, Container, Divider, Flex } from '@chakra-ui/react';
import { TravelTypesItem } from '../TravelTypes/TravelTypesItem';


export function TravelTypes() {

    const travelTypesList = [
        { icon: 'cocktail', text: 'vida noturna' },
        { icon: 'surf', text: 'praia' },
        { icon: 'building', text: 'moderno' },
        { icon: 'museum', text: 'clássico' },
        { icon: 'earth', text: 'e mais...' },
    ];


    return (
        <Container
            maxW='1440px'
            centerContent
        >
            <Flex
                w='90%'
                justify={['center', 'center', 'space-between', 'space-between']}
                align='center'
                flexWrap='wrap'
                paddingY='10'
            >
                {travelTypesList.map( travelType => 
                    <TravelTypesItem 
                        icon={travelType.icon} 
                        text={travelType.text} 
                    />
                )}
            </Flex>

            <Box w='90px' marginBottom='8'>
                <Divider border='2px' borderColor='gray.700' />
            </Box>    
        </Container>
    )
}