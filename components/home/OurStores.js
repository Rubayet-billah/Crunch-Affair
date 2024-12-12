import React from "react";
import CAImage from "../UI/CAImage";
import artWorkCircle from "@/assets/artWorks/artWorkCircle.png";
import artWorkCircle2 from "@/assets/artWorks/artWorkCircle2.png";
import store1 from "@/assets/stores/store1.png";
import store2 from "@/assets/stores/store2.png";
import store3 from "@/assets/stores/store3.png";
import location from "@/assets/icons/location.png";
import CustomContainer from "../UI/CustomContainer";
import Link from "next/link";
import { LocateIcon } from "lucide-react";

const OurStores = () => {
  // Array of stores
  const stores = [
    { id: 1, image: store1, name: "Store 1" },
    { id: 2, image: store2, name: "Store 2" },
    { id: 3, image: store3, name: "Store 3" },
    { id: 4, image: store1, name: "Store 4" },
  ];

  return (
    <div className="my-16">
      {/* Header Section */}
      <header className="py-10 lg:py-16">
        <div className="relative mx-auto w-fit">
          <span className="font-bold text-2xl lg:text-4xl relative z-[1] lg:px-6">
            FIND US NEAR YOU
          </span>
          <div className="absolute w-20 -top-6 -left-4">
            <CAImage src={artWorkCircle} alt="artwork circle" />
          </div>
          <div className="absolute top-0 w-12 -right-2">
            <CAImage src={artWorkCircle2} alt="artwork circle 2" />
          </div>
        </div>
      </header>

      {/* Stores Section */}
      <CustomContainer>
        <section className="grid max-w-4xl gap-10 mx-auto lg:grid-cols-2">
          {stores.map((store) => (
            <div
              key={store.id}
              className="relative overflow-hidden transition duration-300 shadow-lg hover:shadow-xl group"
            >
              <div
                className="bg-center bg-cover"
                // style={{ backgroundImage: `url(${image.src})` }}
              >
                <CAImage src={store.image} alt={store.name} />
              </div>
              <div
                className={`absolute left-0 right-0 w-[120%] -ml-[10%] h-full px-4 py-2 pt-16 text-white transition duration-300 opacity-100 bg-opacity-50 bg-black top-[60%] backdrop-filter rounded-t-full group-hover:scale-0`}
              >
                <div className="flex flex-col items-center gap-2">
                  <h3 className="flex items-center gap-3 px-4 mt-1 text-lg font-medium text-white">
                    <span>Hayedrabad</span>
                    <span className="w-6">
                      <CAImage src={location} alt="location icon" />
                    </span>
                  </h3>
                  <hr className="border border-white w-28" />
                  {/* <div className="px-4 mt-4 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestiae dolorem assumenda pariatur quibusdam magnam
                    consectetur ut vitae itaque nisi doloremque?
                  </div>
                  <Link href="/service" className="mx-4 text-sm text-secondary">
                    Explore more
                  </Link> */}
                </div>
              </div>

              <div
                className={`absolute left-0 right-0 h-full px-4 py-2 text-white transition duration-500 opacity-100 bg-opacity-50 bg-black top-full backdrop-filter group-hover:-translate-y-full`}
              >
                <div className="flex flex-col items-start justify-center h-full gap-2 text-2xl">
                  <p>Store Name:</p>
                  <p>Location:</p>
                  <p>Address:</p>
                  <p>Phone No:</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </CustomContainer>
    </div>
  );
};

export default OurStores;
