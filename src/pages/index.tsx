import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Divider } from "../components/divider";
import { HomeBanner } from "../components/homeBanner";
import { HomeFeatures } from "../components/homeFeatures";
import { HomeHeading } from "../components/homeHeading";
import { Slider } from "../components/slider";

export default function Home() {
  return (
    <>
    <Head>
      <title>Worldtrip | Home</title>
    </Head>
    <Flex direction="column">
      <HomeBanner/>
      <HomeFeatures/>
      <Divider/>
      <HomeHeading/>
      <Slider/>
    </Flex>
    </>
  )
}
