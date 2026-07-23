"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  delay = 0,
  duration = 0.6 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "0px 0px -20% 0px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
