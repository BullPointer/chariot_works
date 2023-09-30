import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../components/utils/AuthInput";
import { useState } from "react";
import Joi from "joi";
import { signinApi } from "../handleApi/accountApi";

type SignInTypes = { email: string; password: string };

const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" } as SignInTypes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as SignInTypes);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/";

  const schema = Joi.object({
    password: Joi.string()
      .min(4)
      .max(15)
      .label("Password Field")
      // .regex(/^(?=.*[A-Z])(?=.*\d).{4,15}$/)
      .messages({
        "string.pattern.base":
          '"Password" Field must have number, Uppercase letter, and greater than 4',
      }),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const errors = {} as SignInTypes;
    const { error } = schema.validate(user, { abortEarly: false });
    if (error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0] as keyof SignInTypes] =
          error.details[index].message;
      }
      setIsLoading(false);
      return setError(errors);
    } else {
      try {
        const response = await signinApi(user);
        const expirationTime = new Date();
        expirationTime.setHours(expirationTime.getHours() + 4);

        const dataToStore = {
          exp: expirationTime.getTime(),
          data: response.data.token,
        };

        localStorage.setItem("token", JSON.stringify(dataToStore));
        setIsLoading(false);
        navigate(redirectPath, {
          replace: true,
          state: { path: location.pathname },
        });
        window.location.reload();
      } catch (error: unknown) {
        console.log("New Error is ", error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-row  items-center gap-2 min-h-screen w-full bg-[#f1f1f1]">
      <div className="mx-auto pb-20 w-[90%] md:w-[80%] lg:w-[50%] border border-[#d3d2d2] h-auto bg-white rounded-md">
        <div className="flex flex-col justify-center items-start px-3 pt-1 pb-5 lg:px-5 w-[100%] mx-auto">
          <Link to={"/"}>
            <div className="py-1 px-3 rounded-md text-[21px] font-bold text-[#6d728b]">
              CHARIOT-INTERIOR
            </div>
          </Link>
          <div className="w-full text-center text-[18px] lg:text-[18px] py-2 font-[700] text-black">
            Sign in
          </div>
        </div>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="flex flex-col items-start justify-center gap-5">
            <Input
              handleChange={handleChange}
              label={"Email"}
              name={"email"}
              type={"text"}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Password"}
              name={"password"}
              type={"password"}
              error={error}
            />
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              <button className="bg-[#a8a4a4] hover:text-[#fff] hover:bg-[#939445]  opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                {!isLoading ? (
                  " LOGIN"
                ) : (
                  <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                )}
              </button>
              <Link to={"/usr/sign-up"}>
                <div className="bg-[#a8a4a4] hover:text-[#fff] hover:bg-[#454d94]  opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px]">
                  SIGN UP
                </div>
              </Link>
            </div>
            <div className="text-sm text-red-500 cursor-pointer font-serif">
              Forgot Your Password?
            </div>
          </div>
          <div className="w-[80%] mx-auto text-black text-[10px] pb-4">
            By continuing, I agree with your
            <Link to={"/terms-and-conditions"} className="text-red-400 px-1">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to={"/privacy-policy"} className="text-red-400 px-1">
              Privacy Policies
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
