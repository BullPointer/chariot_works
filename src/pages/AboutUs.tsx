/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar } from "../components";
import Footer from "../footer/Footer";
import { Icon } from "@iconify/react";
import Img from "../../Images/about1.jpeg";
import Img2 from "../../Images/work.jpeg";
import GetInTouch from "../components/GetInTouch";
import { useEffect, useRef, useState } from "react";
const AboutUs = () => {
  const scrollDivRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const cardObj = [
    {
      num: first,
      text: "Creative Minds at Work",
    },
    {
      num: second,
      text: " Years in Business",
    },
    {
      num: third,
      text: "Services rendered",
    },
  ];

  const firstIntervalCount = (firstInterval: number, thirdInterval: number) => {
    if (first >= 67) clearInterval(firstInterval);
    if (third >= 300) clearInterval(thirdInterval);
  };
  const secondIntervalCount = (secondInterval: number) => {
    if (second >= 5) clearInterval(secondInterval);
  };

  const handleScroll = () => {
    const scrollDiv = scrollDivRef.current;
    if (scrollDiv) {
      const { scrollTop, clientHeight } = scrollDiv;

      if (clientHeight + scrollTop > screen.height - scrollTop) {
        setStartCount(true);
      } else {
        setFirst(0);
        setSecond(0);
        setThird(0);
        setStartCount(false);
      }
    }
  };
  useEffect(() => {
    if (startCount) {
      const firstInterval = setInterval(() => setFirst(first + 1), 1);
      const thirdInterval = setInterval(() => setThird(third + 1), 1);

      firstIntervalCount(firstInterval, thirdInterval);
      return () => {
        clearInterval(firstInterval);
        clearInterval(thirdInterval);
      };
    }
  }, [startCount, first, third]);
  useEffect(() => {
    if (startCount) {
      const secondInterval = setInterval(() => setSecond(second + 1), 200);

      secondIntervalCount(secondInterval);
      return () => {
        clearInterval(secondInterval);
      };
    }
  }, [startCount, second]);

  useEffect(() => {
    const scrollDiv = scrollDivRef.current;
    if (scrollDiv) scrollDiv.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollDiv) {
        scrollDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div ref={scrollDivRef} className="relative h-screen overflow-auto">
      <Navbar />
      <div className="w-full flex flex-row overflow-x-hidden transform">
        <img className="h-screen min-w-full object-cover" src={Img} alt="" />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 h-auto lg:h-60 bg-[#161531]">
        {cardObj.map(({ text, num }, index) => (
          <div
            key={index}
            className="p-5 flex flex-col justify-center items-center gap-4"
          >
            <div className="text-3xl lg:text-7xl text-[#f7f7f7]">
              {num}
              {index === 2 && "+"}
            </div>
            <div className="text-2xl lg:text-3xl text-[#fff] font-bold">
              {text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-14 px-5 lg:px-52">
        <div className="text-3xl lg:text-6xl font-[500]">Elevating spaces</div>
        <div className="text-xl text-center">
          we make artistry meets architecture, and ceilings become canvases of
          wonder, satisfaction of service becomes a norm.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1d1b1b]">
        <div className="flex flex-col py-10 justify-center items-center lg:items-start gap-8 sm:px-24 cursor-pointer">
          <div className="text-3xl sm:text-6xl font-semibold text-[#eff7ee] text-center lg:text-left">
            What Do We Really Do?
          </div>
          <p className="text-white text-[18px] text-center lg:text-left p-2 sm:p-0">
            At CHARIOT WORKS, we are not merely artisans; we are dreamweavers
            who transform your vision into reality. With a blend of traditional
            techniques and contemporary innovation, each stroke of our skilled
            craftsmen's hands captures the essence of creativity, bringing forth
            a symphony of elegance and grandeur.
          </p>
          <p className="text-white text-[18px] text-center lg:text-left p-2 sm:p-0">
            Our artisans, like modern-day alchemists, sculpt plain plaster of
            Paris into intricate designs that defy gravity and redefine luxury.
            From ornate patterns that whisper tales of antiquity to sleek and
            minimalist designs that embody modern chic, our repertoire knows no
            bounds. Every curve, every contour, and every texture is a testament
            to the dedication and precision we pour into our creations.
          </p>
          <div className="flex flex-row justify-center items-center gap-2 p-3 cursor-pointer">
            <div className="text-xl font-semibold text-white">
              VIEW OUR Service
            </div>
            <Icon className="text-white" icon="bxs:right-arrow" />
          </div>
        </div>
        <div>
          <img className="h-[100%] w-full object-cover" src={Img2} alt="" />
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default AboutUs;
