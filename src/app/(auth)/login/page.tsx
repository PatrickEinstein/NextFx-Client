"use client";

const LoginPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex items-start flex-col">
        <div className="flex items-start flex-col gap-6">
          <h2 className="text-[36px] font-medium tracking-[1.44px]">
            Login in to Web Pips
          </h2>
          <p className="text-[16px] leading-[24px] font-normal">
            Enter your details below
          </p>
        </div>

        {/*Form*/}
        <div className="flex items-start flex-col gap-[40px] pt-[48px] w-full">
          <input
            type="text"
            className="pb-2 outline-none border-b border-b-[#000]/50 text-[16px] leading-[24px] w-full"
            placeholder="Email and Phone Number"
          />

          <input
            type="text"
            className="pb-2 outline-none border-b border-b-[#000]/50 text-[16px] leading-[24px] w-full"
            placeholder="Password"
          />

          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center justify-center px-[30px] bg-buttonColor">
              <button onClick={() => {}} type="button">
                Login
              </button>
            </div>

            <span className="text-buttonColor text-[16px] font-medium">
              Forget Password?
            </span>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <span className="text-[16px] text-black/70 font-normal leading-[24px]">
              Don#t have an account?
            </span>
            <span
              className="text-[16px] text-buttonColor font-medium leading-[24px] underline cursor-pointer"
              onClick={() => {
                // navigate("/register");
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
