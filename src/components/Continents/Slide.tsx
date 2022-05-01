import { Flex, Heading, Text } from "@chakra-ui/react";


interface SlideProps {
    title: string;
    text: string;
    bgImage: string;
}


export function Slide( { title, text, bgImage }: SlideProps) {
    return (
        <Flex
            w='100%'
            h='100%'
            color='text'
            bgImage={bgImage}
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPosition='center'
            justify='center'
            align='center'
            direction='column'
        >
            <Heading fontSize='5xl' marginBottom='8'>{title}</Heading>
            <Text w='60%' fontWeight='700' fontSize='2xl'>{text}</Text>
        </Flex>
    )
}