import Image from "next/image";
import { Button } from "./button";

function ProductCard({ path, product_name, product_desc }) {
  return (
    <div className="md:w-1/3 rounded-[30px] bg-[#D7E7B6] h-full overflow-hidden flex justify-center items-center flex-col pb-10">
      <div className="bg-white w-full relative flex justify-center p-20 rounded-[30px] overflow-hidden">
        <Image src={`${path}`} width="250" height="250" alt="title" />
        <div className="absolute bottom-0 right-0 bg-[#67874E] pt-4 pb-2 px-6 rounded-tl-[30px] text-center">
          <p className="text-white font-bold text-[1.5rem] md:text-[2.7rem] mb-0 leading-7">
            100% <span className="block font-extralight text-[1rem]">Organic</span>
          </p>
        </div>
      </div>
      <h3 className="text-[1.4rem] md:text-[2.4rem] font-bold mt-5">{product_name}</h3>
      <p className="text-xl mt-3 text-center">{product_desc}</p>
      <div className="flex flex-col md:flex-row md:gap-5">
        <Button variant="cart">Add to Cart</Button>
        <Button variant="buy_now">buy now</Button>
      </div>
    </div>
  );
}

export default ProductCard;
