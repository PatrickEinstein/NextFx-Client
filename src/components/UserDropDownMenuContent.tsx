"use client";

import React, { useEffect, useState } from "react";
import {
  Cloud,
  CreditCard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  LayoutDashboard,
} from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

export const UserDropDownMenuContent = () => {
  const router = useRouter();
  const updateToken = useUserStore((state) => state.updateToken);
  const updateUser = useUserStore((state) => state.updateUser);

  const logout = () => {
    updateToken(null);
    updateUser(null);
    router.push("/login");
  };

  const [alignValue, setAlignValue] = useState<"center" | "end" | "start">(
    "end"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAlignValue("start");
      } else {
        setAlignValue("end");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const user = useUserStore((state) => state.user);

  return (
    <DropdownMenuContent className="w-56" align={alignValue}>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(`/dashboard/${user}`)}
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem className="cursor-pointer">
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem> */}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuItem className="cursor-pointer" onClick={logout}>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
