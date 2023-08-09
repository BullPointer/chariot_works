/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Images } from "./database/welcome";

const Welcome = () => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const prevBtn = () => {
    setCurrentImg((current) =>
      current === 0 ? Images.length - 1 : currentImg - 1
    );
  };
  const nextBtn = () => {
    setCurrentImg((current) =>
      current === Images.length - 1 ? 0 : currentImg + 1
    );
  };
  useEffect(() => {
    const interval = setTimeout(nextBtn, 4000);

    return () => clearTimeout(interval);
  }, [currentImg]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-row overflow-x-hidden transform">
        {Images?.map(({ img, text }, index) => (
          <div
            key={index}
            style={{ transform: `translateX(-${currentImg * 100}%)` }}
            className="relative transition-transform duration-500 min-w-full"
          >
            <img className="h-screen min-w-full object-cover" src={img} alt="" />
            <div className="absolute bg-[#9aa596] left-0 top-[50%] bg-transparent w-full p-4 flex flex-col justify-center items-center gap-2">
              <div className=" p-2 text-xl sm:text-4xl font-medium text-white">
                {text.toUpperCase()}
              </div>
              <div className="bg-green-400 hover:bg-green-800 px-4 py-1 sm:py-2 cursor-pointer rounded-full text-white font-bold">
                Learn More
              </div>
            </div>
          </div>
        ))}
        <div className="w-full flex flex-row justify-center items-center gap-4 p-4 absolute text-white bottom-[10%]">
          <Icon
            className="cursor-pointer"
            onClick={prevBtn}
            icon="ep:arrow-left-bold"
            fontSize={20}
          />
          <div className="flex flex-row justify-center items-center gap-4">
            {Images.map((i, index) => (
              <div
              onClick={() => setCurrentImg(index)}
                key={index}
                className={`w-2 h-2 bg-white rounded-full ${
                  currentImg === index ? "p-2" : "opacity-50"
                }`}
              />
            ))}
          </div>
          <Icon
            className="cursor-pointer"
            onClick={nextBtn}
            icon="ep:arrow-right-bold"
            fontSize={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
