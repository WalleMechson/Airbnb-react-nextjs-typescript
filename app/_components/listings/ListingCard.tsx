"use client";

import useCountries from "@/app/_hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/_types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";
import { XIcon } from "lucide-react";
import { buttonIconProps } from "@/lib/utils";

interface ListingCardInterface {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard = ({
  data,
  reservation,
  onAction,
  actionLabel,
  disabled,
  actionId = "",
  currentUser,
}: ListingCardInterface) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;
      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) return reservation.totalPrice;

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing"
            src={data.imageSrc}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">/ Night</div>}
        </div>
        {onAction && actionLabel && (
          <>
            <Button
              disabled={disabled}
              icon={
                actionLabel == "Cancel reservation" ? (
                  <XIcon size={20} className="absolute left-[12px]" />
                ) : actionLabel == "Cancel guest reservation" ? (
                  <XIcon size={20} className="absolute left-[12px]" />
                ) : actionLabel == "Delete property" ? (
                  <XIcon size={20} className="absolute left-[12px]" />
                ) : null
              }
              small
              label={actionLabel}
              onClick={handleCancel}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
