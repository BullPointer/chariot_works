/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { advertisementsApi } from "../../handleApi/brandApi";
import { Link } from "react-router-dom";

type AdvertisementCarouselType = {
  _id: string;
  category?: string;
  link?: string;
  internal?: string;
  external?: string;
  productImage: string;
  type: string;
};

const AdvertisementCarousel = () => {
  const [hovered, setHovered] = useState(false);
  const [data, setData] = useState([] as AdvertisementCarouselType[]);
  const [count, setCount] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const preArrow = () => {
    setImgIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
    setCount((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
  };

  const nextArrow = () => {
    const imageLength = data.length;
    const num = count % imageLength;

    setImgIndex(Math.ceil(num));
    setCount(count + 1);
    // slideImage();
  };

  const slideImage = () => {
    const imageLength = data.length;
    const num = count % imageLength;

    setImgIndex(Math.ceil(num));
    setCount(count + 1);
    if (
      data[data.length - 1] !== data[imgIndex] &&
      imgIndex >= data.length - 2
    ) {
      setData([...data, data[imgIndex]]);
    }
  };

  useEffect(() => {
    let interval: number;

    if (!hovered) interval = setInterval(slideImage, 5000);

    return () => clearInterval(interval);
  }, [count, hovered]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await advertisementsApi();
        setData(data.data);
      } catch (error) {
        console.log("New Error ", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full px-4 lg:px-36 pt-10">
      <div
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex max-w-[1400px] w-full h-[300px] overflow-hidden m-auto relative group"
      >
        {data?.map((docs, index) => (
          <div className="w-full min-w-[100%]" key={index}>
            {/* <div>{}</div> */}
            {docs?.type === "internal" && docs.category !== undefined ? (
              <Link
                state={{ category: docs.category }}
                to={`/shop/category/${docs?.category
                  .split(" ")
                  .join("-")
                  .split(".")
                  .join("")
                  .toLowerCase()}`}
              >
                <img
                  src={`http://localhost:3000/${docs?.productImage}`}
                  style={{
                    transform: `translateX(-${imgIndex * 100}%)`,
                  }}
                  className={`min-w-[100%] w-full h-[100%] object-center object-cover
            rounded duration-500 transition-transform ease-in-out`}
                />
              </Link>
            ) : (
              <a
                href={`https://${docs?.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`http://localhost:3000/${docs?.productImage}`}
                  style={{
                    transform: `translateX(-${imgIndex * 100}%)`,
                  }}
                  className={`min-w-[100%] w-full h-[100%] object-center object-cover
            rounded duration-500 transition-transform ease-in-out`}
                />
              </a>
            )}
          </div>
        ))}
        <div
          onClick={preArrow}
          className="absolute hidden group-hover:block cursor-pointer left-[10%] top-[50%] p-2 rounded-full border bg-[#fff;]"
        >
          <Icon className="text-xl" icon="mdi:keyboard-arrow-left" />
        </div>

        <div
          onClick={nextArrow}
          className={`absolute hidden ${
            imgIndex < data.length - 2
              ? "group-hover:block"
              : "group-hover:hidden"
          } cursor-pointer right-[10%] top-[50%] p-2 rounded-full border bg-[#fff;]`}
        >
          <Icon className="text-xl" icon="mdi:keyboard-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCarousel;
