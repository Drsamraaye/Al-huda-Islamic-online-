import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/BookingModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alhuda Islamic Qur’an Online | Excellence in Sacred Knowledge",
  description: "Traditional learning meets modern excellence. Join Alhuda for personalized one-on-one Qur'an and Islamic studies with certified scholars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
        <WhatsAppFloating />
      </body>
    </html>
  );
}
