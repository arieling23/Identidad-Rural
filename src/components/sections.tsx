import { motion } from "framer-motion";

const sections = [
  {
    title: "Identidad Rural",
    textBefore: "Identidad Rural es una iniciativa del ",
    highlightedText: "CONAGOPARE",
    textAfter: " que amplifica las voces de las parroquias rurales del Ecuador, visibilizando sus realidades y desafíos desde la perspectiva de sus propios actores.",
    link: "https://www.conagopare.gob.ec/",
    image: "images/inicio/inicio2.jpeg",
  },
  {
    title: "Nuestro Objetivo",
    text: "Buscamos inspirar el compromiso y la acción conjunta entre diversos sectores de la sociedad para mejorar las condiciones de vida de la gente rural.",
    image: "images/inicio/inicio3.jpeg",
  },
  {
    title: "Datos Rurales",
    text: "La información se obtuvo de 182 entrevistas realizadas por WhatsApp a presidentes y presidentas de los gobiernos parroquiales de Ecuador. Con ayuda de inteligencia artificial, transcribimos sus respuestas y, usando Python, analizamos los datos para visibilizar sus desafíos y oportunidades.",
    image: "images/inicio/inicio4.jpeg",
  },
  {
    title: "¿Por qué lo hicimos?",
    text: "En Ecuador, 824 gobiernos parroquiales rurales luchan por el bienestar de sus comunidades con recursos limitados y grandes desafíos. Esta plataforma busca visibilizar sus realidades y conectar a más actores para cerrar las brechas con la ruralidad.",
    image: "images/inicio/inicio5.jpeg",
  },
  {
    title: "Acción Social",
    text: "Periodismo de datos y comunicación transmedia para la acción social",
    image: "images/inicio/inicio6.jpeg",
  },
];

export default function Sections() {
  return (
    <>
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Efecto Parallax en la imagen */}
          <motion.img
            src={section.image}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover brightness-50"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="relative z-10 max-w-3xl px-6">
            {/* Título Animado */}
            <motion.h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-wide"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
            >
              {section.title}
            </motion.h2>

            {/* Texto Animado */}
            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {section.textBefore && section.textBefore}
              {section.highlightedText && section.link && (
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-bold underline"
                >
                  {section.highlightedText}
                </a>
              )}
              {section.textAfter && section.textAfter}
              {!section.textBefore && !section.textAfter && section.text}
            </motion.p>
          </div>
        </motion.section>
      ))}
    </>
  );
}
