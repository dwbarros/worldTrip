import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";
import { useEffect } from "react";


export default function ContinentSlide() {

    useEffect(() => {
        document.documentElement.style.setProperty("--swiper-theme-color", "#FFBA08")
     }, [])

    return (
        <>
            <Swiper
                cssMode={false}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                        title="Europa"
                        text='O "velho continente" com sua história, cultura e as cidades mais charmosas para se visitar'
                        bgImage="/img/continents/europe.jpg"
                        route="/europe"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        title="Ásia"
                        text="O maior continente em extensão do mundo"
                        bgImage="/img/continents/asia.jpg"
                        route="/asia"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        title="África"
                        text="Continente das paisagens exuberantes, safáris e dos animais"
                        bgImage="/img/continents/africa.jpg"
                        route="/africa"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        title="América do sul"
                        text="Grande variedade de paisagens, clima, e estilos em cada país do continente"
                        bgImage="/img/continents/south_america.jpg"
                        route="/southamerica"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        title="América do norte"
                        text="Cidades urbanas e cosmopolitas, desérticas, nevadas, de sossego, de baladas, de parques de diversão, de turismo de aventura."
                        bgImage="/img/continents/america.jpg"
                        route="/america"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        title="Oceania"
                        text="Paisagens paradisíacas, tradições de civilizações aborígenes e cultura europeia, e cidades cheias de atrativos."
                        bgImage="/img/continents/oceania.jpg"
                        route="/oceania"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}