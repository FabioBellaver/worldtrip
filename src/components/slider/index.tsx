import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { SliderItem } from "./sliderItem";

export function Slider() {
    return (
        <Flex
            w="100vw"
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
            h={["250px", "450px"]}
            mt={["5", "10"]}
        >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000
                }}
                style={{ width: '100%', flex: "1" }}
            >
                <SwiperSlide>
                    <SliderItem
                        heading="Europa"
                        image="europe.jpg"
                        text="O continente mais antigo."
                        page="/continente/europa"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading="America do Norte"
                        image="northamerica.jpg"
                        text="O continente das oportunidades."
                        page="/continente/americaDoNorte"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading="America do Sul"
                        image="southamerica.jpg"
                        text="O continente mais diverso."
                        page="/continente/americaDoSul"
                    />
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}