import type { Metadata } from "next";
import { Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
import BackgroundLines from "@/components/bg";
import { PostHogProvider } from "@/components/PostHogProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Solcoa Industries",
  description: "Green, American Rare Earths",
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
      <body className={`${manrope.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>
          <BackgroundLines className="fixed inset-0 px-8 md:px-16" />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}