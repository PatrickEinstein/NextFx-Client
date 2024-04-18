"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { ChangeEvent, useCallback, useState, Suspense } from "react";

import { Login, VerifyToken } from "../../../../utils/fetches/api.fetch";
import { useToast } from "@/components/ui/use-toast";
import { useUserStore } from "@/store";
import CustomInputOtp from "./_components/CustomInputOtp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface UserInfo {
  email: string;
  password: string;
}

const FallbackComponent = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[20px] pt-[28px] w-full">
      <InputOTP
        maxLength={6}
        className="w-full flex items-center justify-center gap-3"
      >
        <InputOTPGroup className="!border-primary">
          <InputOTPSlot index={0} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      {/*Button section*/}
      <div className="w-full flex flex-col gap-2">
        <button
          className="w-full flex items-center justify-center px-[30px] bg-primary text-white py-3 rounded-lg"
          onClick={() => {}}
          type="button"
          disabled={true}
        >
          <span>Verify</span>
        </button>
      </div>
    </div>
  );
};
const VerifyPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const [otpInput, setOtpInput] = useState<string>("");

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

          {/*Form*/}
          <Suspense fallback={<FallbackComponent />}>
            <CustomInputOtp />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
