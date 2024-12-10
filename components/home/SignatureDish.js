import React from "react";
import CAImage from "../UI/CAImage";
import artWorkCircle from "@/assets/artWorks/artWorkCircle.png";
import product1 from "@/assets/products/product1.png";
import artWorkCircle2 from "@/assets/artWorks/artWorkCircle2.png";
import CustomContainer from "../UI/CustomContainer";
import Image from "next/image";
import Link from "next/link";

const SignatureDish = () => {
  return (
    <div className="mb-16">
      <header className="py-10 lg:py-16">
        <div className="relative mx-auto w-fit">
          <span className="font-bold text-2xl lg:text-4xl relative z-[1] lg:px-6">
            OUR SIGNATURE PRODUCT
          </span>
          <div className="absolute w-20 -top-6 -left-4">
            <CAImage src={artWorkCircle} alt="artwork underline" />
          </div>
          <div className="absolute top-0 w-12 -right-2">
            <CAImage src={artWorkCircle2} alt="artwork underline" />
          </div>
        </div>
      </header>

      <main>
        <CustomContainer>
          <section className="grid gap-10 lg:grid-cols-3">
            {" "}
            {"123".split("").map((product, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden transition duration-300 shadow-lg hover:shadow-xl group"
              >
                {/* Background image */}
                <div
                  className="bg-center bg-cover h-72"
                  // style={{ backgroundImage: `url(${image.src})` }}
                >
                  <CAImage
                    classNames="w-full"
                    src={product1}
                    alt={"product" + " - Thumb"}
                  />
                </div>
                <div
                  className={`absolute left-0 right-0 h-full px-4 py-2 text-white transition duration-300 opacity-100 bg-opacity-50 bg-black top-[80%] backdrop-filter group-hover:-translate-y-[80%]`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="flex items-center gap-3 px-4 mt-1 text-2xl font-bold uppercase text-tertiary">
                      {/* <Image className="w-10 h-10" src={icon} alt="icon" /> */}
                      {/* {title} */}
                      Chimney Cone
                    </h3>
                    <div className="px-4 mt-4 text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestiae dolorem assumenda pariatur quibusdam magnam
                      consectetur ut vitae itaque nisi doloremque?
                    </div>
                    <Link
                      href="/service"
                      className="mx-4 text-sm text-secondary"
                    >
                      Explore more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </CustomContainer>
      </main>
    </div>
  );
};

export default SignatureDish;
