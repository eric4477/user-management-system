import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../api/fetchAllUsers";
import { MdEdit } from "react-icons/md";
import { LuTrash } from "react-icons/lu";

function UsersList() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllUsers();
        setAllUsers(data);
        console.log(data);
      } catch (err) {
        throw err;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-page px-6 bg-[#f0f0f0] ">
      <header className="user-list-page-header flex flex-row py-3 items-center justify-between border-b-[1px] border-[#E5E5E5]">
        <h2 className="text-xl font-bold">Users List</h2>
        <button className="bg-[#FEAF00] px-10 py-3 text-sm text-white rounded-[5px]">
          ADD NEW User
        </button>
      </header>
      <div className="h-screen overflow-y-auto">
        <table
          className="min-w-full table-auto border-separate max-[1190px]:min-w-[900px]"
          style={{ borderSpacing: "0 12px" }}
        >
          <thead>
            <tr>
              <th scope="col" className=" py-3 "></th>
              <th
                scope="col"
                className=" py-3  text-xs leading-4 font-semibold text-[#ACACAC] tracking-wider text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className=" py-3  text-xs leading-4 font-semibold text-[#ACACAC] tracking-wider text-left"
              >
                Email
              </th>
              <th
                scope="col"
                className=" py-3  text-xs leading-4 font-semibold text-[#ACACAC] tracking-wider text-left"
              >
                Phone
              </th>
              <th
                scope="col"
                className="py-3  text-xs leading-4 font-semibold text-[#ACACAC] tracking-wider text-left"
              >
                Birth date
              </th>
              <th
                scope="col"
                className="py-3  text-xs leading-4 font-semibold text-[#ACACAC] tracking-wider text-left"
              >
                role
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user: any) => (
              <tr key={user.id} className="bg-white px-11 rounded-lg">
                <td className="py-4 pl-3 rounded-l-lg">
                  <img
                    className="w-[60px] h-[60px]"
                    src={user.image}
                    alt="user image"
                  />
                </td>
                <td className="py-4 text-sm leading-5 text-black ">
                  {user.firstName} {user.lastName}
                </td>
                <td className="py-4 text-sm leading-5 text-black">
                  {user.email}
                </td>
                <td className="py-4 text-sm leading-5 text-black">
                  {user.phone}
                </td>
                <td className="py-4 text-sm leading-5 text-black">
                  {user.birthDate}
                </td>
                <td className="py-4 text-sm leading-5 text-black">
                  {user.role}
                </td>
                <td className="py-4 rounded-r-lg">
                  <div className="flex flex-row items-center gap-4">
                    <button>
                      <MdEdit className="text-[#FEAF00] w-[20px] h-[20px]" />
                    </button>
                    <button>
                      <LuTrash className="text-[#FEAF00] w-[20px] h-[20px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
