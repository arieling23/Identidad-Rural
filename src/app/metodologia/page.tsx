"use client";
import { motion } from "framer-motion";

const preguntas = [
  { id: 1, text: "¿Cuáles son los 10 principales problemas de su parroquia?" },
  { id: 2, text: "¿Por qué su parroquia es importante para sus habitantes?" },
  { id: 3, text: "¿Qué mensaje desea transmitir al Ecuador?" },
];

export default function Metodologia() {
  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-6">
      {/* Título Principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-4"
      >
        Metodología de Recolección y Análisis
      </motion.h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        En esta sección se detalla el proceso de recolección, análisis y presentación de los datos que forman parte de este proyecto, cuyo objetivo es visibilizar las problemáticas y perspectivas de las parroquias rurales del Ecuador.
      </p>

      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Sección de texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-2/3"
        >
          <h3 className="text-2xl font-bold mb-4">Proceso de Recolección de Datos</h3>
          <p className="text-gray-600 leading-relaxed">
            La recopilación de información se llevó a cabo a través de entrevistas dirigidas a los representantes de los Gobiernos Autónomos Descentralizados Parroquiales (GAD). A cada representante se le solicitó responder tres preguntas clave:
          </p>
          <p className="text-gray-600 mt-4">
            Las respuestas fueron entregadas en su mayoría en formato de video, grabados por los mismos representantes y enviados a CONAGOPARE. En algunos casos, las respuestas fueron entregadas por escrito. En total, se recibieron aproximadamente <span className="font-bold text-blue-600">160 videos</span> con información valiosa sobre las realidades de cada parroquia.
          </p>
        </motion.div>

        {/* Sección de Preguntas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3 mt-8 md:mt-0 md:ml-12 space-y-6"
        >
          {preguntas.map((pregunta, index) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-green-200 p-4 rounded-lg shadow-md text-gray-900"
            >
              <h4 className="font-bold text-lg">Pregunta {pregunta.id}</h4>
              <p className="mt-2">{pregunta.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sección de Análisis y Procesamiento */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-3xl font-bold mb-4">
          Análisis y Procesamiento de la Información
        </h2>
        <p className="text-gray-600">
          Para procesar los videos de manera eficiente, un software de transcripción automática convirtió el contenido audiovisual en texto. Luego, se tabularon y analizaron los datos para identificar los problemas más frecuentes por parroquia, provincia y región, clasificando los mensajes dirigidos al Ecuador.
        </p>
      </motion.div>

      {/* Sección de Resultados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 bg-gray-200 py-12"
      >
        <h3 className="text-center text-2xl font-bold mb-8">
          Resultados Obtenidos
        </h3>

        <div className="container mx-auto flex flex-wrap justify-center gap-12 text-center">
          {/* Métricas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-48"
          >
            <h4 className="text-3xl font-bold">1500 +</h4>
            <p className="text-gray-600">Problemas Identificados</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-48"
          >
            <h4 className="text-3xl font-bold">140 +</h4>
            <p className="text-gray-600">Mensajes al Ecuador</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-48"
          >
            <h4 className="text-3xl font-bold">15 +</h4>
            <p className="text-gray-600">Datos Curiosos</p>
          </motion.div>
        </div>

        {/* Análisis de emociones */}
        <div className="mt-12 flex flex-wrap justify-center gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-48"
          >
            <p className="text-5xl">😊</p>
            <h4 className="text-2xl font-bold">20%</h4>
            <p className="text-gray-600">Positivos</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-48"
          >
            <p className="text-5xl">😐</p>
            <h4 className="text-2xl font-bold">54%</h4>
            <p className="text-gray-600">Neutros</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-48"
          >
            <p className="text-5xl">☹️</p>
            <h4 className="text-2xl font-bold">26%</h4>
            <p className="text-gray-600">Negativos</p>
          </motion.div>
        </div>

        <p className="text-center text-gray-600 mt-6">Análisis de Emociones</p>
      </motion.div>
    </div>
  );
}
