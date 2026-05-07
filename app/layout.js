import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { CartProvider } from "@/context/cartContext";
import { Toaster } from "react-hot-toast";
import AdminNav from "@/sections/admin/navbar/AdminNav";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar/Navbar";
// import { usePathname } from "next/navigation";


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
//  const pathname = usePathname()
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Toaster position="bottom-center" />
         {/* <AnnouncementBar/> */}
         
          {children}
          {/* <Footer/> */}
        </CartProvider>
      </body>
    </html>
  );
}
