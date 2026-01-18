import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Difference - Agence de création de sites web sur mesure",
  description:
    "Agence spécialisée dans la création de sites web uniques, modernes et optimisés pour le SEO. Attirez et retenez vos visiteurs avec Web Difference.",
  keywords: [
    "Next.js",
    "Développeur web",
    "Création site web",
    "React",
    "Web design",
  ],
  authors: [{ name: "Mahefa" }],
  creator: "Mahefa",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
