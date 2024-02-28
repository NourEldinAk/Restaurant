import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "@/components/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dishinary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="bg-secondary">
 <body className={`${inter.className} overflow-x-hidden`}>
        <Notification/>
        <Header/>
        {children}
      {/* <Footer/> */}
        </body>
    </html>
  );
}
