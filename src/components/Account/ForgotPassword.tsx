import { Link } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import { forgotPasswordApi } from "../../handleApi/accountApi";

type ForgotPasswordTypes = {
  email: string;
};
const ForgotPassword = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [user, setUser] = useState({ email: "" } as ForgotPasswordTypes);
  const [error, setError] = useState({} as ForgotPasswordTypes);
  const [isLoading, setIsLoading] = useState(false);

  const schema = Joi.object({
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

    const errors = {} as ForgotPasswordTypes;
    const { error } = schema.validate(user, { abortEarly: false });
    if (error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0] as keyof ForgotPasswordTypes] =
          error.details[index].message;
      }
      setIsLoading(false);
      return setError(errors);
    } else {
      try {
        await forgotPasswordApi(user.email);
        setRequestSent(true);
        setIsLoading(false);
        setError({} as ForgotPasswordTypes);
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
            <div className="py-1 px-3 rounded-md text-[21px] font-bold text-[#272525]">
              Forgot your password?
            </div>
          </Link>
          {!requestSent ? (
            <div className="w-full text-center text-[18px] lg:text-[18px] px-5 py-2 font-[700] text-[#2c3355]">
              Provide the email associated to your account. A temporary link
              will be sent to the provided email for password reset.
            </div>
          ) : (
            <div className="w-full text-center text-[18px] lg:text-[18px] px-5 py-2 font-[700] text-[#2c3355]">
              Password reset request has been sent successfully!
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
                Email Address
              </label>
              <input
                onChange={handleChange}
                className="w-full p-1 sm:p-2 outline-none rounded-md border opacity-90"
                type="email"
                name="email"
                id=""
              />
              {error && (
                <p className="text-[12px] text-red-500">{error.email}</p>
              )}
            </div>
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              <button className="bg-[#c07171] hover:text-[#fff] hover:bg-[#939445]  opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                {!isLoading ? (
                  !requestSent ? (
                    "Send reset link"
                  ) : (
                    "Resend reset link"
                  )
                ) : (
                  <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                )}
              </button>
              <Link to={"/"}>
                <div className="bg-[#a8a4a4] hover:text-[#fff] hover:bg-[#3d4586]  opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px]">
                  HOME
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
