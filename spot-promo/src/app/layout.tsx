import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SPOT — La réalité d'hier dans le monde d'aujourd'hui",
  description: "SPOT est une application gratuite qui valorise le patrimoine historique, culturel et océanique de chaque territoire. Découvrez les lieux emblématiques de manière ludique.",
  keywords: ["patrimoine", "découverte", "histoire", "culture", "gamification", "application mobile"],
  authors: [{ name: "Équipe SPOT" }],
  openGraph: {
    title: "SPOT — La réalité d'hier dans le monde d'aujourd'hui",
    description: "Découvrez le patrimoine de manière ludique avec SPOT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
