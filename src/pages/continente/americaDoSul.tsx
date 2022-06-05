import { Flex, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { ContinentBanner } from "../../components/continentComponents/continentBanner";
import { City } from "../../components/continentComponents/continentCity/city";
import { ContinentContent } from "../../components/continentComponents/continentContent";

export default function Europa() {
    return (
        <>
        <Head>
        <title>Worldtrip | América do Sul</title>
        </Head>

        <Flex direction="column" overflow="hidden" mb="20px">
            <ContinentBanner
                banner="/southamericaPage.jpg"
                continentName="América do Sul"
            />
            <ContinentContent
                continentDescription="
                a América do Sul abriga a maior diversidade física e climática de todos os continentes, além de contar com uma das maiores biodiversidades: grande parte é encontrada na gigantesca Floresta Amazônica: é a maior floresta tropical do mundo e responsável por cerca de 20% do oxigênio presente no planeta.
           "
                countryQtt="12"
                languageQtt="122"
                cityQtt="32"
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
                countryImg="/southAmericanCountries/assuncao.jpg"
                cityName="Assunção"
                countryName="Paraguai"
                flag="py"
                />
                <City 
                countryImg="/southAmericanCountries/buenosaires.jpg"
                cityName="Buenos Aires"
                countryName="Argentina"
                flag="ar"
                 />
                <City 
                countryImg="/southAmericanCountries/salvador.jpg"
                cityName="Salvador"
                countryName="Brasil"
                flag="br"
                 />
                <City 
                countryImg="/southAmericanCountries/montevideu.jpg" 
                cityName="Montevidéu"
                countryName="Uruguai"
                flag="uy"
                />
                <City 
                countryImg="/southAmericanCountries/saopaulo.jpg" 
                cityName="Sao Paulo"
                countryName="Brasil"
                flag="br"
                />
            </Grid>
        </Flex>
        </>
    )
}