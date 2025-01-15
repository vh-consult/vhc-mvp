import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiLogOut } from "react-icons/bi";
import { logout } from "@/lib/actions/user.actions";

const UserButton = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <BiLogOut onClick={async ()=>await logout()} className="w-7 h-7 cursor-pointer"/>
    </div>
  );
};

export default UserButton;
