"use client";
import { missionVisionCards } from "@/src/lib/data";
import { motion } from "motion/react";

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

  const cardHoverVariants = {
    whileHover: {
      scale: 1.05, 
      rotateY: 5, 
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)", 
    },
     whileTap: {
      scale: 0.98,
    },
  };
  const cardEntranceVariants = {
    hidden: { y: 50, opacity: 0 }, 
    visible: {
      y: 0, 
      opacity: 1, 
      transition: {
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex lg:flex-row flex-col gap-5 text-[#3f2416] backdrop-blur-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} 
    >
      {missionVisionCards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardEntranceVariants}
          transition={{ duration: 0.2 }}
          className="bg-white/30 rounded-lg shadow-xl p-6 py-12 lg:w-1/3 w-full 
        flex gap-y-14 flex-col items-start justify-start
        transition-all duration-200"
        >
          <motion.div
            whileHover={cardHoverVariants.whileHover}
            whileTap={cardHoverVariants.whileTap}
            className="cursor-pointer w-8 h-8 rounded-full bg-[#3f2416] text-white items-center text-center"
          >
            &#8599;
          </motion.div>
          <div>{card.content}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
