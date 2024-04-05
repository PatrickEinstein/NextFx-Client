"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex items-start flex-col py-6 px-8 bg-white shadow-lg border border-gray-300">
        <div className="flex items-start flex-col gap-6">
          <h2 className="text-[36px] font-medium tracking-[1.44px]">
            Register in to Web Pips
          </h2>
        </div>

        {/*Form*/}
        <div className="flex items-start flex-col gap-5 pt-[28px] w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter Email here"
              className="w-full"
              name="email"
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter Password here"
              type="password"
              className="w-full"
              name="email"
            />
          </div>

          {/*Button section*/}
          <div className="w-full flex flex-col gap-2">
            <button
              className="w-full flex items-center justify-center px-[30px] bg-primary text-white py-3 rounded-lg"
              onClick={() => {}}
              type="button"
            >
              <span>Register</span>
            </button>

            <div className="flex w-full items-center justify-center">
              <span className="text-base font-semibold">Or</span>
            </div>

            <button
              className="w-full flex items-center justify-center px-[30px] bg-white text-primary border border-primary py-3 rounded-lg gap-3"
              onClick={() => {}}
              type="button"
            >
              <Image
                src={"/google.svg"}
                alt="google-icon"
                width={20}
                height={20}
              />
              <span>Register with Google</span>
            </button>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <span className="text-[16px] text-black/70 font-normal leading-[24px]">
              Already have an account?
            </span>
            <span
              className="text-[16px] text-buttonColor font-medium leading-[24px] underline cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
