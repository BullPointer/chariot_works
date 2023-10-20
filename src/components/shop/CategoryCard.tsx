/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { getCategoryCardApi } from "../../handleApi/productApi";
import { useEffect, useState } from "react";

type DoubleCategoryCardType = {
  first: string;
  second: string;
  category: string[];
};

type CategoryCardType = {
  category: string;
  productImage: string;
  request: unknown;
  _id: string;
};

export const DoubleCategoryCard = ({
  first,
  second,
  category,
}: DoubleCategoryCardType) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCategoryCardApi();

        const filteredData = data.data.filter(
          (e: CategoryCardType) =>
            e.category === category[0] || e.category === category[1]
        );
        setData(filteredData);
      } catch (error) {
        console.log("New Error: ", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="grid grid-cols-[35%_1fr_1fr] gap-10 py-5 px-7">
      {data.map((doc: CategoryCardType, index) => (
        <Link
          state={{ category: doc.category }}
          className={`[&:nth-child(2)]:col-span-2 h-[160px] w-full first:order-${first} [&:nth-child(3)]:order-${second}`}
          to={`/shop/category/${category[index]
            .split(" ")
            .join("-")
            .split(".")
            .join("")
            .toLowerCase()}`}
          key={index}
        >
          <img
            className="w-[100%] h-[100%] object-cover rounded-sm"
            src={`http://localhost:3000/${doc.productImage}`}
            alt="Product Image"
          />
        </Link>
      ))}
    </div>
  );
};

export const SingleCategoryCard = (cat: { category: string }) => {
  const [data, setData] = useState({} as CategoryCardType);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCategoryCardApi();

        const newData = data.data.find(
          (e: CategoryCardType) => e.category === cat.category
        );
        setData(newData);
      } catch (error) {
        console.log("New Error: ", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {Object.keys(data).length > 0 && (
        <Link
          state={{ category: data.category }}
          to={`/shop/category/${cat.category
            .split(" ")
            .join("-")
            .split(".")
            .join("")
            .toLowerCase()}`}
        >
          <div className="h-[180px] w-full p-y px-7">
            <img
              className="w-[100%] h-[100%] object-cover rounded-sm"
              src={`http://localhost:3000/${data.productImage}`}
              alt="Product Image"
            />
          </div>
        </Link>
      )}
    </>
  );
};
