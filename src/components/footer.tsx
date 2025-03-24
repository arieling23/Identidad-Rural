import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Sección Izquierda - Identidad Rural */}
        <div className="text-left">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400">IDENTIDAD</span>{" "}
            <span className="text-yellow-400">RURAL</span>
          </div>
          <p className="mt-2 text-gray-400">Hecho con ❤️ en Ecuador</p>
          <p className="text-gray-400">Este sitio es de acceso libre y educativo</p>
        </div>

        {/* Sección Centro - Mapa del Sitio */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Mapa del Sitio</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="/equipo" className="hover:text-white">Equipo</a></li>
            <li><a href="/metodologia" className="hover:text-white">Metodología</a></li>
            <li><a href="/entrevistas" className="hover:text-white">Entrevistas</a></li>
            <li><a href="/difunde" className="hover:text-white">Difunde</a></li>
            <li><a href="/recursos" className="hover:text-white">Recursos</a></li>
          </ul>
        </div>

        {/* Sección Derecha - Redes Sociales */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Redes Sociales</h3>
          <div className="flex justify-start space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaXTwitter /></a>
            <a href="#" className="hover:text-black"><FaTiktok /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
