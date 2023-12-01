"use client";
import React, { useRef, useEffect } from "react";
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
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import styles from "./page.module.scss";
import useDimension from "@/scripts/useDimension";

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

export default function Home() {
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

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className=" h-screen bg-neutral-950 pt-24 p-12 lg:p-24">
        <h2 className="font-generalSansMedium font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-neutral-50 text-center">
          Urban Nest
        </h2>
        <h3 className="font-generalSansLight text-lg lg:text-3xl xl:text-4xl text-neutral-50 mt-2 text-center">
          Where Style Meets Comfort
        </h3>
        {/* Card with image */}
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
      <div ref={ref} className="relative h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="window-mask origin-[82%_40%] relative flex z-10 h-screen flex-row py-[12vh] px-[6vw] md:px-[14vw] justify-center gap-5 items-center w-full bg-neutral-950"
        >
          <div className="flex flex-col lg:p-12 gap-8 ">
            <h2 className="font-generalSansMedium font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50">
              What we do
            </h2>
            <p className="text-lg xl:text-2xl text-neutral-50">
              Welcome to Urban Nest, where we turn spaces into breathtaking
              experiences. Our passion for design goes beyond aesthetics; it
              <span>&#39;</span>s about creating environments that enhance your
              lifestyle and reflect your unique personality.
            </p>
            <p className="text-lg xl:text-2xl text-neutral-50">
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
      <div className="bg-neutral-950  mt-[-2rem] pb-20">
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
          <h2 className="font-generalSansMedium font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50 text-center">
            Contact
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

interface ColumnProps {
  images: any[];
  y?: any;
}

const Column = ({ images, y = 0 }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={src} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

const ContactForm = () => {
  return (
    <div>
      <form className="max-w-xl mx-auto mt-24">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-neutral-50 bg-transparent border-0 border-b-2 border-neutral-50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-neutral-600 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="name"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-neutral-50 bg-transparent border-0 border-b-2 border-neutral-50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-neutral-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_subject"
              id="floating_subject"
              className="block py-2.5 px-0 w-full text-sm text-neutral-50 bg-transparent border-0 border-b-2 border-neutral-50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_subject"
              className="peer-focus:font-medium absolute text-sm text-neutral-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-neutral-50 bg-transparent border-0 border-b-2 border-neutral-50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-neutral-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="message"
            id="floating_message"
            className="block resize-none py-2.5 px-0 w-full text-sm text-neutral-50 bg-transparent border-0 border-b-2 border-neutral-50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            rows={3}
            required
          />
          <label
            htmlFor="floating_message"
            className="peer-focus:font-medium absolute text-sm text-neutral-600 duration-300 transform -translate-y-14 scale-75 top-12 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
