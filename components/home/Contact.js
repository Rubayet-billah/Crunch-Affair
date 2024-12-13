import React from "react";
import CAImage from "../UI/CAImage";
import artWorkCircle from "@/assets/artWorks/artWorkCircle.png";
import artWorkCircle2 from "@/assets/artWorks/artWorkCircle2.png";
import CustomContainer from "../UI/CustomContainer";

const Contact = () => {
  return (
    <div className="my-16">
      <header className="py-10 lg:py-16">
        <div className="relative mx-auto w-fit">
          <span className="font-bold text-2xl lg:text-4xl relative z-[1] lg:px-6">
            GET IN TOUCH WITH US
          </span>
          <div className="absolute w-20 -top-6 -left-4">
            <CAImage src={artWorkCircle} alt="artwork underline" />
          </div>
          <div className="absolute top-0 w-12 -right-2">
            <CAImage src={artWorkCircle2} alt="artwork underline" />
          </div>
        </div>
      </header>
      <CustomContainer>
        <main>
          <section className="space-y-5">
            <div>
              <h3 className="flex items-center max-w-2xl gap-2 text-nowrap text-neutral">
                <span className="text-2xl font-bold">Email Us:</span>
                <span className="flex items-center w-full">
                  <hr className="w-full border-2 border-neutral" />
                  <span className="w-4 h-4 rounded-full bg-neutral"></span>
                </span>
              </h3>
              <div className="mt-2 space-y-2 text-xl">
                <p>kumardinesh.ds@gmail.com</p>
                <p>neeraj.baghel1@gmail.com</p>
                <p>Prav7497@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="flex items-center max-w-2xl gap-2 text-nowrap text-neutral">
                <span className="text-2xl font-bold">Marketing & PR:</span>
                <span className="flex items-center w-full">
                  <hr className="w-full border-2 border-neutral" />
                  <span className="w-4 h-4 rounded-full bg-neutral"></span>
                </span>
              </h3>
              <div className="mt-2 space-y-2 text-xl">
                <p>vipinkumar23997@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="flex items-center max-w-2xl gap-2 text-nowrap text-neutral">
                <span className="text-2xl font-bold">Address:</span>
                <span className="flex items-center w-full">
                  <hr className="w-full border-2 border-neutral" />
                  <span className="w-4 h-4 rounded-full bg-neutral"></span>
                </span>
              </h3>
              <ol className="mt-2 space-y-2 text-xl list-decimal list-inside">
                <li>Phoenix market City, Viman Nagar, Pune.</li>
                <li>Phoenix (Mall of the Milennium), Wakad, Pune.</li>
                <li>
                  Sarath City Mall(AMB Mall), Hitech city, kondapur Hyderabad
                </li>
              </ol>
            </div>
          </section>
        </main>
      </CustomContainer>
    </div>
  );
};

export default Contact;
