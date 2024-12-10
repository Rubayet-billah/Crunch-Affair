import React from "react";
import CAImage from "../UI/CAImage";
import waveBg from "@/assets/artWorks/waveBg.png";
import artWorkWave from "@/assets/artWorks/artWorkWave.png";
import artWorkWave2 from "@/assets/artWorks/artWorkWave2.png";
import CustomContainer from "../UI/CustomContainer";
import { twMerge } from "tailwind-merge";

const OurJourney = () => {
  const timelineData = [
    {
      year: 2018,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
      lineHeight: "30px",
    },
    {
      year: 2019,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
      lineHeight: "80px",
    },
    {
      year: 2020,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
      lineHeight: "50px",
    },
    {
      year: 2021,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
      lineHeight: "90px",
    },
    {
      year: 2022,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
      lineHeight: "60px",
    },
    {
      year: 2024,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
      lineHeight: "30px",
    },
  ];

  return (
    <div className="w-full">
      <CAImage src={waveBg} alt="Our Journey Image" objectFit="fill" bgImage>
        <header className="py-10 lg:py-16">
          <div className="relative mx-auto w-fit">
            <span className="font-bold text-2xl lg:text-4xl relative z-[1] lg:px-6">
              Our Crunchy Journey
            </span>
            <div className="absolute w-full -bottom-5">
              <CAImage src={artWorkWave} alt="artwork underline" />
            </div>
          </div>
        </header>
        <CustomContainer>
          {" "}
          <div className="min-h-[70vh]">
            <div className="relative flex">
              {timelineData.map((el, idx) => (
                <div
                  key={el}
                  style={{
                    translate: idx > 0 ? `-${idx * 20}px 0px` : "0",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="grid w-16 h-16 bg-yellow-400 border-4 border-black rounded-full place-items-center">
                      <span className="text-lg font-semibold">{el.year}</span>
                    </div>
                    <hr
                      className={`w-0 border-2 border-black`}
                      style={{
                        height: el.lineHeight,
                      }}
                    />
                  </div>
                  <div
                    className={twMerge(
                      "h-48 p-4 border-4 border-black hover:scale-105 duration-200 rounded-lg",
                      idx % 2 === 0 ? "bg-violet-200" : "bg-white"
                    )}
                  >
                    {el.description}
                  </div>
                </div>
              ))}

              <div className="absolute w-full -z-10">
                <CustomContainer>
                  <CAImage src={artWorkWave2} alt="wave 2" />
                </CustomContainer>
              </div>
            </div>
          </div>
        </CustomContainer>
      </CAImage>
    </div>
  );
};

export default OurJourney;
