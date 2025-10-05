import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ألفا  أوإمكيو - Alpha OMQ",
  description: "الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة",
  keywords: "غوص تجاري, دعم بحري, بنية تحتية بحرية, المملكة العربية السعودية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
