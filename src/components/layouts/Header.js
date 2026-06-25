import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="min-w-screen flex items-center justify-center py-10 bg-[#F0EADF]">
      <Link href="/" className="flex items-center gap-2 z-10">
        <Image src="/logo.png" height="40" width="40" alt="Logo Greenate" />
        <span className="text-4xl font-light text-primary-100 text-[#133630] font-baloo">Greenate</span>
      </Link>
    </header>
  );
};

export default Header;
