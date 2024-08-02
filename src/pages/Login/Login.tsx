function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="login-page h-screen flex items-center justify-center px-2">
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
          className="flex flex-col justify-start mt-6"
          onSubmit={handleSubmit}
        >
          <label
            className="text-[#6C6C6C] font-medium text-sm "
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-[#E5E5E5] outline-none placeholder:text-sm py-2 px-4 rounded-sm
            text-base mt-2 mb-4"
            type="text"
            placeholder="Enter your email"
            id="email"
          />
          <label
            className="text-[#6C6C6C] font-medium text-sm "
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-[#E5E5E5] outline-none placeholder:text-sm py-2 px-4 rounded-sm
            text-base mt-2 mb-4"
            type="password"
            placeholder="Enter your password"
            id="password"
          />
          <button
            className="block uppercase text-sm bg-[#FEAF00] py-3 text-white rounded-[5px] 
            mt-4 hover:opacity-85 transition"
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
