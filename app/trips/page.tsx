import ClientFix from "@/lib/ClientFix";
import EmptyState from "../_components/EmptyState";
import getReservations from "../_actions/getReservations";
import getCurrentUser from "../_actions/getCurrentUser";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientFix>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientFix>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientFix>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you havent reserved any trips."
        />
      </ClientFix>
    );
  }

  return (
    <ClientFix>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientFix>
  );
};

export default TripsPage;
