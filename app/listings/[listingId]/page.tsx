import getCurrentUser from "@/app/_actions/getCurrentUser";
import getListingById from "@/app/_actions/getListingById";
import EmptyState from "@/app/_components/EmptyState";
import ClientFix from "@/lib/ClientFix";
import ListingClient from "./ListingClient";
import getReservations from "@/app/_actions/getReservations";

const page = async ({ params }: { params: { listingId: string } }) => {
  const listing = await getListingById({ params });
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientFix>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientFix>
    );
  }


  
  if (!listing) {
    return (
      <ClientFix>
        <EmptyState />
      </ClientFix>
    );
  }

  return (
    <ClientFix>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </ClientFix>
  );
};

export default page;
