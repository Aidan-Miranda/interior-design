"use client";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/scripts/use-follow-pointer";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [clientReady, setClientReady] = useState<boolean>(false);
  const { x, y } = useFollowPointer();

  useEffect(() => {
    // wait for 0.5 seconds before showing the cursor
    setTimeout(() => {
      setClientReady(true);
    }, 500);
  }, []);

  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;

  return clientReady ? (
    <motion.div
      className="box"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        opacity: 0,
      }}
      animate={{
        width: "40px",
        height: "40px",
        x: x - 20,
        y: y - 20 + scrollY,
        opacity: 1,
      }}
      transition={{
        width: { duration: 1.5 },
        height: { duration: 1.5 },
        opacity: { duration: 1.5 },
        type: "spring",
        damping: 6,
        stiffness: 100,
        restDelta: 0.02,
      }}
    />
  ) : (
    <></>
  );
}
