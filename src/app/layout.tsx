import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import "./globals.css";

const baskervville = Baskervville({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-baskervville",
});

export const metadata: Metadata = {
  title: "SQL Events Nigeria | Professional Event Management",
  description: "SQL Events Nigeria — passion, innovation and technology. We provide professional event management, conference registration, exhibition software, virtual event platforms, membership management, and lanyards supply across Nigeria and Africa.",
  keywords: "event management Nigeria, conference management Abuja, event software Nigeria, SQL Events Nigeria, registration software, virtual events Nigeria, membership management",
  authors: [{ name: "SQL Events Nigeria" }],
  creator: "SQL Events Nigeria",
  publisher: "SQL Events Nigeria",
  openGraph: {
    title: "SQL Events Nigeria | Professional Event Management",
    description: "Passion, Innovation and Technology — driving every event we manage across Nigeria and Africa.",
    url: "https://www.sqlevents.ng",
    siteName: "SQL Events Nigeria",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Events Nigeria | Professional Event Management",
    description: "Passion, Innovation and Technology — driving every event we manage across Nigeria and Africa.",
  },
  metadataBase: new URL("https://www.sqlevents.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baskervville.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}