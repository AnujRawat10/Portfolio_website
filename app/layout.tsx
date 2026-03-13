import type { Metadata } from "next";
import { Roboto_Mono, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anuj Rawat — Creative Developer & Designer",
  description: "I design and build digital experiences that convert. Portfolio showcasing web development, UI/UX design, and creative development work.",
  openGraph: {
    title: "Anuj Rawat — Creative Developer & Designer",
    description: "I design and build digital experiences that convert.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Rawat",
    description: "Creative Developer & Designer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${manrope.variable} antialiased noise`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
