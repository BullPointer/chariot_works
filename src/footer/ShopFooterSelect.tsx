import { Link } from "react-router-dom";
import { categories } from "../navbar/ShopNavDummyData";

const customerSupportData = [
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Terms & Conditions",
    link: "/term-and-condition",
  },
  {
    name: "Privacy policy",
    link: "/privacy-policy",
  },
  {
    name: "Help",
    link: "/contact-us",
  },
];
const FooterSelect = () => {
  return (
    <div className="bg-[#161531] py-5">
      <div className="grid grid-cols-3">
        {["Contact Info.", "Categories", "Customer Supports"].map(
          (list, index) => (
            <div
              key={index}
              className="text-[16px] font-semibold first:text-[20px] text-white px-10 py-2"
            >
              {list}
            </div>
          )
        )}
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-start items-start">
          {[
            "17 Unity Close, Unity Estate Iju-Ishaga.",
            "+234 9039736215",
            "chariotpopworks@gmail.com",
          ].map((list, index) => (
            <div
              key={index}
              className="w-full py-2 px-10 text-[14px] text-[#bbb9b9]"
            >
              {list}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start ">
          {categories?.map((list, index) => (
            <Link to={list.link}>
              <div
                key={index}
                className="w-full py-2 px-10 text-[14px] text-[#bbb9b9] hover:text-white"
              >
                {list.cat}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start ">
          {customerSupportData?.map((list, index) => (
            <Link to={list.link}>
              <div
                key={index}
                className="w-full py-2 px-10 text-[14px] text-[#bbb9b9] hover:text-white"
              >
                {list.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSelect;
