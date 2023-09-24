import ProductsByFeature from "./ProductsByFeature";

const MainShop = () => {
  return (
    <div>
      <ProductsByFeature
        heading={"Featured Products"}
        feature={"Featured Product"}
        bgColor={"#fff"}
        viewMoreLink={"/shop/products/featured-products"}
      />
      <ProductsByFeature
        heading={"Hot Products"}
        feature={"Hot Product"}
        bgColor={"#ecedee"}
        viewMoreLink={"/shop/products/hot-products"}
      />
      <ProductsByFeature
        heading={"New Arrivals"}
        feature={"New Product"}
        bgColor={"#f7edf0"}
        viewMoreLink={"/shop/products/new-products"}
      />
    </div>
  );
};

export default MainShop;
