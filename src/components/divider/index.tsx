import { Box, Flex } from "@chakra-ui/react";

export function Divider() {
    return (
        <Flex
        mx="auto"
        >
            <Box
            w="90px"
            h="1px"
            bg="gray.700"
            ml={[null, null, "35px"]}
            mt={["25px", null, null]}
            >
            </Box>
        </Flex>
    )
}