"use client";
"suppressHydrationWarning";
import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Aidan Miranda.png";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "What we do",
    href: "/home",
  },
  {
    name: "Gallery",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];

export default function NavBar() {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [clientReady, setClientReady] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const previousScrollY = scrollY.getPrevious();
    if (previousScrollY > latestScrollY) {
      setHidden(false);
    } else if (previousScrollY < latestScrollY) {
      setHidden(true);
    }
  });

  useEffect(() => {
    setClientReady(true);
  }, []);
  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  return clientReady ? (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 text-gray-50 bg-neutral-950 w-full h-[10vh] gap-8 font-generalSansLight text-xl z-20 flex items-center justify-end px-8 lg:px-14"
      >
        <Image
          src={Logo.src}
          width={160}
          height={160}
          alt="logo"
          className="absolute left-10 invert"
        />
        <div>Contact</div>
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer"
          whileHover={{
            scale: 1.1,
          }}
        >
          Explore
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed left-0 top-0 z-50 w-full h-screen bg-[#bbb9ac] origin-bottom text-black"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex h-full flex-col">
              <div className="absolute z-20 flex flex-row gap-8 font-generalSansLight text-xl top-[5vh] -translate-y-[50%] right-8 lg:right-14">
                <motion.p
                  className="cursor-pointer"
                  onClick={toggleMenu}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  Close
                </motion.p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center"
              >
                {navLinks.map((link) => {
                  return (
                    <div
                      key={link.name}
                      className="overflow-hidden p-4"
                      onClick={toggleMenu}
                    >
                      <NavLink name={link.name} href={link.href} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  ) : (
    <></>
  );
}

interface NavLinkProps {
  name: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href }) => {
  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.2,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={linkVariants}
      whileHover={{
        scale: 1.1,
      }}
      className="font-generalSansMedium text-6xl text-center underlined underlined--thin"
    >
      <Link href={href}>{name}</Link>
    </motion.div>
  );
};
