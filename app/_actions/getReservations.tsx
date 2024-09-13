import client from "@/lib/prismadb";

interface getReservationsInterface {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(
  params: getReservationsInterface
) {
  try {
    const { listingId, userId, authorId } = params;

    const query = {
      ...(listingId && { listingId }),
      ...(userId && { userId }),
      ...(authorId && { listing: { userId: authorId } }),
    };

    const reservations = await client.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(String(err));
    }
  }
}
