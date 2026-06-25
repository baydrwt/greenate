import Section from "../ui/Section";
import Subheading from "../ui/subheading";
import TestimoniCard from "../ui/TestimoniCard";

const reviews = [
  {
    name: "Paula",
    product_name: "Coconut Palm Sugar",
    path: "/person-1.webp",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque excepturi, quia vel aperiam quos odit adipisci consectetur autem nihil cum!",
  },
  {
    name: "David",
    product_name: "Spinach Trottole",
    path: "/person-2.webp",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque excepturi, quia vel aperiam quos odit adipisci consectetur autem nihil cum!",
    active: true,
  },
  {
    name: "Diana",
    product_name: "Virgin Coconut Oil",
    path: "/person-3.webp",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque excepturi, quia vel aperiam quos odit adipisci consectetur autem nihil cum!",
  },
];

function Testimonials() {
  return (
    <Section>
      <div color="bg-white" className="mt-42">
        <Subheading>What they say</Subheading>
        <div className="flex flex-col md:flex-row justify-between mt-62 gap-40 md:gap-0">
          {reviews.map((review) => (
            <TestimoniCard key={review.name} name={review.name} product_name={review.product_name} path={review.path} message={review.message} active={review.active} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;
