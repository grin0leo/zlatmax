import '@/styles/index.scss';

import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: "zlatmax",
    description: "Проект 1",
};

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${montserrat.variable}`}>
            <body className="wrapper">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
