"use client";

import Search from "./Search";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/_types";
import Categories from "./Categories";

interface NavbarInterface {
  currentUser: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarInterface) => {
  return (
    <div className="fixed bg-white z-10 w-full shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
