import Image from "next/image";

function TestimoniCard({ name, product_name, path, message, active }) {
  return (
    <div className={`bg-[#D7E7B6] w-[300px] md:w-[500px] h-fit flex flex-col items-center relative rounded-2xl p-10 md:p-20 text-center ${active && `md:mt-[-100px]`}`}>
      <Image src={`${path}`} width="200" height="200" alt="orang" className="absolute top-[-30%] w-[200px] h-[200px] rounded-3xl object-cover object-center" />
      <p className="mt-10 md:mt-0 text-[2.5rem] font-bold">{name}</p>
      <p>{product_name}</p>
      <Image src="/stars.png" width="300" height="300" alt="bintang" className="mt-10" />
      <p className="mt-5">{message}</p>
    </div>
  );
}

export default TestimoniCard;
