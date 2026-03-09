import type { Metadata } from "next";
import { Roboto_Mono, Manrope } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anuj Rawat",
  description: 'Portfolio — Creative Developer & Designer',
  openGraph: {
    title: "Anuj Rawat",
    description: 'Creative Developer & Designer',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Rawat",
    description: 'Creative Developer & Designer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
