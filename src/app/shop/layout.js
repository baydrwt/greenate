import Header from "@/components/layouts/shop/Header";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/layouts/shop/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Shop Greenate",
  description: "Slicing Greenate",
};

function layout({ children }) {
  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen pb-24">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </main>
  );
}

export default layout;
