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
      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col justify-start items-start">
          <div className="text-[20px] font-semibold text-white px-10 py-2">
            Contact Info.
          </div>
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
          <div className="text-[16px] font-semibold text-white px-10 py-2">
            Categories
          </div>
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
          <div className="text-[16px] font-semibold text-white px-10 py-2">
            Customer Supports
          </div>
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
