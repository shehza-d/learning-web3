"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <section className=" bg-[#E7F9FF] md:h-screen h-full flex items-center">
      <section className="md:flex max-w-6xl m-auto">
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span
            data-aos="fade-right"
            data-aos-once="true"
            className="text-base text-gradient font-semibold uppercase"
          >
            Sign Up Today
          </span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            The Worlds{" "}
            <span className="text-header-gradient">Fastest Growing</span> Crypto
            Web App
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="paragraph "
          >
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            bank transfers or your credit/debit card.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="md:flex flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <button className="px-5 py-1 bg-inherit text-gradient border border-[#0c66ee] rounded-lg hover:scale-105 duration-300 font-semibold">
              <span>Get Started</span>
            </button>
            <div className=" flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-6 relative md:mt-0 mt-16">
          <div className="w-full ">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src="/hero-image.webp"
              className="-mt-4 img"
              alt=""
            />
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src="/ellipse-1.png"
            className="absolute md:bottom-20 bottom-10 md:right-[24rem] right-60 w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src="/ellipse-2.png"
            className="absolute top-4 sm:top-20 left-10 sm:left-10 xl:right-[32rem] w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src="/ellipse-3.png"
            className="absolute bottom-56 right-12 w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src="/star.png"
            className="absolute top-64 sm:top-2 right-8 md:right-3 w-8"
          />
        </div>
      </section>
    </section>
  );
}
