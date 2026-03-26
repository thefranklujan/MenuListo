import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Corral Mexican Grill & Bar | Menú Digital",
  description: "Menú digital de El Corral Mexican Grill & Bar. Auténtica comida mexicana en Houston, TX. Ordena por WhatsApp o llámanos.",
};

export default function ElCorralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
