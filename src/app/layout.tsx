import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartProvider from "@/components/cart/CartProvider";
import ToastProvider from "@/components/toast/ToastProvider";
import ThemeProvider from "@/components/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OleMart",
    template: "%s | OleMart",
  },
  description: "Browse products and discover deals at OleMart.",
};

/**
 * Defines the shared page layout and application providers.
 * Hydration warnings are suppressed only on html because the theme
 * provider updates its class and colour scheme before hydration.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider>
          <ToastProvider>
            <CartProvider persist>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
