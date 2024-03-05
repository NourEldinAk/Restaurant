import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Notification from "@/components/Notification";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dishinary",
  description: "Restaurant with Quality Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="bg-secondary">
      <body className={`${inter.className} overflow-x-hidden`}>
        <AuthProvider>
        <Notification/>
        <Header/>
        {children}
      {/* <Footer/> */}
        </AuthProvider>
        </body>

    </html>
  );
}
