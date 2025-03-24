"use client"; //
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Sections from "@/components/sections";
const Hero = dynamic(() => import("@/components/hero"), { ssr: false }); // 🚨 Desactiva SSR para evitar errores

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sections/>
     
    </div>
  );
}
