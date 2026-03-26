import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MenuListo | Tu Menú Digital",
  description: "Menús digitales con código QR para restaurantes. Profesional, rápido, y accesible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-surface-DEFAULT text-stone-900 antialiased">{children}</body>
    </html>
  );
}
