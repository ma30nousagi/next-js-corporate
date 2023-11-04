import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = ['/img/mv-1.jpg', '/img/mv-2.jpg'];
const spImages = ['/img/sp-visual.jpg', '/img/sp-visual.jpg'];


const slideSettings = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};

const Slider = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={slideSettings}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((src: string, index: number) => {
          return (
              <SwiperSlide key={index}>
                <Image src={src} layout="responsive" width={1920} height={1080} alt="image" />
              </SwiperSlide>         
          )
        })}
      </Swiper>
    );
};

export default Slider;
