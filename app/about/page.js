/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";

const AboutPage = () => {
  return (
    <div>
      <main className="max-w-[1440px] mx-auto mt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h1 className="mb-8 text-4xl font-semibold text-zinc-800 lg:text-7xl">
              How it Began?
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              From the streets of fludapest to India this soulful and delicious
              chimney nes have made way to the Punekars. The Crunch Affair Foods
              Pvt. Ltd, active in market since 2018. It was established by
              Dinesh Kumar and Neeraj Baghel. Dinesh travelled around the world
              and tried his hands at different cuisines. He loved the idea of
              Chimney Cones from the streets of Budapest. He learnt the art and
              techniques of it and decided to savory flavor which suits Indian
              palate. <br />
              <br />
              The Crunch Affair Chimney Cones have a crunch on the outside and a
              soft fluffy dough on the inside. They are baked using a
              traditional open gas rotisserie grill. The menu servedhas a large
              variety of indian fusions of Chimney cones. This was one of its
              kind street food available from the streets of Budapest to a
              global platform.
            </p>
          </div>
          <div>
            <Image src={about1} alt="about 1" className="w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-12 lg:mt-24 lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <Image src={about2} alt="about 1" className="w-full" />
          </div>
          <div>
            <h1 className="mb-8 text-4xl font-semibold text-zinc-800 lg:text-7xl">
              Growth Story
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              We've had an amazing joumey coming to where we are today with the
              dedicated focused team, that brought confidence to say that serve
              the Best Chimney cone in india.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-12 lg:mt-24 lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h1 className="mb-8 text-4xl font-semibold text-zinc-800 lg:text-7xl">
              Our Founders
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              We've had an amazing joumey coming to where we are today with the
              dedicated focused team, that brought confidence to say that serve
              the Best Chimney cone in india.
            </p>
          </div>
          <div>
            <Image src={about2} alt="about 1" className="w-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
