import Image from "next/image";

function ProductCardShop() {
  return (
    <div className="rounded-4xl p-3 border border-gray overflow-hidden">
      <div className="relative text-center grid justify-center">
        <p className="absolute text-[12px] font-bold bg-[#D7E7B6] max-w-fit py-2 px-3 text-center rounded-2xl leading-4">
          Farm to <span className="block">Table</span>{" "}
        </p>
        <Image src="/coconut_palm_sugar.png" width="150" height="150" alt="title" className="object-cover mt-14" />
        <div className="absolute bottom-0 right-[-11%] bg-[#67874E] md:pt-3 px-4 p-2 md:px-8 rounded-tl-[30px] text-center">
          <p className="text-white font-bold text-[1rem] md:text-[1.7rem] mb-0 leading-4 md:leading-5">
            100% <span className="block font-extralight text-[0.8rem]">Organic</span>
          </p>
        </div>
      </div>
      <div className="flex items-center mt-3">
        <Image src="/Star.png" width="30" height="30" alt="title" />
        <span className="text-[#595959] text-lg font-semibold">4.8</span>
      </div>
      <p className="text-bold text-lg ms-2 truncate font-bold">Red Tomato</p>
      <p className="text-sm ms-2 truncate text-[#595959]">Freshly picked tomatoes</p>
      <div className="ms-2 mt-5 flex justify-between items-end">
        <span className="font-bold text-2xl">
          $2<span className="text-lg text-[#595959]">.99</span>
        </span>
        <Image src="/BAG.png" width="45" height="30" className=" object-contain bg-[orange] px-3 py-2 rounded-lg" alt="bag"/>
      </div>
    </div>
  );
}

export default ProductCardShop;
