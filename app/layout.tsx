import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plant Disease Detection System",
  description: "AI-powered plant disease detection using deep learning",
  authors: [
    { name: "Aashish Kumar Mahato" },
    { name: "Ayush Yadav" },
    { name: "Bibek Gami" }
  ],
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
