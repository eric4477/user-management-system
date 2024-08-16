import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

interface LoginData {
  username: string;
  password: string;
}

function Login() {
  const { saveUserData } = useContext(StoreContext);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginData>();

  useEffect(() => {
    setValue("username", "emilys");
    setValue("password", "emilyspass");
    localStorage.removeItem("activeMenu");
    localStorage.removeItem("userToken");
  }, []);

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      localStorage.setItem("userToken", response.data.token);
      saveUserData();
      if (response.status === 200) {
        navigate("/dashboard");
        toast.success("login success");
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        setError((err.response.data as { message: string }).message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="login-page min-h-screen flex items-center justify-center px-2">
      <div
        className="login-container bg-white rounded-2xl pl-8 pr-8 pt-10 pb-[86px] shadow-lg
          max-[560px]:pr-4 max-[560px]:pl-4"
      >
        <div className="login-header flex justify-start items-center gap-2 pr-28 mb-11 max-[560px]:pr-2">
          <div className="pipeline h-[30px] w-[5px] bg-[#f8d442]" />
          <h2 className="font-bold text-[24px] max-[350px]:text-[20px]">
            User Management System
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h3 className="text-black text-[22px] font-semibold uppercase max-[350px]:text-[18px]">
            Sign In
          </h3>
          <p className="text-sm text-[#6C6C6C]">
            Enter your credentials to access your account
          </p>
        </div>
        <form
          className="flex flex-col justify-start mt-6 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label
              className="text-[#6C6C6C] font-medium text-sm"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="border border-[#E5E5E5] outline-none placeholder:text-sm py-2 px-4 rounded-sm
            text-base mt-2"
              type="text"
              placeholder="Enter your username"
              id="email"
              {...register("username", { required: "username is required" })}
            />

            <span className="text-sm text-red-500 mt-1 min-h-[20px]">
              {typeof errors?.username?.message === "string" &&
                errors.username.message}
            </span>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#6C6C6C] font-medium text-sm "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-[#E5E5E5] outline-none placeholder:text-sm py-2 px-4 rounded-sm
            text-base mt-2"
              type="password"
              placeholder="Enter your password"
              id="password"
              {...register("password", { required: "password is required" })}
            />
            <span className="text-sm text-red-500 mt-1 min-h-[20px]">
              {typeof errors?.password?.message === "string" &&
                errors.password.message}
            </span>
          </div>
          {<span className="text-red-600">{error}</span>}
          <button
            className="block uppercase text-sm bg-[#FEAF00] py-3 text-white rounded-[5px] 
             hover:opacity-85 transition"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
