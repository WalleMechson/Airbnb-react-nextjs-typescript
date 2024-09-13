"use client";

import Heading from "../_components/Heading";
import ListingCard from "../_components/listings/ListingCard";
import { SafeListing, SafeUser } from "../_types";
import Container from "@/app/_components/Container";

interface FavoritesClientInterface {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient = ({
  listings,
  currentUser,
}: FavoritesClientInterface) => {
  return (
    <div className="pt-[20px]">
      <Container>
        <Heading
          title="Favorites"
          subtitle="List of places you have favorited!"
        />
        <div className="mt-10 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FavoritesClient;
