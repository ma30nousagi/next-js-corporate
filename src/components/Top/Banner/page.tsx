import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = ['/img/b-1.jpg', '/img/b-2.jpg', '/img/b-3.jpg', '/img/b-4.jpg', '/img/b-5.jpg'];


const slideSettings = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
};

const BannerSlide = () => {
    return (
      <div>
        <section className='max-w-5xl mx-auto px-4 py-20 w-full'>
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
              delay: 3800,
              disableOnInteraction: false,
            }}
          >
            {images.map((src: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Image src={src} width={300} height={250} alt="banner"/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
      </div>      
    );
};

export default BannerSlide;