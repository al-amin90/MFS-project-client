import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const loading = false;
  const [isShowed, setIsShowed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // user sing in
      const { data: result } = await axiosPublic.post("/users", {
        ...data,
        money: 40,
      });
      console.log(result);

      if (result.acknowledged) {
        toast.success("Register successfully");
        navigate("/");
      } else if (result.result) {
        toast.error(result.result);
      }
    } catch (err) {
      //   console.log(err);
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="max-w-[1920px] pt-16 md:pt-28 mx-auto md:w-[85%] pb-10">
        <div className=" rounded-3xl lg:shadow ">
          <div className="w-full justify-center items-center flex-col lg:flex-row flex">
            <div className="w-full max-w-lg  p-5">
              <div className=" p-5 ">
                <div className="pb-8 ">
                  <p className="text-3xl font-bold  relative z-10  text-white">
                    Register Now!
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5 w-full "
                >
                  <div>
                    <fieldset className="border bg-[#101011] border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type="name"
                        name="name"
                        {...register("name", {
                          required: true,
                        })}
                        id="name"
                        placeholder="Enter name"
                        className="px-4 py-1 bg-[#101011] text-white w-full focus:outline-0"
                      />
                    </fieldset>
                    {errors.name?.type === "required" && (
                      <span className="text-red-600">Name is required</span>
                    )}
                  </div>
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
                    <fieldset className="border bg-[#101011] border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type="number"
                        name="number"
                        {...register("number", {
                          required: true,
                          maxLength: 11,
                          minLength: 11,
                        })}
                        id="number"
                        placeholder="Phone Number"
                        className="px-4 py-1 bg-[#101011] text-white w-full focus:outline-0"
                      />
                    </fieldset>
                    {errors.number?.type === "required" && (
                      <span className="text-red-600">Number is required</span>
                    )}
                    {errors.number?.type === "maxLength" && (
                      <span className="text-red-600">
                        Max Number Digit must be 11
                      </span>
                    )}
                    {errors.number?.type === "minLength" && (
                      <span className="text-red-600">
                        Number length must be 11
                      </span>
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
                          minLength: 5,
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
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-600">
                        5-digit PIN must be number
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <h5 className="text-white">Your Account type -</h5>
                    <div className="flex gap-4 ">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="text-white mr-2">User</span>
                          <input
                            {...register("userRole", { required: true })}
                            type="radio"
                            value="user"
                            name="userRole"
                            className="radio radio-accent"
                            defaultChecked
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="text-white mr-2">Agent</span>
                          <input
                            {...register("userRole", { required: true })}
                            type="radio"
                            value="agent"
                            name="userRole"
                            className="radio radio-accent"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-4 w-full px-5 text-lg text-white bg-[#33BBCF] rounded-xl hover:shadow-xl font-semibold"
                  >
                    Register
                  </button>
                </form>

                <div className="text-white">
                  <p className="text-center mt-7 ">
                    Already have a account?{" "}
                    <span
                      onClick={() => navigate("/login")}
                      className="font-normal duration-300 transition-all hover:text-white text-[#33BBCF] underline cursor-pointer"
                    >
                      Login
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

export default Register;
