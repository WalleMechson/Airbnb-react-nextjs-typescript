import ClientFix from "@/lib/ClientFix";
import EmptyState from "../_components/EmptyState";
import getCurrentUser from "../_actions/getCurrentUser";
import getListings from "../_actions/getListings";
import PropertiesClient from "./PropertiesClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientFix>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientFix>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientFix>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      </ClientFix>
    );
  }

  return (
    <ClientFix>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientFix>
  );
};

export default TripsPage;
