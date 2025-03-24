"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import { motion } from "framer-motion";

// Definir estructura de datos para las palabras
interface WordData {
  text: string;
  size: number;
  x?: number;
  y?: number;
  rotate?: number;
}

const words: WordData[] = [
  { text: "ciudad", size: 50 },
  { text: "experiencia", size: 45 },
  { text: "paseo", size: 40 },
  { text: "recomendable", size: 38 },
  { text: "bien", size: 35 },
  { text: "visita", size: 32 },
  { text: "excelente", size: 30 },
  { text: "guía", size: 28 },
  { text: "historia", size: 26 },
  { text: "disfrutar", size: 24 },
];

export default function WordCloud() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;

    const layout = cloud<WordData>()
      .size([width, height])
      .words(words)
      .padding(5)
      .rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .font("sans-serif")
      .fontSize((d) => d.size)
      .on("end", (generatedWords: WordData[]) => {
        svg
          .attr("viewBox", `0 0 ${width} ${height}`)
          .selectAll("g")
          .data([null])
          .join("g")
          .attr("transform", `translate(${width / 2},${height / 2})`)
          .selectAll("text")
          .data(generatedWords)
          .join("text")
          .style("font-size", (d) => `${d.size}px`)
          .style("fill", () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
          .attr("text-anchor", "middle")
          .attr("transform", (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
          .text((d) => d.text);
      });

    layout.start();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Nube de Palabras</h2>
      <svg ref={svgRef} className="w-full h-[300px]" />
    </motion.div>
  );
}
