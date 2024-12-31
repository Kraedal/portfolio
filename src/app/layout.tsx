import type { Metadata } from "next";
import { Raleway, Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacob Ong Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${cabin.variable}`} >
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
