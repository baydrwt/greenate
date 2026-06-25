import Image from "next/image";
import { Button } from "../ui/button";
import DescriptionText from "../ui/DescriptionText";
import Section from "../ui/Section";
import Subheading from "../ui/subheading";

function Join() {
  return (
    <Section className="items-center relative overflow-auto" color="bg-[#F0EADF]">
      <Subheading>Join the movement</Subheading>
      <DescriptionText>
        By choosing Greenate, you’re not just nourishing your body—you’re taking a stand for a <span className="block">healthier planet. Let’s make sustainable eating the new standard, together.</span>
      </DescriptionText>
      <Button variant="secondary">Learn More</Button>
      <Image src="/Ellipse 2.png" width="1000" height="1000" alt="eclipse" className="absolute left-0 w-full z-[-10] mt-[400px] md:mt-[-285px]" />
    </Section>
  );
}

export default Join;
