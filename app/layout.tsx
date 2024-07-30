import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { Footer, Header, Me } from "@/components/ui";
import "./globals.css";
import "nes.css/css/nes.min.css";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jefferson Brandão | 8bits",
  description: "Meu portifolio em 8bits",
  authors: {
    name: "Jefferson Brandão",
    url: new URL("https://8bits.jeffersonbrandao.com.br"),
  },
  openGraph: {
    type: "website",
    title: "Jefferson Brandão | 8bits",
    description:
      "Meu portifolio em 8bits",
      url: new URL("https://8bits.jeffersonbrandao.com.br"),
    images: [
      {
        url: "https://8bits.jeffersonbrandao.com.br/jeje-banner.jpeg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={pressStart2P.className}>
        <Header />
        {children}
        <Me />
        <Footer />
      </body>
    </html>
  );
}
