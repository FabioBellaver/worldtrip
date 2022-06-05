import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export function HomeBanner() {
    return (
        <Flex
            w="100%"
            h={["163", "335"]}
            bgImage="url('/Background.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Flex
                w="100vw"
                mx="auto"
                px={["11", "36"]}
                justify={["center", "space-between"]}
                align="center"
            >
                <Box>
                    <Heading
                        fontWeight="medium"
                        fontSize={["20", "36px"]}
                        color="gray.100"
                    >
                        5 Continentes, <br />
                        infinitas possibilidades.
                    </Heading>
                    <Text
                        fontWeight="normal"
                        fontSize={["14px", "20px"]}
                        color="gray.300"
                        mt={["2", "10"]}
                        maxW={["100%", "540"]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>

                <Image
                    w={["300px", "300px", "300px", "430px"]}
                    src="/Airplane.svg"
                    ml="8"
                    display={["none", "none", "none", "block"]}
                    transform="translateY(50px)"
                />

            </Flex>

        </Flex>
    )
}