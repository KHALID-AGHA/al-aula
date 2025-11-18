"use client";
import { IHeaderProps } from "@/src/types/sections";
import { motion } from "motion/react";

export const Header = ({ title }: IHeaderProps) => {
  return (
    <div>
      <motion.h2
        className="text-4xl font-bold text-center text-[#3f2416] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {title}
      </motion.h2>
    </div>
  );
};
