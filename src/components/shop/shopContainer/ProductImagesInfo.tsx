import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ProductImagesInfoProps = {
  images: Array<string>;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
};
export const ProductImagesInfo = ({
  images,
  setImage,
}: ProductImagesInfoProps) => {
  return (
    <div className="w-full md:w-[20%] pt-10 hidden md:block">
      <div className="flex flex-row md:flex-col p-2">
        {images?.slice(0, 5).map((img, idx) => (
          <div
            onClick={() => setImage(img)}
            key={idx}
            className="w-[90%] m-auto py-2 rounded-full cursor-pointer"
          >
            <img
              className="max-h-20 w-full object-cover border-2 rounded"
              src={`http://localhost:3000/${img}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductSideImageCarousel = ({
  images,
  setImage,
}: ProductImagesInfoProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="w-full pt-10 px-8 py-5 block md:hidden">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="w-full h-[100px]"
      >
        {images?.map((img: string, index: number) => (
          <div key={index} className="w-full h-[100%] opacity-90">
            <img
              onClick={() => setImage(img)}
              src={`http://localhost:3000/${img}`}
              className="w-full h-[100%] object-contain"
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
