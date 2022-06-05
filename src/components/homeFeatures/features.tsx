import { Flex, Heading, Image, } from "@chakra-ui/react";

interface FeatureProps {
    icon: string;
    altImg: string;
    description: string;
}

export function Features({ icon, description, altImg }: FeatureProps) {
    return (
        <Flex
            direction={["row", "column"]}
            justify="center"
            align="center"
            overflow="hidden"
        >
            <Image
                width={["25px","50px", "84px"]}
                src={icon}
                alt={altImg}
                pb={["1", "6"]}
                mr={["5", null, null, null]}
            />
            <Heading
                fontWeight="medium"
                fontSize={["15px","20px", "24px"]}
                color="gray.700"
            >
                {description}
            </Heading>
        </Flex>
    )
}