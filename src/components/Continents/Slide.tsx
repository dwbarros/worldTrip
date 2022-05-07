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
            <Heading
              fontSize={["3xl", "4xl", "5xl", "5xl"]}
              marginBottom='8'
              textShadow='0.1rem 0.1rem 0.5rem black'
              >
                  {title}
            </Heading>

            <Text
              w='60%'
              fontWeight='700'
              fontSize={["xl", "xl", "xl", "2xl"]}
              textShadow='0.1rem 0.1rem 0.5rem black'
            >
                {text}
            </Text>
        </Flex>
    )
}