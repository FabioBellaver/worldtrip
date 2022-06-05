import { Flex, Grid, Icon, Image } from '@chakra-ui/react'
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
    const {asPath} = useRouter()

    const returnHomeLink = asPath !== "/"

    return (

        <Flex
            as="header"
            bg="white"
            w="100%"
            mx="auto"
            px="1"
            h={["12", "24"]}
            align="center"
            justify="center"
        >

            <Grid
                w="100vw"
                h="100vh"
                maxW="1160px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >

                { returnHomeLink && (
                    <Flex
                    mt={["4px", null, null]}
                    ml="10px"
                    >
                    <Link href="/" passHref>
                        <a>
                        <Icon color="gray.700" fontSize={["20px", "40px"]} as={RiArrowLeftSLine}/>
                        </a>
                    </Link>
                    </Flex>
                )}

                <Image
                    src="/Logo.svg"
                    alt="logo world trip"
                    justifySelf="center"
                    gridColumn={2}
                    w={["20", "48"]}
                    h={["5", "12"]}
                />

            </Grid>

        </Flex>
    )
}