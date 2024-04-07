import React from "react";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="mb-40 pt-16 px-5 md:px-0" id="testimonials">
      <h2 className="text-center text-title-color-dark text-3xl font-semibold">
        My clients say
      </h2>
      <span className="block text-center text-title-color font-thin  text-xs/none mb-20">
        Testimonial
      </span>
      <Swiper
        style={{
          "--swiper-pagination-color": "#1E1C23",
          "--swiper-pagination-bullet-inactive-color": "#777777",
        }}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className=" xl:w-[80%]">
        {Data.map(({ id, title, image, description }) => (
          <SwiperSlide
            key={id}
            className=" bg-white border  border-gray-200 rounded-3xl p-5">
            <img
              src={image}
              alt="client img"
              className="w-[60px] rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold text-title-color-dark my-2">
              {title}
            </h3>
            <p className="text-base text-title-color">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
