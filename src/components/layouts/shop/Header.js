import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex py-5 px-8 md:justify-center">
      <div className="flex py-5 gap-2 border-b border-b-[#E4E4E4]">
        <Link href="/" className="flex justify-between items-center gap-2 z-10">
          <Image src="/logo.png" height="30" width="30" alt="Logo Greenate" />
        </Link>
        <form action="" className="flex items-center justify-end">
          <input type="text" placeholder="Search" className="bg-white border px-3 py-2 rounded-lg w-[98%]" />
        </form>
        <Image src="/cart.png" height="30" width="30" alt="Logo Greenate" className="object-contain" />
        <Image src="/hamburger-menu.png" height="30" width="30" alt="Logo Greenate" className="object-contain" />
      </div>
    </header>
  );
}

export default Header;
