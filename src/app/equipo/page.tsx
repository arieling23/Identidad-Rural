"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

// Definir la interfaz para los miembros del equipo
interface TeamMember {
  name: string;
  role: string;
  image: string;
  order: string;
}

const teamMembers: TeamMember[] = [
  { name: "Coordinador General", role: "Lidera estrategias y proyectos comunitarios.", image: "/images/team1.png", order: "order-1" },
  { name: "Analista de Datos", role: "Transforma información en visualizaciones interactivas.", image: "/images/team2.png", order: "order-3" },
  { name: "Diseñador Gráfico", role: "Crea material visual y comunicacional.", image: "/images/team3.png", order: "order-2" },
  { name: "Investigador", role: "Especialista en recopilación y análisis de datos.", image: "/images/team4.png", order: "order-4" },
];

export default function Equipo() {
  // Definir el estado con su tipo explícito
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-gray-100 text-gray-900 py-30 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Tarjetas del Equipo - Alineación en 2 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-300 ${member.order}`}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 mt-2">{member.role}</p>
              <div className="flex gap-6 mt-8 text-gray-500">
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                <FaXTwitter className="hover:text-black cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto "Nuestro Equipo" - Se oculta cuando se pasa el cursor sobre una tarjeta */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: hoveredMember ? 0 : 1, x: hoveredMember ? 20 : 0 }}
          transition={{ duration: 0.5 }}
          className="md:ml-12 max-w-lg text-left"
        >
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600">
            En <span className="text-blue-600 font-bold">CONAGOPARE</span>, estamos comprometidos con visibilizar las realidades rurales 
            y promover el desarrollo de sus comunidades. A través de la investigación, el periodismo de datos y la comunicación transmedia, 
            trabajamos para dar voz a quienes más lo necesitan y generar un impacto positivo y sostenible.
          </p>
        </motion.div>

        {/* Información de la tarjeta seleccionada */}
        {hoveredMember && (
          <motion.div
            key={hoveredMember.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:ml-12 max-w-lg text-left bg-white p-6 rounded-xl shadow-lg border border-gray-300"
          >
            <h2 className="text-2xl font-bold mb-2">{hoveredMember.name}</h2>
            <p className="text-gray-600">{hoveredMember.role}</p>
          </motion.div>
        )}
      </div>

      {/* Sección de Apoyos */}
      <div className="container mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Apoyos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nuestro trabajo no sería posible sin el apoyo de organizaciones y personas comprometidas con el desarrollo rural. 
          Agradecemos a todos los que contribuyen con su tiempo, conocimientos y recursos para hacer de esta iniciativa una realidad.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <img src="/images/apoyo1.png" alt="Apoyo 1" className="h-16" />
          <img src="/images/apoyo2.png" alt="Apoyo 2" className="h-16" />
          <img src="/images/apoyo3.png" alt="Apoyo 3" className="h-16" />
          <img src="/images/apoyo4.png" alt="Apoyo 4" className="h-16" />
        </div>
      </div>
    </div>
  );
}
