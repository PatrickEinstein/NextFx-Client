import { UserDropDownMenuContent } from "./UserDropDownMenuContent";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:flex-row lg:gap-2 lg:items-center">
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
