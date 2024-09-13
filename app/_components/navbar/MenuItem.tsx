"use client";

import React from "react";

interface MenuItemInterface {
  onClick: () => void;
  label: string;
  icon: React.ReactElement;
}

const MenuItem = ({ onClick, label, icon }: MenuItemInterface) => {
  return (
    <div
      onClick={onClick}
      className="px-3 py-4 hover:bg-neutral-100 transition font-semibold flex gap-x-4 items-center"
    >
      {icon} {label}
    </div>
  );
};

export default MenuItem;
