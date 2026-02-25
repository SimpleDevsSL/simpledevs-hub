import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // <-- Importamos el provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimpleDevs | Hub",
  description: "Ecosistema de soluciones digitales y herramientas para creadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning es vital para que next-themes no lance error en consola
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-gray-900 transition-colors duration-300 dark:bg-[#000000] dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Iniciamos en oscuro al estilo JetBrains
          enableSystem
          disableTransitionOnChange={false} // Para que se vea suave el cambio
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}