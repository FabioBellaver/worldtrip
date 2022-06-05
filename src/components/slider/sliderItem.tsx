import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SliderItemProps {
    heading: string;
    text: string;
    image: string;
    page: string;
}

export function SliderItem({heading, text, image, page}:SliderItemProps) {
    return (
        

        <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage={`url(/${image})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
        >
            <Link href={page}>
            <a>
                <Heading
                fontSize={["3xl", "4xl", "5xl"]}
                color="gray.100"
                >
                    {heading}
                </Heading>
                <Text
                color="gray.300"
                fontWeight="bold"
                fontSize={["1rem", "1xl", "2xl"]}
                mt={["2", "4"]}
                >
                    {text}
                </Text>
            </a>
            </Link>
        </Flex>
    )
}