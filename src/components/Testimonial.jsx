import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import img from "../assets/img/img_photo.png";

export default function Testimonial() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-body testimonial-body">
            <div>
              <img src={img} class="rounded-circle" alt="" />
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
