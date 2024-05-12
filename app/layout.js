import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/app/components/Footer/Footer";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brand",
  description: "Generated by create next app",
};



export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <main className="relative">
          <div className="sticky top-0 z-[20]">
            <Navbar />
          </div>
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
