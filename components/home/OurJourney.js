import React from "react";
import CAImage from "../UI/CAImage";
import waveBg from "@/assets/artWorks/waveBg.png";
import artWorkWave from "@/assets/artWorks/artWorkWave.png";
import artWorkWave2 from "@/assets/artWorks/artWorkWave2.png";

const OurJourney = () => {
  const timelineData = [
    {
      year: 2018,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
    },
    {
      year: 2019,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
    },
    {
      year: 2020,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
    },
    {
      year: 2022,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
    },
    {
      year: 2024,
      description:
        "First and only brand to launch famous Hungarian Chimney Cone in Pune.",
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
        <div className="min-h-[70vh]">
          <div className="relative flex gap-2">
            {"jkfdia".split("").map((el) => (
              <div key={el}>
                <div className="flex flex-col items-center">
                  <div className="grid w-16 h-16 bg-yellow-400 border-2 border-black rounded-full place-items-center">
                    <span className="text-lg font-semibold">2018</span>
                  </div>
                  <hr className="w-0 h-24 border-2 border-black" />
                </div>
                <div className="h-48 p-4 bg-pink-300 border-4 border-black rounded-lg w-52">
                  h
                </div>
              </div>
            ))}

            <div className="absolute w-full max-w-7xl -z-10">
              <CAImage src={artWorkWave2} alt="wave 2" />
            </div>
          </div>
        </div>
      </CAImage>
    </div>
  );
};

export default OurJourney;
