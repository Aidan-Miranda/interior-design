"use client";
import React, { useRef, useEffect, useState } from "react";
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
import styles from "./page.module.scss";
import useDimension from "@/scripts/useDimension";
import ContactForm from "@/components/ContactForm";
import { Column, ColumnStatic } from "@/components/ColumnComponent";
import PhoneScreen from "@/components/PhoneScreen";
import WideScreen from "@/components/WideScreen";

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
  const isTabletorPhone =
    typeof window !== "undefined" && window.innerWidth <= 1024;
    
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return isTabletorPhone ? <PhoneScreen /> : <WideScreen />;
}
