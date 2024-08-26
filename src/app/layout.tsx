import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FluentV9Registry } from './FluentV9Registry';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <FluentV9Registry>{children}</FluentV9Registry>
      </body>
    </html>
  );
}