import { Box, Flex, Heading, Text, Image, Icon } from "@chakra-ui/react";

interface CityProps {
    countryImg: string;
    countryName: string; 
    cityName: string;
    flag: string;
}

export function City({ countryImg, countryName, cityName, flag}: CityProps) {
    return (
        <Box
            borderRadius="4px"
            w="257px"
            h="279px"
            
        >
            <Image
                borderTopRadius="4"
                src={countryImg}
                h="170px"
                w="100%"
            />
            <Flex
                borderBottomRadius="4px"
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
            >
                <Flex
                direction="column"
                >
                    <Heading
                        fontSize="xl"
                        fontWeight="500"
                    >
                        {cityName}
                    </Heading>
                    <Text
                        mt="3"
                        fontSize="md"
                        color="gray.500"
                        fontWeight="500"
                    >
                        {countryName}
                    </Text>
                </Flex>
                <Box
                w="30px"
                h="30px"
                >
                    <Image src={`/flags/${flag}.svg`} borderRadius="50%"/>
                </Box>
            </Flex>
        </Box>
    )
}