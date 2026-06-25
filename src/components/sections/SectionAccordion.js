import Image from "next/image";
import Subheading from "../ui/subheading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DescriptionText from "../ui/DescriptionText";
import Section from "../ui/Section";

function SectionAccordion() {
  return (
    <Section color="bg-[#F0EADF]">
      <Subheading>
        Growing a <span className="block">Greener Future,</span> <span className="text-[2.5rem] md:text-[6.5rem]">One Meal at a Time</span>
      </Subheading>
      <DescriptionText>
        At Greenate, we believe that great food shouldn’t come at the cost of the planet. That’s why we are{" "}
        <span className="block"> committed to sourcing responsibly, reducing waste, and promoting sustainable farming. Every product we</span> offer is crafted with care—ensuring that what’s good for you is also good for nature.
      </DescriptionText>
      <div className="mt-20 flex flex-col md:flex-row gap-10 justify-between">
        <div className="bg-[url('/person-cover.png')] bg-cover bg-no-repeat w-full md:w-[650px] h-[400px] overflow-x-clip rounded-2xl relative bg-center">
          <Image
            src="/person.png"
            width="500"
            height="650"
            alt="person"
            className="absolute bottom-[-10%] right-[-5%] hidden md:scale-125 md:block"
            style={{
              clipPath: "inset(0 0 77px 0)",
            }}
          />
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible defaultValue="shipping" className="">
            <AccordionItem value="shipping">
              <AccordionTrigger>100% Organic & Non-GMO</AccordionTrigger>
              <AccordionContent>We partner with ethical farmers who grow food without harmful chemicals.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>Eco-Friendly Packaging</AccordionTrigger>
              <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, est?</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>Carbon-Neutral Practices</AccordionTrigger>
              <AccordionContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis cumque incidunt. Voluptas, iste doloremque.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

export default SectionAccordion;
