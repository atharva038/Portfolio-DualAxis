"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FAF7F2] dark:bg-[#18181B] py-16 sm:py-20 md:py-24 z-0 transition-colors duration-300",
        className
      )}
    >
      {/* Top Conic & Ambient Lighting Structure */}
      <div className="pointer-events-none absolute top-0 inset-x-0 flex w-full items-center justify-center isolate z-0 overflow-hidden">
        {/* Left Conic Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "48rem" }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 top-0 h-64 sm:h-80 w-[36rem] sm:w-[48rem] bg-gradient-conic from-[#C07A3D] dark:from-[#C6A75E] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#FAF7F2] dark:bg-[#18181B] h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-44 h-[100%] left-0 bg-[#FAF7F2] dark:bg-[#18181B] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Conic Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "48rem" }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 top-0 h-64 sm:h-80 w-[36rem] sm:w-[48rem] bg-gradient-conic from-transparent via-transparent to-[#C07A3D] dark:to-[#C6A75E] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-44 h-[100%] right-0 bg-[#FAF7F2] dark:bg-[#18181B] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[#FAF7F2] dark:bg-[#18181B] h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Central Core Ambient Glows */}
        <div className="absolute top-4 h-48 w-full max-w-4xl rounded-full bg-[#C07A3D]/25 dark:bg-[#C6A75E]/20 blur-3xl" />
        <div className="absolute top-2 h-24 w-1/2 max-w-2xl rounded-full bg-[#E59850]/40 dark:bg-[#D4B86A]/35 blur-2xl" />

        {/* Horizontal Flare Bar */}
        <motion.div
          initial={{ width: "16rem" }}
          whileInView={{ width: "44rem" }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 z-30 h-[2.5px] w-[44rem] bg-gradient-to-r from-transparent via-[#C07A3D] to-transparent dark:via-[#C6A75E] shadow-[0_0_18px_rgba(192,122,61,0.9)] dark:shadow-[0_0_18px_rgba(198,167,94,0.9)]"
        />
      </div>

      {/* Natural, Well-Padded Content Flow without Negative Margin Cutoffs */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 max-w-5xl mx-auto pt-6 sm:pt-10">
        {children}
      </div>
    </div>
  );
};
