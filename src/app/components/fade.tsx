'use client';

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
      transition={{
        delay: .03
      }}
    >
      {children}
    </motion.div>
  );
}

const FadeLeft = ({ children }: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.1 }} // Trigger animation when 50% of the element is in view
    transition={{
      duration: 1, // Smooth fade duration
      ease: "easeOut", // Use a smoother easing function
    }}
    >
      {children}
    </motion.div>
  );
}

const FadeRight = ({ children }: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: [.3,.67,1], x: 0 }}
    viewport={{ once: false, amount: 0.1 }} // Trigger animation when 50% of the element is in view
    transition={{
      duration: 1, // Smooth fade duration
      ease: "easeOut", // Use a smoother easing function
    }}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn, FadeLeft, FadeRight };