import { Flex, Heading } from "@chakra-ui/react";

export function HomeHeading() {
    return (
        <Flex
            width="100%"
            mt={["20px", "50px"]}
            direction="column"
        >
            <Heading
                textAlign="center"
                fontSize={["20px", "36px"]}
                fontWeight="medium"
            >
                Vamos nessa?
            </Heading>
            <Heading
                textAlign="center"
                fontSize={["20px", "36px"]}
                fontWeight="medium"
            >
                Então escolha seu continente
            </Heading>
        </Flex>
    )
}