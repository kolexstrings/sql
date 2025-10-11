import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import "./globals.css";

const baskervville = Baskervville({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-baskervville",
});

export const metadata: Metadata = {
  title: "SqlEvents - Premier Event Management Company",
  description: "Marshalling the best in knowledge, human capital and technology to help our clients achieve their strategic goals through the provision of excellent, unique value-added services and products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baskervville.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
