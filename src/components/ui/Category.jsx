import Image from "next/image";

function Category({ path, name, active }) {
  return (
    <div className={`flex gap-3 items-center border ${active ? 'border-[Green] ' : 'border-grey'} px-5 py-3 min-w-fit rounded-lg`}>
      <Image src={`${path}`} width="30" height="30" alt="all" />
      <p className="font-bold whitespace-nowrap">{name}</p>
    </div>
  );
}

export default Category;
