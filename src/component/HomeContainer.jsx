import React from "react";
import Delivery from "../img/img/delivery.png";
import HeroBg from "../img/img/heroBg.png";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center justify-center gap-2 bg-orange-100 p-2 rounded-full px-4 py-1">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounder-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain "
              alt=""
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ad
          debitis, accusamus adipisci, porro atque ipsum animi ullam harum
          voluptatem facilis quos sed totam, officiis molestiae architecto
          numquam nesciunt delectus!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650 "
          alt=""
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center md:px-16 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((ele) => (
              <div
                key={ele.id}
                className="cursor-pointer lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img src={ele.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="" />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {ele.name}
                </p>
                <p className="text-[10px] lg:text-sm text-lighttextGray font-semiboldmy-1 lg:my-3">
                  {ele.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {ele.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
