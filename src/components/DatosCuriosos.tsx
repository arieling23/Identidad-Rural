"use client";
import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";


const data = [
  { name: "Positivos", value: 40, color: "#1f9d55" }, // Verde
  { name: "Neutros", value: 30, color: "#595959" }, // Gris
  { name: "Negativos", value: 30, color: "#e3342f" }, // Rojo
];

const curiosities = [
  { text: "Lorem ipsum dolor sit amet consectetur.", color: "bg-red-500 text-white", x: -50, y: -20 },
  { text: "Algunas personas se negaron a grabar un video por temor a represalias, prefiriendo mantener su identidad en el anonimato.", color: "bg-yellow-400 text-black", x: 50, y: -20 },
  { text: "Lorem ipsum dolor sit amet consectetur. Consequuntur neque eu egestas nunc dolor tincidunt.", color: "bg-yellow-400 text-black", x: -70, y: 50 },
  { text: "Lorem ipsum dolor sit amet consectetur. Massa semper molestie nibh bibendum ipsum.", color: "bg-blue-500 text-white", x: 70, y: 50 },
  { text: "Lorem ipsum dolor sit amet consectetur.", color: "bg-red-500 text-white", x: 0, y: 90 },
];

export default function DatosCuriosos() {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold">Emociones Percibidas en los Mensajes</h2>

      {/* Gráfico de Pastel */}
      <div className="flex justify-center mt-8">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Descripción del gráfico */}
      <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
        Los datos curiosos son fragmentos de información relevantes pero difíciles de clasificar dentro de las categorías principales del proyecto. A través de esta sección, buscamos resaltar esas voces únicas que aportan una perspectiva diferente sobre la realidad rural.
      </p>

      {/* Cuadros Animados */}
      <div className="relative w-full max-w-2xl mx-auto mt-12 h-[300px] flex flex-wrap justify-center items-center">
        {curiosities.map((curiosity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: curiosity.x, y: curiosity.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className={`absolute w-40 h-auto p-4 rounded-md shadow-lg ${curiosity.color}`}
          >
            {curiosity.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
