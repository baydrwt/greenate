import Image from "next/image";

function Banner() {
  return <div className="w-full my-10 rounded-lg py-10 px-4 h-full bg-[#F0EADF] relative overflow-hidden">
    <p className="text-xl font-bold">All Products</p>
    <Image src="/vegetables.png" width="300" height="300" alt="vegetables" className="absolute object-contain right-[-50%] top-[-70%]" />
  </div>;
}

export default Banner;
