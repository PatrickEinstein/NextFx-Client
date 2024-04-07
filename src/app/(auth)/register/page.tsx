"use client";

import { redirect, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Register } from "../../../../utils/fetches/api.fetch";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const RegisterPage = () => {
  interface UserInfo {
    firstName: string;
    lastName: string;
    DateOfBirth: string;
    email: string;
    password: string;
    experience: string;
    age: number;
  }
  const [userExperience, setUserExperience] = useState<string>("Novice");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    DateOfBirth: "",
    email: "",
    password: "",
    experience: userExperience,
    age: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  // console.log(userInfo);
  useEffect(() => {
    const dob = new Date(userInfo.DateOfBirth);
    const now = new Date();
    const ageInMilliseconds = now.getTime() - dob.getTime();
    const ageInYears = Math.floor(
      ageInMilliseconds / (1000 * 3600 * 24 * 365.25)
    );
    setUserInfo((prev) => ({
      ...prev,
      experience: userExperience,
      age: ageInYears,
    }));
  }, [userExperience, userInfo.DateOfBirth]);

  const handleUserExperienceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setUserExperience(value);
  };

  const onSetUserInfo = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof UserInfo
  ) => {
    const value = e.target.value;
    setUserInfo((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const onRegister = useCallback(async () => {
    setLoading(true);
    const reg = await Register(userInfo);
    if (reg.status === true) {
      setLoading(false);
      toast({
        description: reg.response.split(",")[0],
      });
      router.push("/login");
    } else {
      setLoading(false);
      const response = JSON.parse(reg.message);
      toast({
        variant: "destructive",
        description: response.message,
      });
      // alert(reg.message);
    }
  }, [userInfo]);
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
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="firstname">Firstname</Label>
              <Input
                id="firstname"
                placeholder="Enter first name here"
                className="w-full"
                name="firstname"
                onChange={(e) => onSetUserInfo(e, "firstName")}
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="lastname">Lastname</Label>
              <Input
                id="lastname"
                placeholder="Enter Lastname here"
                className="w-full"
                name="lastname"
                onChange={(e) => onSetUserInfo(e, "lastName")}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="date">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                placeholder="Enter Date of Birth here"
                className="w-full"
                name="dateOfBirth"
                type="date"
                onChange={(e) => onSetUserInfo(e, "DateOfBirth")}
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="experience">Years of Experience</Label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                value={userExperience}
                onChange={handleUserExperienceChange}
              >
                <option value="Novice">Less than a year</option>
                <option value="Amateur">1 year</option>
                <option value="Beginner">2 years</option>
                <option value="Intermediate">less than 3 years</option>
                <option value="Advanced">4 years</option>
                <option value="Professional">5 years</option>
                <option value="Expert">Above 5 years</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter Email here"
              className="w-full"
              name="email"
              onChange={(e) => onSetUserInfo(e, "email")}
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
              onChange={(e) => onSetUserInfo(e, "password")}
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <button
              className="w-full flex items-center justify-center px-[30px] bg-primary text-white py-3 rounded-lg"
              onClick={onRegister}
              type="button"
              disabled={loading}
            >
              {loading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
              )}
              <span>Register</span>
            </button>

            <div className="flex w-full items-center justify-center">
              <span className="text-base font-semibold">Or</span>
            </div>

            <button
              className="w-full flex items-center justify-center px-[30px] bg-white text-primary border border-primary py-3 rounded-lg gap-3"
              onClick={() => {
                router.push("http://localhost:5000/auth/login/google");
              }}
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
