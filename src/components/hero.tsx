"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      <img src="images/inicio/inicio1.jpeg" alt="Paisaje Rural" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          IDEN<span className="text-blue-600">TIDAD</span> <span className="text-red-500">RURAL</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg"
        >
        </motion.p>
      </div>
    </section>
  );
}
