"use client";

import {
  CalendarIcon,
  HeartIcon,
  HomeIcon,
  LogIn,
  LogOutIcon,
  MailIcon,
  Menu,
  PlaneIcon,
  PlusCircleIcon,
  Router,
} from "lucide-react";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useModalStore from "@/app/_hooks/use-modal-store";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/_types";
import { useRouter } from "next/navigation";

interface NavbarInterface {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: NavbarInterface) => {
  const { onOpen } = useModalStore();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return onOpen("loginModal");
    }
    onOpen("rentModal");
  }, [currentUser, onOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <Menu />

          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  icon={<PlaneIcon className="w-4 h-4" />}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  icon={<HeartIcon className="w-4 h-4" />}
                  label="My favourites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  icon={<CalendarIcon className="w-4 h-4" />}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  icon={<HomeIcon className="w-4 h-4" />}
                  label="My properties"
                />
                <MenuItem
                  onClick={() => onOpen("rentModal")}
                  icon={<PlusCircleIcon className="w-4 h-4" />}
                  label="Airbnb my home"
                />
                <hr />
                <MenuItem
                  onClick={() => signOut()}
                  icon={<LogOutIcon className="w-4 h-4" />}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => onOpen("loginModal")}
                  icon={<LogIn className="w-4 h-4" />}
                  label="Login"
                />
                <MenuItem
                  onClick={() => onOpen("registerModal")}
                  icon={<MailIcon className="w-4 h-4" />}
                  label="Signup"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
