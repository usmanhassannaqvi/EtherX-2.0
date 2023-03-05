import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { SliderData } from "../helpers/SliderData";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        freeMode={true}
        grabCursor={true}
        autoplay={true}
        modules={[FreeMode, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        className="my-Swiper"
      >
        {SliderData.map((slideData, keys) => {
          return (
            <>
              <span className="">
                <SwiperSlide>
                  <Cards desc={slideData.desc} img={slideData.image} />
                </SwiperSlide>
              </span>
            </>
          );
        })}
      </Swiper>
      <div></div>
    </div>
  );
}

const Cards = (props) => {
  return (
    <div className=" py-2">
      <div className="shadow-xl flex flex-col bg-[#33343f] border-black overflow-hidden text-center items-center h-60 rounded-2xl">
        <div className="flex h-[80%] items-center">
          <div className="w-28">
            <img className="rounded-full" src={props.img} alt="" />
          </div>
        </div>
        <a className="cursor-pointer">{props.desc}</a>
      </div>
    </div>
  );
};
