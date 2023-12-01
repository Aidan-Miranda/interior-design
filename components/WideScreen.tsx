"use client";
import React, { useRef } from "react";
import Earthy_Elegance from "@/public/Earthy_Elegance.jpg";
import Eclectic_Elegance from "@/public/Eclectic_Elegance.webp";
import Chromatic_Harmony from "@/public/Chromatic_Harmony.webp";
import Luxe_Haven from "@/public/Luxe_Haven.webp";
import Timeless_Tranquility from "@/public/Timeless_Tranquility.webp";
import Urban_Harbor from "@/public/Urban_Harbor.jpg";
import City_Forest from "@/public/City_Forest.jpg";
import Luminosity_Taupe from "@/public/Luminosity_Taupe.jpg";
import Golden_Glow from "@/public/Golden_Glow.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../app/page.module.scss";
import useDimension from "@/scripts/useDimension";
import ContactForm from "@/components/ContactForm";
import { Column, ColumnStatic } from "@/components/ColumnComponent";

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

export default function WideScreen() {
  const ref = useRef(null);
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollGalleryProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = useDimension();
  const scale = useTransform(scrollYProgress, [0.35, 1], [1, 12]);
  const imageX = useTransform(scrollYProgress, [0.35, 0.7], ["50%", "0%"]);
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    ["20%", "-50%", "-30%"]
  );
  const column1Y = useTransform(scrollGalleryProgress, [0, 1], [0, height * 2]);
  const column2Y = useTransform(scrollGalleryProgress, [0, 1], [0, height * 3]);
  const column3Y = useTransform(
    scrollGalleryProgress,
    [0, 1],
    [0, height * 1.25]
  );

  return (
    <div>
      <div className=" h-screen bg-neutral-950 pt-24 p-12 lg:p-24">
        <h2 className="font-generalSansMedium font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-neutral-50 text-center">
          Urban Nest
        </h2>
        <h3 className="font-generalSansLight text-lg lg:text-3xl xl:text-4xl text-neutral-50 mt-2 text-center">
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
      <div ref={ref} id="about" className="relative h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="window-mask origin-[82%_40%] relative flex z-10 h-screen flex-row py-[12vh] px-[6vw] md:px-[14vw] justify-center gap-5 items-center w-full bg-neutral-950"
        >
          <div className="flex flex-col lg:p-12 gap-8">
            <h2 className="font-generalSansMedium font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50">
              What we do
            </h2>
            <p className="text-lg xl:text-2xl text-neutral-50">
              Welcome to Urban Nest, where we turn spaces into breathtaking
              experiences. Our passion for design goes beyond aesthetics; it
              <span>&#39;</span>s about creating environments that enhance your
              lifestyle and reflect your unique personality.
            </p>
            <p className="text-lg xl:text-2xl text-neutral-50 ">
              At Urban Nest, we believe in a collaborative approach to design.
              We listen to your ideas, incorporate your personal style, and
              blend it seamlessly with our expertise. Our goal is to transform
              your space into a reflection of your lifestyle and aspirations.
            </p>
          </div>
          <div className=" box-content w-[150px] h-[200px] min-w-[150px] border-[8px] border-neutral-50 lg:w-[300px] lg:h-[400px] lg:min-w-[300px]" />
        </motion.div>
      </div>
      <div className="mt-[-200vh] h-[200vh] overflow-clip bg-neutral-950">
        <motion.span
          style={{
            x: imageX,
            y: imageY,
            backgroundImage: `url(${Luxe_Haven.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="border-[4px] border-neutral-50 sticky top-1/2 mx-auto block w-[1600px] max-w-[90%] md:max-w-[60%] aspect-[16/10] bg-gray-300 shadow-2xl md:top-[1/4] translate-y-[-50%]"
        ></motion.span>
      </div>
      <div className="bg-neutral-950  mt-[-6rem] pt-24 pb-20 " id="gallery">
        <motion.h2
          className="font-generalSansMedium font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50 text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Gallery
        </motion.h2>
      </div>
      <div className="bg-neutral-950 ">
        <div className={styles.gallery} ref={gallery}>
          <div className={styles.galleryWrapper}>
            <Column images={[images[0], images[1], images[2]]} y={column1Y} />

            <Column images={[images[3], images[4], images[5]]} y={column2Y} />

            <Column images={[images[6], images[7], images[8]]} y={column3Y} />
          </div>
        </div>
        <div className="bg-neutral-950 h-screen p-24">
          <h2
            id="contact"
            className="font-generalSansMedium font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50 text-center"
          >
            Contact
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
