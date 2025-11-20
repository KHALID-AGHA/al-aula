"use client";
import { aboutCards } from "@/src/lib/data";
import { motion } from "motion/react";
import Image from "next/image";

const Card = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const cardEntranceVariants = {
    hidden: { opacity: 0, scale: 0.95, transition: { staggerChildren: 0.1 } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  };

  const childStaggerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex lg:flex-row flex-col gap-5 text-[#3f2416] backdrop-blur-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {aboutCards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardEntranceVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white/30 rounded-3xl shadow-xl p-6 py-16 lg:w-1/3 w-full 
    flex gap-y-14 flex-col items-center lg:items-start
    transition-all duration-200"
        >
          <motion.div
            variants={childStaggerVariants}
            className="cursor-pointer w-8 h-8 rounded-full text-white  "
          >
            <Image
              src={card.icon}
              alt="icon"
              width={32}
              height={32}
              className="m-auto mt-2  "
            />
          </motion.div>
          <div className="text-white flex flex-col  justify-center gap-y-4">
            <motion.h2
              variants={childStaggerVariants}
              className="lg:text-start text-center"
            >
              header
            </motion.h2>
            <motion.h3 variants={childStaggerVariants}>
              {card.content}
            </motion.h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
