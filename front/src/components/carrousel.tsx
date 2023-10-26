// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { ICarrouselComponent } from "../interfaces";

const Carrousel: React.FC<ICarrouselComponent> = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {props.data.map((data: string) => (
        <SwiperSlide>
          <img
            style={{ width: "100%", height: 350, borderRadius: 15 }}
            src={data}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
