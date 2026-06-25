"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CarouselDots from "./CaraouselDots";
import { Button } from "../ui/button";

export default function CustomCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <div className="bg-[url('/bg-hero.webp')] bg-no-repeat bg-cover md:h-[850px] rounded-[50px] bg-position-[50%_90%]">
              <div className="h-full w-full bg-linear-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] rounded-[50px] flex justify-end flex-col items-center py-28 px-3">
                <h1 className="relative text-[#F0EADF] text-[2rem] md:text-[5.5rem] uppercase md:w-1/2 text-center leading-none font-barrio z-10">
                  <span className="absolute top-[20%] left-[-2%] md:w-[360px] h-[50px] bg-[#67874E] rotate-[-1.6deg] z-[-1]"></span>
                  Nourish Your Body, Sustain the Earth.
                  <span className="absolute bottom-[3%] right-[-2%] md:w-[300px] h-[50px] bg-[#67874E] rotate-[-1.6deg] z-[-1]"></span>
                </h1>
                <p className="text-[#F0EADF] font-inter text-[1rem] md:text-[1.5rem] mt-3 font-extralight">Every bite you take supports a healthier you and a greener planet.</p>
                <Button>Learn more</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="bg-[url('/bg-hero.webp')] bg-no-repeat bg-cover md:h-[850px] rounded-[50px] bg-position-[50%_90%]">
              <div className="h-full w-full bg-linear-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] rounded-[50px] flex justify-end flex-col items-center py-28 px-3">
                <h1 className="relative text-[#F0EADF] text-[2rem] md:text-[5.5rem] uppercase md:w-1/2 text-center leading-none font-barrio z-10">
                  <span className="absolute top-[20%] left-[-2%] md:w-[360px] h-[50px] bg-[#67874E] rotate-[-1.6deg] z-[-1]"></span>
                  Nourish Your Body, Sustain the Earth.
                  <span className="absolute bottom-[3%] right-[-2%] md:w-[300px] h-[50px] bg-[#67874E] rotate-[-1.6deg] z-[-1]"></span>
                </h1>
                <p className="text-[#F0EADF] font-inter text-[1rem] md:text-[1.5rem] mt-3 font-extralight">Every bite you take supports a healthier you and a greener planet.</p>
                <Button>Learn more</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="bg-[url('/bg-hero.webp')] bg-no-repeat bg-cover md:h-[850px] rounded-[50px] bg-position-[50%_90%]">
              <div className="h-full w-full bg-linear-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] rounded-[50px] flex justify-end flex-col items-center py-28 px-3">
                <h1 className="relative text-[#F0EADF] text-[2rem] md:text-[5.5rem] uppercase md:w-1/2 text-center leading-none font-barrio z-10">
                  <span className="absolute top-[20%] left-[-2%] md:w-[360px] h-[50px] bg-[#67874E] rotate-[-1.6deg] z-[-1]"></span>
                  Nourish Your Body, Sustain the Earth.
                  <span className="absolute bottom-[3%] right-[-2%] md:w-[300px] h-[50px] bg-[#67874E] rotate-[-1.6deg] z-[-1]"></span>
                </h1>
                <p className="text-[#F0EADF] font-inter text-[1rem] md:text-[1.5rem] mt-3 font-extralight">Every bite you take supports a healthier you and a greener planet.</p>
                <Button>Learn more</Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots count={count} current={current} onSelect={(index) => api?.scrollTo(index)} />
      </Carousel>
    </>
  );
}
