import ClientFix from "@/lib/ClientFix";
import getCurrentUser from "../_actions/getCurrentUser";
import getReservations from "../_actions/getReservations";
import ReservationsClient from "./ReservationsClient";
import EmptyState from "../_components/EmptyState";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientFix>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientFix>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientFix>
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties"
        />
      </ClientFix>
    );
  }
  return (
    <ClientFix>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientFix>
  );
};

export default ReservationsPage;
