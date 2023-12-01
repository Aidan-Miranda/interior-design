"use client";
import React from "react";
import Earthy_Elegance from "@/public/Earthy_Elegance.jpg";
import Eclectic_Elegance from "@/public/Eclectic_Elegance.webp";
import Chromatic_Harmony from "@/public/Chromatic_Harmony.webp";
import Luxe_Haven from "@/public/Luxe_Haven.webp";
import Timeless_Tranquility from "@/public/Timeless_Tranquility.webp";
import Urban_Harbor from "@/public/Urban_Harbor.jpg";
import City_Forest from "@/public/City_Forest.jpg";
import Luminosity_Taupe from "@/public/Luminosity_Taupe.jpg";
import Golden_Glow from "@/public/Golden_Glow.jpg";
import styles from "../app/page.module.scss";
import ContactForm from "@/components/ContactForm";
import { ColumnStatic } from "@/components/ColumnComponent";

const images = [
  Earthy_Elegance,
  Eclectic_Elegance,
  Chromatic_Harmony,
  Luxe_Haven,
  Timeless_Tranquility,
  Urban_Harbor,
  City_Forest,
  Luminosity_Taupe,
  Golden_Glow,
];

export default function PhoneScreen() {
  return (
    <div suppressHydrationWarning={true}>
      <div className=" h-screen bg-neutral-950 pt-24 p-12">
        <h2 className="font-generalSansMedium font-bold text-5xl md:text-7xl text-neutral-50 text-center">
          Urban Nest
        </h2>
        <h3 className="font-generalSansLight text-lg text-neutral-50 mt-2 text-center">
          Where Style Meets Comfort
        </h3>
        <span
          style={{
            backgroundImage: `url(${Earthy_Elegance.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="border-[4px] border-neutral-50 mx-auto block w-[1600px] max-w-[90%] md:max-w-[50%] aspect-[16/10] bg-gray-300 shadow-2xl mt-6"
        ></span>
      </div>
      <div id="about" className=" h-[100vh]">
        <div className="text-center flex z-10 h-screen flex-row px-[6vw] md:px-[14vw] justify-center gap-5 items-center w-full bg-neutral-950">
          <div className="flex flex-col gap-8">
            <h2 className="font-generalSansMedium font-bold text-4xl text-neutral-50">
              What we do
            </h2>
            <p className="text-lg text-neutral-50">
              Welcome to Urban Nest, where we turn spaces into breathtaking
              experiences. Our passion for design goes beyond aesthetics; it
              <span>&#39;</span>s about creating environments that enhance your
              lifestyle and reflect your unique personality.
            </p>
            <p className="text-lg text-neutral-50 ">
              At Urban Nest, we believe in a collaborative approach to design.
              We listen to your ideas, incorporate your personal style, and
              blend it seamlessly with our expertise. Our goal is to transform
              your space into a reflection of your lifestyle and aspirations.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-neutral-950">
        <span
          style={{
            backgroundImage: `url(${Luxe_Haven.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="border-[4px] border-neutral-50 sticky top-1/2 mx-auto block w-[1600px] max-w-[90%] md:max-w-[60%] aspect-[16/10] bg-gray-300 shadow-2xl md:top-[1/4] translate-y-[-50%]"
        ></span>
      </div>
      <div className="bg-neutral-950  mt-[-6rem] pt-24 pb-20 " id="gallery">
        <h2 className="font-generalSansMedium font-bold text-4xl text-neutral-50 text-center ">
          Gallery
        </h2>
      </div>
      <div className="bg-neutral-950 ">
        <div className={styles.galleryStatic}>
          <div className={styles.galleryWrapper}>
            <ColumnStatic images={[images[0], images[1], images[2]]} />
            <ColumnStatic images={[images[3], images[4], images[5]]} />
            <ColumnStatic images={[images[6], images[7], images[8]]} />
          </div>
        </div>
        <div className="bg-neutral-950 h-screen p-24">
          <h2
            id="contact"
            className="font-generalSansMedium font-bold text-4xl text-neutral-50 text-center"
          >
            Contact
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
