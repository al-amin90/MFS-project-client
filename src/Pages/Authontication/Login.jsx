import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SiSpinrilla } from "react-icons/si";
import { axiosPublic } from "../../Hooks/useAxiosPublic";

const Login = () => {
  const loading = false;
  const [isShowed, setIsShowed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { data: result } = await axiosPublic.post("/login", data);
    console.log(result);

    if (result.result === true) {
      toast.success("Login successfully");
      navigate("/");
      return;
    } else {
      toast.error(result.result);
    }

    try {
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="max-w-[1920px] h-screen pt-16 md:pt-28 mx-auto md:w-[85%] pb-10">
        <div className=" rounded-3xl lg:shadow ">
          <div className="w-full justify-center items-center flex-col lg:flex-row flex">
            <div className="w-full max-w-lg  p-5">
              <div className=" p-5 ">
                <div className="pb-8 ">
                  <p className="text-3xl font-bold  relative z-10  text-white">
                    Login Here!
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5 w-full "
                >
                  <div>
                    <fieldset className="border bg-[#101011] border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: true,
                        })}
                        id="email"
                        placeholder="Your Email"
                        className="px-4 py-1 bg-[#101011] text-white w-full focus:outline-0"
                      />
                    </fieldset>
                    {errors.email?.type === "required" && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div>
                    <fieldset className="border relative bg-[#101011] text-white border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type={isShowed ? "password" : "text"}
                        name="password"
                        maxLength={5}
                        id="password"
                        {...register("password", {
                          required: true,
                          pattern: /^\d+$/,
                        })}
                        placeholder="5-digit PIN"
                        className="px-4 py-1 bg-[#101011] text-white w-full focus:outline-0"
                      />
                      <div
                        onClick={() => setIsShowed(!isShowed)}
                        className="absolute right-4 text-xl top-4"
                      >
                        {isShowed ? (
                          <FaEyeSlash className="text-white cursor-pointer"></FaEyeSlash>
                        ) : (
                          <FaEye className="text-white cursor-pointer" />
                        )}
                      </div>
                    </fieldset>
                    {errors.password?.type === "required" && (
                      <span className="text-red-600">PIN is required</span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-600">
                        5-digit PIN must be number
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="py-4 w-full px-5 text-lg text-white bg-[#33BBCF] rounded-full hover:shadow-xl font-semibold"
                  >
                    Log in
                  </button>
                </form>

                <div className="text-white">
                  <p className="text-center mt-7 ">
                    New here?{" "}
                    <span
                      onClick={() => navigate("/register")}
                      className="font-normal duration-300 transition-all hover:text-white text-[#33BBCF] underline cursor-pointer"
                    >
                      Create a New Account
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
