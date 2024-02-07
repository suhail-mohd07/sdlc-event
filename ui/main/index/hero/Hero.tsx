import React from "react";
import Image from "next/image";
import Timer from "@/ui/sub/index/timer/Timer";
import Link from "next/link";

function Hero() {
  return (
    <div
      className="relative w-full h-full flex-reverse justify-center items-center"
      style={{ backgroundColor: "rgba(3, 0, 20, 0.674)" }}
    >
      <h1
        className="flex h-auto justify-end mr-5 items-center text-[70px] font-bold text-black relative"
        style={{ textShadow: "5px 5px 9px rgba(0, 0, 0, 1)" }}
      >
        <span  className="bg-gradient-to-r from-white to-gray-500 rounded-2xl flex justify-center items-center z-[0] border border-gray-500">
          <span className="px-2">SD</span>
          <span className="absolute w-[45px] z-[1] h-[40px] bg-black"></span>
          <Image
            className="z-[2]"
            src="/gifs/settings.gif"
            width={110}
            height={110}
            alt="img"
          />
          <span className="px-2">LC</span>
        </span>
      </h1>
      <div className="w-full h-auto p-10 flex justify-center">
        <h1 className="font-bold text-[4vw] bg-gradient-to-r from-red-500 via-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          SOFTWARE DEVELOPMENT LIFE CYCLE
        </h1>
      </div>
      <div className="w-full   h-auto flex justify-center items-center p-2">
        <div className="w-1/2 h-auto p-5">
          <Timer />
        </div>
        <div className="w-1/2 h-auto p-5">
          <h5 className="text-slate-500 font-bold text-[16px] text-justify">
            "Explore the world of Software Development Life Cycle (SDLC) at our
            upcoming event. Join us to learn about the systematic process from
            planning to deployment, ensuring efficient development and
            high-quality software. Don't miss out on this opportunity to connect
            with experts in the field. Stay tuned for details!"
          </h5>
          <div className="py-2 my-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            <Link href={"/about-event"}>Learn More!</Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[50%] absolute top-0 flex justify-center items-center z-[-10]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/videos/bg-vid.mp4/"
        />
      </div>
      <div className="w-[50%] h-[50%] absolute top-[20%] left-[50%] flex justify-center items-center z-[-10] transform rotate-90">
  <video
    loop
    muted
    autoPlay
    playsInline
    preload="false"
    className="w-full h-auto object-cover"
    src="/videos/bg-vid-2.mp4/"
  />
</div>

    </div>
  );
}

export default Hero;
