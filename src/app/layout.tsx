import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NoteState from "@/context/NoteState";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List App - Made using NextJS and TypeScript",
  description: "Basic Todo List App made using NextJS and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoteState>{children}</NoteState>
      </body>
    </html>
  );
}
