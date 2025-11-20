"use client";
import { motion } from "motion/react";
import Image from "next/image";

const LandingContent = () => {
  return (
    <div className="gap-y-4 lg:-mt-36 w-full h-1/2 flex flex-col justify-center items-start">
      <div className="max-w-4xl text-white text-left p-4">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:text-4xl text-xl font-normal leading-tight drop-shadow-lg"
        >
          <strong className="font-semibold">Welcome</strong> to the{" "}
          <strong className="font-semibold">AlUla</strong> Emerging
          <br />
          Market Economies <strong className="font-semibold">Conference</strong>
        </motion.h2>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 lg:text-sm text-sm font-light drop-shadow-md"
        >
          <strong className="font-semibold">Join us </strong> in the historic
          setting of <strong className="font-semibold">AlUla</strong> as global
          leaders, policymakers, <br /> and experts convene to shape the
          <strong className="font-semibold">future of emerging markets</strong>
        </motion.p>
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-4 p-4 items-start">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{
            transition: { delay: 0.3, duration: 0.3 },
            scale: 1.09,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          }}
          className="text-[#725A4A] bg-white rounded-[43px] py-3 px-6 flex items-center justify-center gap-x-2"
        >
          Register Now
          <Image
            alt="arrow"
            src={"/assets/arrow-small-right.svg"}
            width={10}
            height={10}
          />
        </motion.button>
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{
            transition: { delay: 0.3, duration: 0.3 },
            scale: 1.09,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          className="text-white rounded-[43px] border-white border-2 bg-transparent py-3 px-9"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default LandingContent;
