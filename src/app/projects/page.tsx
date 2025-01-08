'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "../components/cursor";
import { Container } from "../components/container";

export default function Page() {
    const textIndex = useMotionValue(0);
    const texts = [
        "Coming Soon...",
        "... Stay Tuned.",
      ];
  
    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);
  
    useEffect(() => {
      animate(count, 60, {
        type: "tween",
        duration: 1.67,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        onUpdate(latest) {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (textIndex.get() === texts.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
    
    <Container className="flex flex-col items-center justify-center h-screen">
      <span className="">
        <motion.h1 className="text-4xl font-bold inline">{displayText}</motion.h1>
        <CursorBlinker />
      </span>
    </Container>
    
    );
  }