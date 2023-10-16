import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Providers attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
