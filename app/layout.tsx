import type { Metadata } from "next";
import { Encode_Sans, Encode_Sans_Semi_Expanded } from "next/font/google";
import "./globals.css";

const defaultFont = Encode_Sans_Semi_Expanded({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramon Tavares",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
