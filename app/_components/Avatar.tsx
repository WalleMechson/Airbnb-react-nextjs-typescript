"use client";

import Image from "next/image";

interface AvatarInterface {
  src: string | undefined | null;
}

const Avatar = ({ src }: AvatarInterface) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
