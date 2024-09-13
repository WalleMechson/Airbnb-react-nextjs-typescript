"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryRow from "../CategoryRow";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    description: "This property is close to the beach",
    icon: TbBeach,
  },
  {
    label: "Windmills",
    description: "This property has windmills",
    icon: GiWindmill,
  },
  {
    label: "Modern",
    description: "This property is modern!",
    icon: MdOutlineVilla,
  },
  {
    label: "Countryside",
    description: "This property is in the countryside!",
    icon: TbMountain,
  },
  {
    label: "Pools",
    description: "This property has a pool!",
    icon: TbPool,
  },
  {
    label: "Islands",
    description: "This property is on an island!",
    icon: GiIsland,
  },
  {
    label: "Lake",
    description: "This property is close to a lake!",
    icon: GiBoatFishing,
  },
  {
    label: "Skiing",
    description: "This property has skiing activities!",
    icon: FaSkiing,
  },
  {
    label: "Castles",
    description: "This property is in a castle!",
    icon: GiCastle,
  },
  {
    label: "Camping",
    description: "This property has camping activities!",
    icon: GiForestCamp,
  },
  {
    label: "Arctic",
    description: "This property is in Arctic climate!",
    icon: BsSnow,
  },
  {
    label: "Cave",
    description: "This property is in a cave!",
    icon: GiCaveEntrance,
  },
  {
    label: "Desert",
    description: "This property is in the desert!",
    icon: GiCactus,
  },
  {
    label: "Barns",
    description: "This property is in the barn!",
    icon: GiBarn,
  },
  {
    label: "Lux",
    description: "This property is luxurious!",
    icon: IoDiamond,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const categoryParams = params?.get("category");
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <Container>
      <div className="pt-4 flex flex-row justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryRow
            key={category.label}
            label={category.label}
            // description={category.description}
            icon={category.icon}
            selected={categoryParams === category?.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
