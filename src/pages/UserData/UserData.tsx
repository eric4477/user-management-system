import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { User } from "../../intefaces/user";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function UserData() {
  const { state } = useLocation();
  const { user, isEdit } = state || {};
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>();

  const pageTitle = isEdit ? "Update User" : "Add User";

  useEffect(() => {
    if (!isEdit) {
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("birthDate", "");
      setValue("age", undefined);
    }
    if (isEdit && user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("phone", user.phone);
      setValue("age", user.age);
      if (user.birthDate) {
        const formattedDate = new Date(user.birthDate)
          .toISOString()
          .split("T")[0];
        setValue("birthDate", formattedDate);
      }
    }
  }, [isEdit, user]);

  const onSubmit = async (data: User) => {
    try {
      let response;
      if (isEdit && user) {
        response = await axios.put(
          `https://dummyjson.com/users/${user.id}`,
          data
        );
        toast.success("User updated successfully");
      } else {
        response = await axios.post("https://dummyjson.com/users/add", data);
        toast.success("User added successfully");
      }

      navigate("/dashboard/users");
      return response.data;
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An error occurred while submitting the form");
      throw error;
    }
  };

  return (
    <div className="userdata-page px-6 pb-8 bg-[#fcfbfb] ">
      <header className="py-3 flex items-center border-b-[1px] border-[#E5E5E5]">
        <h2 className="text-xl font-bold">{pageTitle}</h2>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-24 pb-16 px-14 bg-white mt-10 shadow-lg w-[95%] mx-auto rounded-xl 
      max-[924px]:px-7 max-[924px]:pt-10 max-[924px]:pb-10"
      >
        <div className="flex flex-row  gap-7 items-center flex-wrap">
          <div className="flex flex-col flex-grow gap-4">
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-[#6C6C6C] mb-3"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter your First Name"
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              <span className="text-sm text-red-500 mt-1 min-h-[20px]">
                {typeof errors?.firstName?.message === "string" &&
                  errors.firstName.message}
              </span>
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#6C6C6C] mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Email should be valid",
                  },
                })}
              />
              <span className="text-sm text-red-500 mt-1 min-h-[20px]">
                {typeof errors?.email?.message === "string" &&
                  errors.email.message}
              </span>
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="phonenumber"
                className="text-sm font-medium text-[#6C6C6C] mb-3"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                placeholder="Enter your Phone Number"
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                    message: "Phone number should be valid",
                  },
                })}
              />
              <span className="text-sm text-red-500 mt-1 min-h-[20px]">
                {typeof errors?.phone?.message === "string" &&
                  errors.phone.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-4">
            <div className="flex flex-col justify-start">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-[#6C6C6C] mb-3"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter your Last Name"
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              <span className="text-sm text-red-500 mt-1 min-h-[20px]">
                {typeof errors?.lastName?.message === "string" &&
                  errors.lastName.message}
              </span>
            </div>
            <div className="flex flex-col justify-start">
              <label
                htmlFor="age"
                className="text-sm font-medium text-[#6C6C6C] mb-3"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter your Age"
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
                {...register("age", {
                  required: "Age is required",
                  max: { value: 100, message: "max age is 100" },
                })}
              />
              <span className="text-sm text-red-500 mt-1 min-h-[20px]">
                {typeof errors?.age?.message === "string" && errors.age.message}
              </span>
            </div>
            <div className="flex flex-col justify-start">
              <label
                htmlFor="birthdate"
                className="text-sm font-medium text-[#6C6C6C] mb-3"
              >
                birth Date
              </label>
              <input
                type="date"
                id="birthdate"
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base
                border border-[#E5E5E5]  rounded-[5px] w-full placeholder:text-xs placeholder:text-gray-400"
                {...register("birthDate", {
                  required: "Birth date is required",
                })}
              />
              <span className="text-sm text-red-500 mt-1 min-h-[20px]">
                {typeof errors?.birthDate?.message === "string" &&
                  errors.birthDate.message}
              </span>
            </div>
          </div>
        </div>
        <div className="form-btn text-center mt-10">
          <button
            className="py-3 bg-[#FEAF00] w-[40%] rounded-md text-white text-sm max-[924px]:w-full 
           transition hover:opacity-60"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserData;
