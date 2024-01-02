"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-[500px] ">
      <div className=" max-w-[900px] mx-auto">
        <div className="flex  justify-between items-center  pt-24 px-4 gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-4 flex-1 upAnimate">
            <h3 className="t text-4xl font-extrabold tracking-normal">
              Hello, I'm Eden ッ
            </h3>
            <h4>
              I'm intermidate application designer with a focus on interaction
              design and design systems. With a deep understanding of the
              end-to-end product design process, I specialize in creating
              intuitive and engaging user 
            </h4>
          </div>
          <div className="flex-1">
            <Image
              width={400}
              className="w-full aspect-square object-contain"
              height={400}
              src={"/images/about.png"}
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
