import React from "react";
import artWorkWave from "@/assets/artWorks/artWorkWave.png";
import CAImage from "../UI/CAImage";
import TestimonialSlider from "./subComponents/testimonials/TestimonialSlider";
import TestimonialCard from "./subComponents/testimonials/TestimonialCard";
import CustomContainer from "../UI/CustomContainer";

const Testimonials = () => {
  return (
    <div className="py-16 my-10 lg:my-16 bg-neutral">
      {/* Header Section */}
      <header className="py-10 lg:py-16">
        <div className="relative mx-auto w-fit">
          <span className="font-bold text-2xl lg:text-4xl relative z-[1] lg:px-6">
            WHAT ARE CUSTOMER SAY?
          </span>
          <div className="absolute w-full -bottom-5">
            <CAImage src={artWorkWave} alt="artwork underline" />
          </div>
        </div>
      </header>

      <CustomContainer>
        <main>
          {/* <TestimonialSlider /> */}
          <section className="grid gap-10 lg:grid-cols-3">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </section>
        </main>
      </CustomContainer>
    </div>
  );
};

export default Testimonials;
