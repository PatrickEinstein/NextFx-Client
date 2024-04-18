"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { VerifyToken } from "../../../../../utils/fetches/api.fetch";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const CustomInputOtp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [otpInput, setOtpInput] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = searchParams.get("auth") || "";

  const { toast } = useToast();

  const VerifyOtp = async () => {
    setLoading(true);
    const res = await VerifyToken(otpInput, auth);
    if (res.link) {
      router.push(res.link);
    } else {
      setLoading(false);
      toast({
        title: "Verification Failed",
        description: res.response,
      });
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-[20px] pt-[28px] w-full">
      <InputOTP
        maxLength={6}
        value={otpInput}
        className="w-full flex items-center justify-center gap-3"
        onChange={(value) => setOtpInput(value)}
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
          onClick={VerifyOtp}
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
  );
};

export default CustomInputOtp;
