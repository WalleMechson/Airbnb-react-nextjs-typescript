import ClientFix from "@/lib/ClientFix";
import EmptyState from "../_components/EmptyState";
import getFavoriteListings from "../_actions/getFavoriteListings";
import getCurrentUser from "../_actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientFix>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientFix>
    );
  }

  if (listings.length == 0) {
    return (
      <ClientFix>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientFix>
    );
  }
  
  return (
    <ClientFix>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientFix>
  );
};

export default ListingPage;
