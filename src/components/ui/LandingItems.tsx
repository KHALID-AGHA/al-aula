"use client";
import { motion } from "motion/react";
import { futureDate } from "@/src/lib/data";
import Image from "next/image";
import { EventCountdown } from "../event-countdown/page";

const LandingItems = () => {
  return (
    <div
      className="flex h-fit lg:rounded-full rounded-md py-3 px-9 w-full mt-14
      bg-white/30 backdrop-blur-sm shadow-xl 
       lg:flex-row flex-col items-center justify-center gap-4
       "
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-row gap-x-2 lg:w-1/4 w-full justify-start items-center"
      >
        <Image
          src="/assets/calendar (4).svg"
          alt="calendar"
          width={25}
          height={25}
        />
        <div className="flex flex-col items-start justify-start">
          <p className="text-sm">Dates</p>
          <p className="text-sm">
            <strong className="font-bold">Friday,</strong>14 November
          </p>
        </div>
      </motion.div>
      <motion.div 
       initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      className="flex flex-row gap-x-2 lg:w-1/4 w-full justify-start items-center">
        <Image
          src="/assets/calendar (4).svg"
          alt="calendar"
          width={25}
          height={25}
        />
        <div className="flex flex-col items-start justify-start">
          <p className="text-sm">Location</p>
          <p className="text-sm">Location, ll</p>
        </div>
      </motion.div>
      <motion.div
       initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
       className="flex flex-row gap-x-2 lg:w-1/4 w-full justify-start items-center">
        <Image
          src="/assets/calendar (4).svg"
          alt="calendar"
          width={25}
          height={25}
        />
        <div className="flex flex-col items-start justify-start">
          <p className="text-sm">Expand</p>
          <p className="text-sm">+50000</p>
        </div>
      </motion.div>
      <div className="flex flex-row gap-x-2 lg:w-1/4 w-full justify-start items-center">
        <div className="flex flex-col items-start justify-start">
          <EventCountdown targetDate={futureDate} />
        </div>
      </div>
    </div>
  );
};

export default LandingItems;
