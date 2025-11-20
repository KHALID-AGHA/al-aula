"use client";
import { IHeaderProps } from "@/src/types/sections";
import { motion } from "motion/react";

export const Titles = ({ title, subTitle }: IHeaderProps) => {
  return (
    <div>
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      {subTitle && (
        <motion.p
          className="text-sm text-center text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {subTitle}
        </motion.p>
      )}
    </div>
  );
};
