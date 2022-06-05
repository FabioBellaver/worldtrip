import { Flex, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { ContinentBanner } from "../../components/continentComponents/continentBanner";
import { City } from "../../components/continentComponents/continentCity/city";
import { ContinentContent } from "../../components/continentComponents/continentContent";

export default function Europa() {
    return (
        <>
        <Head>
        <title>Worldtrip | América do Norte</title>
        </Head>

        <Flex direction="column" overflow="hidden" mb="20px">
            <ContinentBanner
                banner="/northamericaPage.jpg"
                continentName="América do Norte"
            />
            <ContinentContent
                continentDescription="
                A América do Norte é a América com menor número de países, apenas três países no total, o que não significa que ela seja a menor em tamanho (a menor é a América Central), na realidade é bem o oposto pois, ela é a maior das três Américas. Os países que a compõem são os Estados Unidos da América, o Canadá e o México.
           "
                countryQtt="3"
                languageQtt="256"
                cityQtt="58"
                tooltipDescription="lugares inesquecíveis!"
            />
            <Heading
                w="100%"
                maxW="1160px"
                mx="auto"
                mb="10"
                px="1rem"
                fontWeight="500"
                fontSize={["2xl", "4xl"]}
            >
                Cidades +100
            </Heading>
            <Grid
                w="100%"
                maxW="1160px"
                mx="auto"
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={["20px", "45px"]}
                alignItems="center"
                justifyContent="center"
                px={["60px","80px", null]}
            >
                <City 
                countryImg="/northAmericanCountries/dallas.jpg"
                cityName="Dallas"
                countryName="Estados Unidos"
                flag="um"
                />
                <City 
                countryImg="/northAmericanCountries/merida.jpg"
                cityName="Merida"
                countryName="Mexico"
                flag="mx"
                 />
                <City 
                countryImg="/northAmericanCountries/miami.jpg"
                cityName="Miami"
                countryName="Estados Unidos"
                flag="um"
                 />
                <City 
                countryImg="/northAmericanCountries/quebec.jpg" 
                cityName="Quebec"
                countryName="Canada"
                flag="ca"
                />
                <City 
                countryImg="/northAmericanCountries/vancouver.jpg" 
                cityName="Vancouver"
                countryName="Canadá"
                flag="ca"
                />
            </Grid>
        </Flex>
        </>
    )
}