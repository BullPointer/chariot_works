/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyAccountApi } from "../../handleApi/accountApi";

const VerifiedUser = () => {
  const [search] = useSearchParams();
  const userId = search.get("usr");
  const token = search.get("token");

  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const validateFunc = async () => {
      if (userId && token) {
        try {
          const { data } = await verifyAccountApi(userId, token);
          console.log(data);
        } catch (error: unknown) {
          console.log("New Error is ", error);
        }
        setVerified(true);
      } else {
        setVerified(false);
      }
    };
    validateFunc();
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      document.title = window.location.pathname;

      setTimeout(() => {
        document.title = "Chariot Interior Verified user";
      }, 2000);
    });
  }, []);

  return (
    <div className="flex flex-row justify-center items-center min-h-screen w-full bg-[#f1f1f1]">
      <div
        className={`w-[90%] md:w-[50%] flex flex-col justify-center items-center gap-2 rounded-xl py-10 px-10 bg-[#212135;] text-[#fff;]`}
      >
        <div className="text-center text-[20px] sm:text-[23px]">
          {verified
            ? "Email Confirmation was successfull! You can now close this page"
            : "Email Confirmation failed. Invalid request url"}
        </div>

        <a
          className="w-full rounded-sm cursor-pointer py-2 px-3 text-center font-bold bg-[#57568f;] text-[#fff;]"
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site?
        </a>
      </div>
    </div>
  );
};

export default VerifiedUser;
