import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Intiweb",
  description: "Dedicados a crear páginas web informativas de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
