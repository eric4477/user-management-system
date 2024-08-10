import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { fetchUser } from "../../api/fetchUser";
import { User } from "../../intefaces/user";

function Profile() {
  const { logedInUser } = useContext(StoreContext);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (logedInUser) {
          const data = await fetchUser(logedInUser?.id);
          setUserData(data);
        }
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, [logedInUser]);

  return (
    <div className="profile-page px-6 pb-8 bg-[#fcfbfb]">
      <header className="py-3 flex items-center border-b-[1px] border-[#E5E5E5]">
        <h2 className="text-xl font-bold">Profile</h2>
      </header>
      <form
        className="pt-24 pb-16 px-14 bg-white mt-10 shadow-lg w-[95%] mx-auto rounded-xl 
      max-[924px]:px-7 max-[924px]:pt-10 max-[924px]:pb-10 relative"
      >
        <img
          className="profile-image absolute object-cover top-[-45px] rounded-full left-1/2 transform -translate-x-1/2 
          w-[100px] h-[100px] max-[924px]:w-[75px] max-[924px]:h-[75px]"
          src={userData?.image}
          alt="profile image"
        />
        <div className="flex flex-row  gap-7 items-center flex-wrap">
          <div className="flex flex-col flex-grow gap-8">
            <div className="flex flex-col justify-start gap-3">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-[#6C6C6C]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                readOnly
                value={userData?.firstName}
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base font-bold
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#6C6C6C]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                readOnly
                value={userData?.email}
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base text-[#6C6C6C]
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <label
                htmlFor="phonenumber"
                className="text-sm font-medium text-[#6C6C6C]"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                readOnly
                value={userData?.phone}
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base text-[#6C6C6C]
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-8">
            <div className="flex flex-col justify-start gap-3">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-[#6C6C6C]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                readOnly
                value={userData?.lastName}
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base font-bold
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <label
                htmlFor="age"
                className="text-sm font-medium text-[#6C6C6C]"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                readOnly
                value={userData?.age}
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base text-[#6C6C6C]
                border border-[#E5E5E5]  rounded-[5px] w-full e placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <label
                htmlFor="birthdate"
                className="text-sm font-medium text-[#6C6C6C]"
              >
                birth Date
              </label>
              <input
                type="text"
                id="birthdate"
                readOnly
                value={userData?.birthDate}
                className="bg-[#F8F8F8] outline-none py-2 px-4 text-base text-[#6C6C6C]
                border border-[#E5E5E5]  rounded-[5px] w-full placeholder:text-xs placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
