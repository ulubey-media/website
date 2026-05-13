import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Cinzel } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Ulubey Media — Dijital Pazarlama Ajansı",
  description:
    "SEO, sosyal medya yönetimi, META & Google reklamcılığı ve web tasarımı hizmetleri. Markanızı dijitalde büyütüyoruz.",
  keywords: "dijital pazarlama, sosyal medya yönetimi, SEO, Google Ads, Meta Ads, web tasarım",
  openGraph: {
    title: "Ulubey Media — Dijital Pazarlama Ajansı",
    description: "SEO, sosyal medya yönetimi, reklam ve web tasarımı — hepsi tek çatı altında.",
    url: "https://ulubeymedia.com",
    siteName: "Ulubey Media",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${jakarta.variable} ${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-dark">{children}</body>
    </html>
  );
}
