"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import ethereumSvg from "../public/ethereum-1.svg";
export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url('/bg-sites-4.jpg')" }}
      className="px-6 sm:px-16 bg-cover bg-no-repeat justify-between text-[#E7F9FF] h-screen sm:flex-row flex-col flex items-center "
    >
      <div className="col-span-12 sm:w-[70%] lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
        <span className="text-base  font-semibold uppercase">Join Now</span>
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
        >
          Revolutionize Your Crypto Trading
        </h1>
        <p className="text-justify">
          Introducing the fastest growing web app for crypto enthusiasts! With
          our platform, you can easily buy and sell over 200 cryptocurrencies
          using 20+ flat currencies. Whether you prefer bank transfers or
          credit/debit cards, our app has got you covered. Start trading now and
          experience the ease and convenience of our user-friendly interface.
        </p>
        <ConnectButton />
      </div>
      <Image src={ethereumSvg} alt="ethereum Svg" width={200} height={200} />
    </main>
  );
}
