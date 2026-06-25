import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "Greenate",
  description: "Slicing Greenate",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
