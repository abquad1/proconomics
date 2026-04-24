import type { Metadata } from "next";
import localFont from "next/font/local"; 
import "./globals.css";
import Navbar from "./components/navbar";
import GoogleAnalytics from "./components/google-analytics";
import ToastProvider from "./components/toast-provider";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
   
  ],
  variable: "--font-satoshi", 
});

export const metadata: Metadata = {
  title: "Model Builder", 
  description: "Financial modeling and NPV analysis tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased`}>
      <GoogleAnalytics />
        <Navbar/>
        {children}
        <ToastProvider/>
      </body>
    </html>
  );
}