import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Sorry! Page not found";
  }, []);

  return (
    <div className="flex flex-row justify-center items-center bg-white w-full min-h-screen">
      <div className="text-black font-bold text-3xl">
        Sorry, page not found!
      </div>
    </div>
  );
};
export default NotFound;
