import type { Metadata } from "next";
import {
  Manrope,
  DM_Mono,
  Shadows_Into_Light,
  Bebas_Neue,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";
import BackgroundLines from "@/components/bg";
import { PostHogProvider } from "@/components/PostHogProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Solcoa Industries",
  description: "Solcoa Industries is helping reclaim Western industrial independence by producing the first carbon-zero, American-made rare earth metals at scale.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${geistMono.variable} ${shadowsIntoLight.variable} ${bebasNeue.variable} ${ebGaramond.variable} antialiased`}
      >
        <PostHogProvider>
          <BackgroundLines className="fixed inset-0 px-8 md:px-16" />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
