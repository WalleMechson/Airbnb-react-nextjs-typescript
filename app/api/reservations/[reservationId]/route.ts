import getCurrentUser from "@/app/_actions/getCurrentUser";
import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { reservationId: string } }
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser)
      return new NextResponse("Unaothorized access", { status: 401 });

    const { reservationId } = params;

    if (!reservationId)
      return new NextResponse("Missing Credentials", { status: 400 });

    const reservation = await client.reservation.delete({
      where: {
        id: reservationId,
        OR: [
          { userId: currentUser.id },
          { listing: { userId: currentUser.id } },
        ],
      },
    });

    return NextResponse.json(reservation);
  } catch (err) {
    console.log("[api/reservation/[reservationId]/route.ts]_error]", err);
    return new NextResponse(
      "Internal Error caused by api/reservation/[reservationId]/route.ts",
      {
        status: 500,
      }
    );
  }
}
