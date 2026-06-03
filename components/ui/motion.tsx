"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeUp({ delay = 0, children, ...props }: FadeUpProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{ duration: 0.55, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
