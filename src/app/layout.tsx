import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css"; // Corrección en la ruta
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Identidad Rural",
  description: "Visibilizando las parroquias rurales de Ecuador",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 📌 Navbar siempre presente */}
        <Navbar />
        
        {/* 📌 Contenido dinámico de cada página */}
        <main className="min-h-screen">{children}</main>

        {/* 📌 Footer siempre presente */}
        <Footer />
      </body>
    </html>
  );
}
