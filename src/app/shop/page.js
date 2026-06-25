import Banner from "@/components/ui/Banner";
import Category from "@/components/ui/Category";

import PaginationShop from "@/components/ui/PaginationShop";
import PriceRange from "@/components/ui/PriceRange";
import ProductCardShop from "@/components/ui/ProductCardShop";
import Section from "@/components/ui/Section";

const categories = [
  {
    name: "All Products",
    path: "/icon-park-outline_vegetable-basket.png",
    active: true,
  },
  {
    name: "Fruits",
    path: "/grapes.png",
    active: false,
  },
  {
    name: "Vegetables",
    path: "/Coffee.png",
    active: false,
  },
];

function page() {
  return (
    <>
      <Section>
        <div className="flex overflow-scroll gap-5">
          {categories.map((category) => (
            <Category key={category.name} name={category.name} path={category.path} active={category.active} />
          ))}
        </div>
      </Section>
      <Section>
        <PriceRange />
      </Section>
      <Section>
        <Banner />
      </Section>
      <Section>
        <div className="grid grid-cols-2 gap-3">
          <ProductCardShop />
          <ProductCardShop />
          <ProductCardShop />
          <ProductCardShop />
        </div>
      </Section>
      <Section>
        <PaginationShop />
      </Section>
    </>
  );
}

export default page;
