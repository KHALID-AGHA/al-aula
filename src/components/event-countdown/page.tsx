"use client";

import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";

export const useCountdown = (targetDate: number) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, timeLeft]);

  if (timeLeft <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
    },
  },
};

interface AnimatedDigitProps {
  value: number;
  label: string;
}

const AnimatedDigit: React.FC<AnimatedDigitProps> = ({ value, label }) => (
  <motion.div
    variants={itemVariants}
    className="
      flex flex-col items-center justify-center
      h-14 w-14 rounded-xl  shadow-lg 
      bg-white/10 backdrop-blur-md border border-white/20
      cursor-pointer transition-all duration-300
    "
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(255, 255, 255, 0.15)",
    }}
  >
    <div className="relative overflow-hidden h-2/3 w-full flex items-center justify-center">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0.5 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute text-xl font-extrabold text-white leading-none"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>

    <div className=" text-center text-white/80 font-medium mt-1">{label}</div>
  </motion.div>
);

const Separator: React.FC = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0.5 }}
    animate={{
      scale: [0.9, 1.1, 0.9],
      opacity: [0.8, 1, 0.8],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
    className="text-sm font-extrabold text-white/70  self-center"
  >
    :
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      stiffness: 50,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

interface EventCountdownProps {
  targetDate: number;
}

export const EventCountdown: React.FC<EventCountdownProps> = ({
  targetDate,
}) => {
  const timeLeft = useCountdown(targetDate);

  const timerBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  if (timeLeft.isPast) {
    return (
      <section className="flex flex-col items-center justify-center  bg-[#18120F] min-h-screen">
        <h2 className="text-lg font-black  text-red-400">Event Concluded!</h2>
      </section>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={containerVariants}
      className="
          flex flex-row justify-start items-center 
           rounded-2xl shadow-inner        "
    >
      {timerBlocks.map((block, index) => (
        <Fragment key={block.label}>
          <AnimatedDigit value={block.value} label={block.label} />
          {index < timerBlocks.length - 1 && <Separator />}
        </Fragment>
      ))}
    </motion.div>
  );
};
