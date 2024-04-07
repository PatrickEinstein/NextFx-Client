import { UserDropDownMenuContent } from "./UserDropDownMenuContent";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UseAvatarProps = {
  mobile?: boolean;
};

export const UserAvatar = ({ mobile = false }: UseAvatarProps) => {
  return (
    <div
      className={`${
        mobile ? "flex flex-row-reverse justify-start lg:hidden" : "hidden"
      } lg:flex lg:flex-1 lg:justify-end lg:flex-row gap-2 items-center`}
    >
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold leading-6 text-gray-900">
          First Name
        </h4>
        <span className="text-[12px] leading-[16px] font-normal text-gray-400">
          Second Name
        </span>
      </div>
      {/* Profile picture */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="user pic" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <UserDropDownMenuContent />
      </DropdownMenu>
    </div>
  );
};
