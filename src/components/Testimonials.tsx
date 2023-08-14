import { useState } from "react";
import { Icon } from "@iconify/react";
import Img1 from "../../Images/testimonial1.jpeg";
import Img2 from "../../Images/testimonial2.jpeg";

const testimonialData = [
  {
    img: Img1,
    text: (
      <p>
        It's good to work with reliable hands, My friend recommended your
        company for my building project, I tested your service even for the
        first time. I am happy I wasn't disappointed. I will sure do more
        business with you in the future. Keep it up!
      </p>
    ),
    name: "Kazeem",
    about: "CEO, Junkin stuff",
  },
  {
    img: Img2,
    text: (
      <p>
        So I went to a clothing shop to do some shopping on entry the shop I was
        marveled by the beauty of the interior works especially the P.O.P works
        so I collected your contact from the shop owner. I gave you my baby
        items super market to renovate for me, from the P.O.P ceiling, the
        painting and to the cleaning very impressive.
      </p>
    ),
    name: "Bukky",
    about: "CEO, Junkin stuff",
  },
  {
    img: Img1,
    text: (
      <p>
        So I went to a clothing shop to do some shopping on entry the shop I was
        marveled by the beauty of the interior works especially the P.O.P works
        so I collected your contact from the shop owner. I gave you my baby
        items super market to renovate for me, from the P.O.P ceiling, the
        painting and to the cleaning very impressive
      </p>
    ),
    name: "Hazan",
    about: "CEO, Junkin stuff",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#070707] py-8 xl:py-0">
      <div className="w-full text-[22px] xs:text-[28px] sm:text-[37px] font-[550] pt-5 text-white text-center">
        Reliable service
      </div>
      <div className="flex flex-row xl:grid xl:grid-cols-3 overflow-hidden">
        {testimonialData?.map(({ img, text, name, about }, index) => (
          <div
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            key={index}
            className="min-w-[100%] transition-transform duration-500 bg-[#070707] flex flex-row justify-center  xl:first:justify-end xl:[&:nth-child(2)]:justify-center xl:justify-start items-center py-4 xl:py-10"
          >
            <div className="h-[100%] w-[80%]  md:w-[50%] xl:w-[80%] bg-black rounded-xl shadow-md shadow-black p-7 grid grid-col-1 justify-start items-start gap-2">
              <div className="text-white text-[13px] xs:text-[16px]">
                {text}
              </div>
              <div className="flex flex-row justify-center items-center gap-2 text-white">
                <Icon
                  className="text-green-500 text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-green-500 text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-green-500 text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-green-500 text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-green-500 text-[18px]"
                  icon="fluent:star-24-filled"
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="rounded-full w-[75px] h-[75px]">
                  {" "}
                  <img
                    className="w-[75px] h-[75px] rounded-full"
                    src={img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-[14px] font-bold">{name}</div>
                  <div className="text-white text-[12px]">{about}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-2 py-2 xl:hidden">
        {testimonialData?.map((k, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={` w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-green-500" : "bg-[#3a3838]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
