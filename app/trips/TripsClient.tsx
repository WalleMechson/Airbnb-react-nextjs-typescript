"use client";

import { useRouter } from "next/navigation";
import Container from "../_components/Container";
import Heading from "../_components/Heading";
import { SafeReservation, SafeUser } from "../_types";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import ListingCard from "../_components/listings/ListingCard";

interface TripsClientInterface {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient = ({ reservations, currentUser }: TripsClientInterface) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      console.log(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <div className="pt-[20px]">
      <Container>
        <Heading
          title="Trips"
          subtitle="Where you've been and where you're going"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {reservations.map((reservation) => (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel="Cancel reservation"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TripsClient;
