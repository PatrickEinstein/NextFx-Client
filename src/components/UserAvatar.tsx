import { useCallback, useEffect, useState } from "react";
import { GetUserById } from "../../utils/fetches/api.fetch";
import { UserDropDownMenuContent } from "./UserDropDownMenuContent";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/store";

type UseAvatarProps = {
  mobile?: boolean;
};

export const UserAvatar = ({ mobile = false }: UseAvatarProps) => {
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
  });

  const token = useUserStore((state) => state.token);
  const userDetails = useUserStore((state) => state.user);

  const theUser = useCallback(async () => {
    const user = await GetUserById(token, userDetails);
    if (user?.message === "Failed to fetch") {
      return;
    }
    setCurrentUser(user.message);
  }, []);

  useEffect(() => {
    theUser();
  });
  return (
    <div
      className={`${
        mobile ? "flex flex-row-reverse justify-start lg:hidden" : "hidden"
      } lg:flex lg:flex-1 lg:justify-end lg:flex-row gap-2 items-center`}
    >
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold leading-6 text-gray-900">
          {currentUser?.firstName}
        </h4>
        <span className="text-[12px] leading-[16px] font-normal text-gray-400">
          {currentUser?.lastName}
        </span>
      </div>
      {/* Profile picture */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="user pic" />
            <AvatarFallback>
              {currentUser &&
                currentUser?.firstName &&
                currentUser?.firstName[0]}
              {currentUser && currentUser?.lastName && currentUser?.lastName[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <UserDropDownMenuContent />
      </DropdownMenu>
    </div>
  );
};
