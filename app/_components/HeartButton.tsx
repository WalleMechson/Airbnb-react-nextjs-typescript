import { cn } from "@/lib/utils";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../_types";
import React, { useState } from "react";
import useFavorite from "../_hooks/useFavorite";

interface HeartButtonInterface {
  listingId: string;
  currentUser: SafeUser | null | undefined;
}

const HeartButton = ({ listingId, currentUser }: HeartButtonInterface) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
        "
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={cn(hasFavorited ? "fill-rose-500" : "fill-stone-300")}
      />
    </div>
  );
};

export default HeartButton;
