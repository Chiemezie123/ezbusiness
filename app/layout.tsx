import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/hooks/themeContext";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-inter', 
});

export const metadata: Metadata = {
  title: "EZ business",
  description: "ez frontend test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
