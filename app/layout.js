import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { CartProvider } from "@/context/cartContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Heritage Threads",
  description: "Premium tradtional store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Toaster position="bottom-center" />
         
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
