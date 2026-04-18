import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/shared/AnnouncementBar";
import TopNav from "@/components/shared/Navbar/TopNav";

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
        <AnnouncementBar />
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
