import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Joi from "joi";
import { resetPasswordApi } from "../../handleApi/accountApi";
import AlertMsg from "../utils/AlertMsg";

type ForgotPasswordTypes = {
  password: string;
  confirmPassword: string;
};
const NewPassword = () => {
  const [search] = useSearchParams();
  const userId = search.get("usr");
  const token = search.get("token");

  const [isMsg, setIsMsg] = useState(false);
  const [msg, setMsg] = useState<null | string>(null);
  const [requestSent, setRequestSent] = useState(false);
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  } as ForgotPasswordTypes);
  const [error, setError] = useState({} as ForgotPasswordTypes);
  const [isLoading, setIsLoading] = useState(false);

  const schema = Joi.object({
    password: Joi.string().min(4).max(15).label("Password Field"),
    confirmPassword: Joi.string()
      .min(4)
      .max(15)
      .label("Confirm password Field"),
  });
  const handleAlertMsg = () => setIsMsg(false);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId && token) {
      setIsLoading(true);

      const errors = {} as ForgotPasswordTypes;
      const { error } = schema.validate(user, { abortEarly: false });
      if (error) {
        for (let index = 0; index < error.details.length; index++) {
          errors[error.details[index].path[0] as keyof ForgotPasswordTypes] =
            error.details[index].message;
        }
        setIsLoading(false);
        return setError(errors);
      } else if (user.password !== user.confirmPassword) {
        errors["confirmPassword"] = "Confirm password doesn't match";
        setIsLoading(false);
        return setError(errors);
      } else {
        try {
          const cred = { id: userId, token: token, password: user.password };
          const { data } = await resetPasswordApi(cred);
          console.log(data);

          setRequestSent(true);
          setIsLoading(false);
          setError({} as ForgotPasswordTypes);
          return;
        } catch (error: unknown) {
          console.log("New Error is ", error);
          setIsLoading(false);
        }
      }
    } else {
      console.log(userId);
      console.log(token);

      setMsg("Invalid request url");
      setIsMsg(true);
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      document.title = window.location.pathname;

      setTimeout(() => {
        document.title = "Chariot Interior New password";
      }, 2000);
    });
  }, []);

  return (
    <div className="flex flex-row  items-center gap-2 min-h-screen w-full bg-[#f1f1f1]">
      {isMsg && (
        <AlertMsg
          handleAlertMsg={handleAlertMsg}
          message={msg ? msg : "Unidentified error"}
        />
      )}
      <div className="mx-auto pb-20 w-[90%] md:w-[80%] lg:w-[50%] border border-[#d3d2d2] h-auto bg-white rounded-md">
        <div className="flex flex-col justify-center items-start px-3 pt-1 pb-5 lg:px-5 w-[100%] mx-auto">
          <Link to={"/"}>
            <div className="py-1 px-3 rounded-md text-[21px] font-bold text-[#272525]">
              Reset password
            </div>
          </Link>
          {!requestSent ? (
            <div className="w-full text-center text-[18px] lg:text-[18px] px-5 py-2 font-[700] text-[#2c3355]">
              Create a new password
            </div>
          ) : (
            <div className="w-full text-center text-[18px] lg:text-[18px] px-5 py-2 font-[700] text-[#2c3355]">
              Password has been created successfully! You can now login
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="w-[90%] md:w-[80%] m-auto flex flex-col justify-center items-start gap-2">
              <label
                className="text-[16px] text-[#201e1e99] font-semibold"
                htmlFor=""
              >
                New password
              </label>
              <input
                onChange={handleChange}
                className="w-full p-1 sm:p-2 outline-none rounded-md border opacity-90"
                type="password"
                name="password"
                id=""
              />
              {error && (
                <p className="text-[12px] text-red-500">{error.password}</p>
              )}
            </div>
            <div className="w-[90%] md:w-[80%] m-auto flex flex-col justify-center items-start gap-2">
              <label
                className="text-[16px] text-[#201e1e99] font-semibold"
                htmlFor=""
              >
                Confirm password
              </label>
              <input
                onChange={handleChange}
                className="w-full p-1 sm:p-2 outline-none rounded-md border opacity-90"
                type="password"
                name="confirmPassword"
                id=""
              />
              {error && (
                <p className="text-[12px] text-red-500">
                  {error.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              {!requestSent ? (
                <button className="bg-[#c07171] hover:text-[#fff] hover:bg-[#939445]  opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                  {!isLoading ? (
                    "Create new"
                  ) : (
                    <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                  )}
                </button>
              ) : (
                <Link to={"/usr/sign-in"}>
                  <div className="bg-[#a8a4a4] hover:text-[#fff] hover:bg-[#3d4586]  opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px]">
                    Login
                  </div>
                </Link>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
