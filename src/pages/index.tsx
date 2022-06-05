import { Flex } from "@chakra-ui/react";
import { Divider } from "../components/divider";
import { HomeBanner } from "../components/homeBanner";
import { HomeFeatures } from "../components/homeFeatures";
import { HomeHeading } from "../components/homeHeading";
import { Slider } from "../components/slider";

export default function Home() {
  return (
    <Flex direction="column">
      <HomeBanner/>
      <HomeFeatures/>
      <Divider/>
      <HomeHeading/>
      <Slider/>
    </Flex>
  )
}
