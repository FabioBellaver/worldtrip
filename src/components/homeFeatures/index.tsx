import { Flex, Image, useBreakpointValue, Box, List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Features } from "./features";

export function HomeFeatures() {

    const isSmall = useBreakpointValue({
        base: true,
        sm: false
    })

    if (isSmall) {
        return (
            <>
            <SimpleGrid columns={2} spacing={5} mt="20px" mb="20px" mx="auto" >
                <Features icon="./icons/cocktail.svg" altImg="drink" description="vida noturna" />
                <Features icon="./icons/surf.svg" altImg="surf" description="praia" />
                <Features icon="./icons/building.svg" altImg="predio" description="moderno" />
                <Features icon="./icons/museum.svg" altImg="museu" description="clássico" />
            </SimpleGrid>
            <Flex
            mx="auto"
            >
                <Features icon="./icons/earth.svg" altImg="planeta terra" description="e mais..." />
            </Flex>
            </>
        )
    } else {
        return (
            <Flex
                w="100%"
                h="340px"
                align="center"
                justify="space-around"
                px="20"

            >
                <Features icon="./icons/cocktail.svg" altImg="drink" description="vida noturna" />
                <Features icon="./icons/surf.svg" altImg="surf" description="praia" />
                <Features icon="./icons/building.svg" altImg="predio" description="moderno" />
                <Features icon="./icons/museum.svg" altImg="museu" description="clássico" />
                <Features icon="./icons/earth.svg" altImg="planeta terra" description="e mais..." />
            </Flex>
        )
    }
}