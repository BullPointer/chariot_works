import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getBrands } from "../../handleApi/brandApi";
import { Link } from "react-router-dom";

type BrandsType = {
  _id: string;
  productImage: unknown;
  brand: string;
};

const BrandCarousel = () => {
  const [brands, setBrands] = useState([] as BrandsType[]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getBrands();
        setBrands(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mb-10 px-8 py-5">
      <div className="w-fit border-b-4 text-[18px] font-[600] border-b-[#5448be] pb-3">
        BRANDS
      </div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="w-full h-[200px]"
      >
        {brands?.map(({ productImage, brand, _id }: BrandsType, index) => (
          <div key={index} className="w-full h-[100%] opacity-90">
            <Link
              to={`brands/${String(
                brand.split(" ").join("-").split(".").join("").toLowerCase()
              )}`}
              state={{ brand: brand, id: _id }}
            >
              <img
                src={`http://localhost:3000/${productImage}`}
                className="w-full h-[100%] object-contain"
                alt=""
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
