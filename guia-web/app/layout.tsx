import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🎮 Guía de Roblox Studio para Sebas",
  description: "Aprende a crear juegos en Roblox Studio paso a paso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
