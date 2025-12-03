import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  weight: ['400', '500', '700', '800'],
});

export const metadata: Metadata = {
  title: "Projettar Fachadas | Visibilidade e Vendas",
  description: "Especialistas em Fachadas de ACM e Letreiros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${manrope.className} bg-projettar-light text-projettar-black antialiased`}>
        {children}
      </body>
    </html>
  );
}