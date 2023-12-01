"use client";
import React, { useState } from "react";
import Chromatic_Harmony from "@/public/Chromatic_Harmony.webp";
import Luxe_Haven from "@/public/Luxe_Haven.webp";
import Timeless_Tranquility from "@/public/Timeless_Tranquility.webp";
import Eclectic_Elegance from "@/public/Eclectic_Elegance.webp";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import Image from "next/image";

import Logo from "@/public/Aidan Miranda.png";


export default function HeroSection() {
  const slideNext = () => {
    const items = document.querySelectorAll(".item");
    document.getElementById("slide")?.appendChild(items[0]);
  };

  const slidePrev = () => {
    const items = document.querySelectorAll(".item");
    document.getElementById("slide")?.prepend(items[items.length - 1]);
  };

  return (
    <div className="h-[100vh] bg-[#bbb9ac] w-full">
      <div className="fixed left-0 top-0 hidden w-[8vw] lg:flex flex-col h-full bg-neutral-50 z-40 items-center">
        <Image
          src={Logo.src}
          width={100}
          height={100}
          alt="logo"
          className="absolute top-0"
        />
      </div>
      <div className="bg-neutral-950 absolute left-0 top-0 w-full h-[85vh]"></div>
      <div className="container">
        <div id="slide">
          <div
            className="item"
            style={{ backgroundImage: `url(${Chromatic_Harmony.src})` }}
          >
            <div className="content">
              <div className="name">CHROMATIC HARMONY</div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url(${Timeless_Tranquility.src})` }}
          >
            <div className="content">
              <div className="name">TIMELESS TRANQUILITY</div>
            </div>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url(${Luxe_Haven.src})` }}
          >
            <div className="content">
              <div className="name">LUXE HAVEN</div>
            </div>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url(${Eclectic_Elegance.src})` }}
          >
            <div className="content">
              <div className="name">ECLECTIC ELEGANCE</div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev" onClick={slidePrev} className="text-xl">
            <MdArrowBack />
          </button>
          <button id="next" onClick={slideNext} className="text-xl">
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
