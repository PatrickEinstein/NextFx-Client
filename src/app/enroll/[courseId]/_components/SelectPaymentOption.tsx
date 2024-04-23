"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  PayWithPayPal,
  PayWithPelPay,
  PayWithStripe,
} from "../../../../../utils/fetches/api.fetch";
import { useUserStore } from "@/store";

export interface SelectPaymentOptionProps {
  courseId: string;
}

export function SelectPaymentOption({ courseId }: SelectPaymentOptionProps) {
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);

  const paymentOptions = [
    // {
    //   id: "1",
    //   name: "Pay with Stripe",
    //   description: "Pay with your credit card.",
    //   icon: "/Stripe.svg",
    //   onClick: async () => {
    //     // console.log("Pay with Stripe hit");
    //     const pay = await PayWithStripe({
    //       descriptions: courseId,
    //       token,
    //       user,
    //     });
    //     console.log(`paystripe`, pay);
    //     if (pay.status === true) {
    //       window.location.href = pay.message;
    //     }
    //   },
    // },
    {
      id: "2",
      name: "Pay with PayPal",
      description: "Pay with your PayPal account.",
      icon: "/Paypal.svg",
      onClick: async () => {
        // console.log("Pay with PayPal hit");
        const pay = await PayWithPayPal({
          descriptions: courseId,
          token,
          user,
        });
        // console.log(`paypal`, pay);
        if (pay.status === true) {
          window.location.href = pay.message;
        }
      },
    },
    // {
    //   id: "3",
    //   name: "Pay with PelPay",
    //   description: "Pay with your Pelpay account",
    //   icon: "/Pelpay.jpeg",
    //   onClick: async () => {
    //     const pay = await PayWithPelPay({
    //       descriptions: courseId,
    //       token,
    //       user,
    //     });
    //     console.log(`pelpay`, pay);
    //     if (pay.status === true) {
    //       window.location.href = pay.message;
    //     }
    //   },
    // },
  ];

  return (
    <div className="w-full flex flex-col gap-3 items-center">
      {paymentOptions.map((option) => (
        <div
          key={option.id}
          className={cn(
            "flex flex-row items-center gap-2 cursor-pointer w-full px-4 py-3 rounded-lg border border-gray-200",
            "hover:border-primary hover:shadow-md"
          )}
          onClick={option.onClick}
        >
          <img src={option.icon} alt={option.name} className="w-8 lg:w-12" />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">{option.name}</h3>
            <p className="text-[12px] leading-[16px] text-gray-400">
              {option.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
