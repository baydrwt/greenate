export default function CarouselDots({ count, current, onSelect }) {
  return (
    <div className="mt-4 flex justify-center gap-2 absolute bottom-[7%] left-1/2 -translate-x-1/2">
      {Array.from({ length: count }).map((_, index) => (
        <button key={index} onClick={() => onSelect(index)} className={`h-4 w-4 z-999 rounded-full transition-all duration-300 ${current === index ? "bg-[#D7E7B6]" : "bg-white"}`} />
      ))}
    </div>
  );
}
