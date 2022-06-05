import { Flex, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { ContinentBanner } from "../../components/continentComponents/continentBanner";
import { City } from "../../components/continentComponents/continentCity/city";
import { ContinentContent } from "../../components/continentComponents/continentContent";

export default function Europa() {
    return (
        <>
        <Head>
        <title>Worldtrip | Europa</title>
        </Head>

        <Flex direction="column" overflow="hidden">
            <ContinentBanner
                banner="/europePage.jpg"
                continentName="Europa"
            />
            <ContinentContent
                continentDescription="
           A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
           "
                countryQtt="50"
                languageQtt="60"
                cityQtt="27"
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
                countryImg="/europeanCountries/londres.jpg"
                cityName="Londres"
                countryName="Inglaterra"
                flag="gb"
                />
                <City 
                countryImg="/europeanCountries/paris.jpg"
                cityName="Paris"
                countryName="França"
                flag="fr"
                 />
                <City 
                countryImg="/europeanCountries/roma.jpg"
                cityName="Roma"
                countryName="Itália"
                flag="it"
                 />
                <City 
                countryImg="/europeanCountries/praga.jpg" 
                cityName="Praga"
                countryName="Republica Tcheca"
                flag="cz"
                />
                <City 
                countryImg="/europeanCountries/amsterda.jpg" 
                cityName="Amsterdã"
                countryName="Holanda"
                flag="nl"
                />
            </Grid>
        </Flex>
        </>
    )
}