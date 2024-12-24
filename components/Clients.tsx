"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      {/* Animate the section header */}
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </motion.h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <motion.div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>

        {/* Animate the second header */}
        <motion.h1
          id="features"
          className="heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our
          <span className="text-purple"> Tech stack</span>
        </motion.h1>

        <br />

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1 * index, // Stagger the animations for each company logo
              }}
            >
              <div className="relative flex items-center justify-center md:w-20 md:h-20 w-14 h-14 bg-gray-800 rounded-full border-4 border-violet-400 shadow-lg">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
              <span className="mt-2 text-white text-center text-sm md:text-base">
                {company.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
