import React from "react";
import CustomContainer from "../UI/CustomContainer";
import CAImage from "../UI/CAImage";
import slide1 from "@/assets/banner/slide1.png";

const Banner = () => {
  return (
    <div className="relative lg:min-h-[75vh] grid items-center">
      <CustomContainer>
        <section className="py-24">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold lg:text-5xl">
              <span>DELIGHT</span> <br />
              <span className="inline-block mt-3 text-secondary">
                IN EVERY CRUNCH
              </span>
            </h2>
            <p className="mt-3 font-semibold text-accent lg:text-lg">
              Premium Snacks Crafted for Unforgettable Moments
            </p>
          </div>
        </section>
      </CustomContainer>
      <div className="absolute hidden lg:block rotate-[65deg] -left-20 -top-16 rounded-2xl w-60 h-60 -z-10 bg-emerald-700/30"></div>
      <div className="top-0 right-0 overflow-hidden h-80 lg:h-auto lg:absolute lg:w-2/5">
        <CAImage src={slide1} alt="Banner 1" />
      </div>
    </div>
  );
};

export default Banner;
