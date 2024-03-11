import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react"
import localFont  from "next/font/local";
import "./globals.css";
import { theme } from "./theme/extendedTheme";
import { Footer, Header } from "@/app/components/index"
import Head from "next/head";

const myFont = localFont({
  src: [
    {
      path: '../app/assets/fonts/light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/regular.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/semi_inter_bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../app/assets/fonts/big_bold.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: "Folti Technologies",
  description: "Home of Innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ChakraProvider resetCSS theme={theme.color}>
        <Header />
        {children}
        <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
