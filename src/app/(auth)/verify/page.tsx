"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
import { Login } from "../../../../utils/fetches/api.fetch";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useUserStore } from "@/store";

interface UserInfo {
  email: string;
  password: string;
}
const VerifyPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const updateToken = useUserStore((state) => state.updateToken);
  const updateUser = useUserStore((state) => state.updateUser);

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

  const onLogin = useCallback(async () => {
    setLoading(true);
    const login = await Login(userInfo);
    if (login.status === true) {
      // sessionStorage.setItem("token", login.response);
      // sessionStorage.setItem("user", login.user);
      updateToken(login.response);
      updateUser(login.user);

      setLoading(false);
      toast({
        title: "Login Successful",
        description: "Redirecting to the user dashboard",
      });
      router.push("/dashboard");
    } else {
      // console.log(login);
      // const res = JSON.parse(login);
      // const message = res.substring(res.indexOf(":") + 1);
      // console.log(res, message);
      // alert(JSON.parse(res.substring(res.indexOf(":") + 1)));
      const response = "Invalid Email or Password";
      // const response = JSON.parse(login.response);
      toast({
        variant: "destructive",
        title: "An Error occurred",
        description: response,
      });
      setLoading(false);
    }
  }, [userInfo]);

  const router = useRouter();

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="flex items-start flex-col py-6 px-8 bg-white shadow-lg border border-gray-300">
        <div className="flex items-start flex-col gap-6">
          <h2 className="text-[36px] font-medium tracking-[1.44px]">
            Verify your Email address
          </h2>
          <p className="text-[16px] text-gray-500">
            Please enter the verification code sent to your email address.
          </p>
        </div>

        {/*Form*/}
        <div className="flex items-start flex-col gap-[20px] pt-[28px] w-full">
          {/*Button section*/}
          <div className="w-full flex flex-col gap-2">
            <button
              className="w-full flex items-center justify-center px-[30px] bg-primary text-white py-3 rounded-lg"
              onClick={onLogin}
              type="button"
              disabled={loading}
            >
              {loading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
              )}
              <span>Verify</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
