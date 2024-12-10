"use client";
import React, { useState } from "react";
import artWorkWave from "@/assets/artWorks/artWorkWave.png";
import CAImage from "../UI/CAImage";
import CustomContainer from "../UI/CustomContainer";
import product4 from "@/assets/products/product4.png";
import { ChevronDown, Minus, Plus } from "lucide-react";

const Speciality = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "1. Diverse Cuisine Options",
      content:
        "Our food court offers a wide variety of cuisines, including local favorites, international dishes, and vegetarian options, catering to all taste preferences.",
    },
    {
      title: "2. Family-Friendly Environment",
      content:
        "Enjoy a cozy and welcoming atmosphere with ample seating, play areas for kids, and entertainment options for the whole family.",
    },
    {
      title: "3. Customizable Meals",
      content:
        "Many of our food vendors offer customizable meals to suit your dietary preferences and restrictions, ensuring every meal is perfect for you.",
    },
  ];

  return (
    <div className="py-12 bg-tertiary">
      {/* Header Section */}
      <header className="py-10 lg:py-16">
        <div className="relative mx-auto w-fit">
          <span className="font-bold text-2xl lg:text-4xl relative z-[1] lg:px-6">
            WHAT MAKES US SPECIAL?
          </span>
          <div className="absolute w-full -bottom-5">
            <CAImage src={artWorkWave} alt="artwork underline" />
          </div>
        </div>
      </header>

      <CustomContainer>
        <section className="grid gap-10 lg:grid-cols-2 place-items-center">
          {/* Accordion Section */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white border border-gray-200 rounded shadow-sm"
              >
                <button
                  className="flex items-center justify-between w-full gap-3 p-5 text-lg font-bold text-left text-gray-700 rounded-t hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  {/* <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  /> */}
                  {openIndex !== index ? <Plus /> : <Minus />}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden px-5 ${
                    openIndex === index ? "max-h-[200px] py-5" : "max-h-0"
                  }`}
                  style={{ maxHeight: openIndex === index ? "200px" : "0" }}
                >
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="max-w-sm mx-auto">
            <CAImage src={product4} alt="product image" />
          </div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default Speciality;
