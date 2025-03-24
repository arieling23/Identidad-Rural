import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold flex items-center">
        <span className="text-yellow-400">IDEN</span>
        <span className="text-blue-600">TIDAD</span>
        <span className="text-red-500">RURAL</span>
      </div>
      <ul className="hidden md:flex gap-8">
        {[
          { name: "Inicio", path: "/" },
          { name: "Problemas", path: "/problemas" },
          { name: "Mensajes", path: "/mensajes" },
          { name: "Datos Curiosos", path: "/datos-curiosos" },
          { name: "Metodología", path: "/metodologia" },
          { name: "Entrevistas", path: "/entrevistas" },
          { name: "Difunde", path: "/difunde" },
          { name: "Equipo", path: "/equipo" },
          { name: "Recursos", path: "/recursos" },
        ].map((item) => (
          <li key={item.name}>
            <Link href={item.path} className="hover:text-blue-600 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
