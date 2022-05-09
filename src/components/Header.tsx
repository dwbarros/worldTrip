import { Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";


export function Header() {

    const router = useRouter();

    return (
        <>
            {!(router.asPath === '/') &&
                <Button
                    position='absolute'
                    top='30px'
                    left={['5px', '50px', '100px', '140px']}
                    onClick={() => history.go(-1)}
                >
                    <Image
                        src='/img/home/back.svg'
                        alt='Botão voltar'
                    />
                </Button>
            }

            <Flex
                h='100px'
                align='center'
                justify='center'
            >
                <Link href='/'>
                    <a>
                        <Image
                            src='/img/logo.svg'
                            alt='World Trip logo'
                            h='50px'
                        />
                    </a>
                </Link>
            </Flex>
        </>
    )
}