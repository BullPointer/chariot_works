import ProductsByFeature from "./ProductsByFeature";
import { DoubleCategoryCard, SingleCategoryCard } from "./CategoryCard";

const MainShop = () => {
  return (
    <div>
      <ProductsByFeature
        heading={"Featured Products"}
        feature={"Featured Product"}
        bgColor={"#fff"}
        viewMoreLink={"/shop/products/featured-products"}
      />
      <div className="py-2">
        <SingleCategoryCard category={"Bonds"} />
        <DoubleCategoryCard
          first={"1"}
          second={"2"}
          category={["General Paint", "P.O.P Fillas"]}
        />
      </div>
      <ProductsByFeature
        heading={"Hot Products"}
        feature={"Hot Product"}
        bgColor={"#ecedee"}
        viewMoreLink={"/shop/products/hot-products"}
      />
      <DoubleCategoryCard
        first={"2"}
        second={"1"}
        category={["Binding Wires", "Concrete Nails"]}
      />
      <ProductsByFeature
        heading={"New Arrivals"}
        feature={"New Product"}
        bgColor={"#f7edf0"}
        viewMoreLink={"/shop/products/new-products"}
      />
      <DoubleCategoryCard
        first={"1"}
        second={"2"}
        category={["Screeding Paint", "P.O.P Plaster"]}
      />
    </div>
  );
};

export default MainShop;
