import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { moreList, navData } from "./navData";
import { useState } from "react";

export type SmallNavbarProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = ({ setShow }: SmallNavbarProps) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {navData.map((item, index) => (
        <div
          key={index}
          className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] first:pt-10 px-6 text-[22px] font-[510] cursor-pointer"
        >
          <div className="flex flex-row justify-start items-center gap-2">
            <NavLink onClick={() => setShow(false)} to={item.link}>
              {item.text}
            </NavLink>
            {isOpen === index && item.list ? (
              <Icon onClick={() => setIsOpen(null)} icon="fe:minus" />
            ) : item.list ? (
              <Icon onClick={() => setIsOpen(index)} icon="fe:plus" />
            ) : (
              ""
            )}
          </div>
          {isOpen === index && (
            <ul className="">
              {item.list?.map(({ text, link }, index) => (
                <Link onClick={() => setShow(false)} to={link}>
                  <li className="border-b pl-5" key={index}>
                    {text}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="text-[#21471c] cursor-pointer hover:text-[#333232] hover:border-b-2 border-[#333232] px-6">
        <Icon
          onClick={() => setShowMore(!showMore)}
          icon="pepicons-pop:dots-x"
        />
        {showMore && (
          <ul className="">
            {moreList?.map(({ text, link }, index) => (
              <Link key={index} onClick={() => setShow(false)} to={link}>
                <li className="border-b pl-5 text-lg">
                  {text.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="text-[#21471c] cursor-pointer px-6">
        <Icon icon="teenyicons:search-outline" fontSize={20} />
      </div>
    </>
  );
};

export default List;
