import ProductCard from "../ui/ProductCard";
import Section from "../ui/Section";
import Subheading from "../ui/subheading";

const products = [
  {
    product_name: "Coconut Palm Sugar",
    product_desc: "Low glycemic, healthy sugar 680gr",
    path: "/coconut_palm_sugar.webp",
  },
  {
    product_name: "Virgin Coconut Oil",
    product_desc: "Organic cold-pressed virgin coconut oil 473ml",
    path: "/virgin_coconut_oil.webp",
  },
  {
    product_name: "Spinach Trottole",
    product_desc: "Organic spinach trottole pasta 500gr",
    path: "/spinach_trottole.webp",
  },
];

function Product() {
  return (
    <Section color="bg-[#F0EADF]">
      <Subheading>PRODUCT HIGHLIGHT</Subheading>
      <div className="flex flex-col md:flex-row gap-10">
        {products.map((product) => (
          <ProductCard key={product.product_name} product_name={product.product_name} product_desc={product.product_desc} path={product.path} />
        ))}
      </div>
    </Section>
  );
}

export default Product;
