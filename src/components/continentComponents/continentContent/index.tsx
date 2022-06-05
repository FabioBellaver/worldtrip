import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Grid, Heading, Text, Tooltip } from "@chakra-ui/react";

interface ContinentContentProps {
    continentDescription: string;
    countryQtt: string;
    languageQtt: string;
    cityQtt: string;
    tooltipDescription: string;
}

export function ContinentContent(
    { continentDescription, countryQtt, languageQtt, cityQtt, tooltipDescription }
        : ContinentContentProps) {
    return (
        <Flex
            w="100%"
            direction="column"
            maxW="1160px"
            mx="auto"
            px="1rem"
        >
            <Grid
                templateColumns={["1fr", "1fr", "1fr 1fr"]}
                gap={[5, 20]}
                my={["8", "20"]}
            >
                <Text
                    fontSize={["14", "24"]}
                    color="gray.700"
                    textAlign="justify"
                >
                    {continentDescription}
                </Text>
                <Flex
                    align="center"
                    justify="space-between"
                >
                    <Flex
                        justify="center"
                        align="center"
                        direction="column"
                    >
                        <Heading
                            fontSize={["24", "48"]}
                            fontWeight="bold"
                            color="yellow.400"
                        >
                            {countryQtt}
                        </Heading>
                        <Text
                            fontSize={["18", "24"]}
                            fontWeight="semibold"
                        >
                            países
                        </Text>
                    </Flex>
                    <Flex
                        justify="center"
                        align="center"
                        direction="column"
                    >
                        <Heading
                            fontSize={["24", "48"]}
                            fontWeight="bold"
                            color="yellow.400"
                        >
                            {languageQtt}
                        </Heading>
                        <Text
                            fontSize={["18", "24"]}
                            fontWeight="semibold"
                        >
                            línguas
                        </Text>
                    </Flex>
                    <Flex
                        justify="center"
                        align="center"
                        direction="column"
                    >
                        <Heading
                            fontSize={["24", "48"]}
                            fontWeight="bold"
                            color="yellow.400"
                        >
                            {cityQtt}
                        </Heading>
                        <Text
                            fontSize={["18", "24"]}
                            fontWeight="semibold"
                        >
                            cidades e + 100
                            <Tooltip label={tooltipDescription} fontSize='sm'>
                                <InfoOutlineIcon fontSize={["16px", "18px"]} pl={1} color="gray.500" />
                            </Tooltip>
                        </Text>
                    </Flex>

                </Flex>

            </Grid>

        </Flex>
    )
}