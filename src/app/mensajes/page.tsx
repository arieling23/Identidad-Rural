"use client";
import { motion } from "framer-motion";
import WordCloud from "@/components/WordCloud";

export default function Mensajes() {
  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Mensajes de las Parroquias
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-600 mb-10"
        >
          Esta página visibiliza la voz de las parroquias rurales del Ecuador mediante mensajes representativos y curiosidades extraídas de entrevistas con sus representantes.
        </motion.p>

        {/* Sección de la nube de palabras */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <WordCloud />
        </motion.div>
      </div>
    </div>
  );
}
