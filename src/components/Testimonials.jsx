import React, { useState } from "react";
import styles from "../style";
import { testimonials } from "../constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const renderTestimonials = () => {
    return testimonials.map((testimonial) => (
      <div key={testimonial.id} className={`bg-white px-4 md:pr-6`}>
        <div className="w-full flex justify-center">
          <img
            className="w-16"
            src={testimonial.image}
            alt={`${testimonial.name} image`}
          />
        </div>
        <h2
          className={`text-center py-4 text-secondary tracking-tight sm:tracking-normal text-[16px] ss:text-[17px] sm:text-[18px] font-semiBold sm:font-bold`}
        >
          {testimonial.name}
        </h2>

        <p className={`px-8 sm:px-2 w-full text-center ${styles.paragraph}`}>
          {testimonial.content}
        </p>
      </div>
    ));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        className={`mt-[70px] w-[9px] h-[9px] border-red-500 border-[1px] rounded-full ${
          i === currentSlide ? "bg-red-500" : ""
        }`}
      ></div>
    ),
  };
  return (
    <div>
      <Slider className="mx-3 md:mx-0" {...sliderSettings}>
        {renderTestimonials()}
      </Slider>
      <div className="w-full text-center pt-12 mt-16 sm:mt-24 sm:pt-6">
        <button
          type="button"
          className="bg-primary hover:bg-opacity-[0.7] font-semiBold text-hover px-6 py-3 rounded-full shadow-md shadow-red-400"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
