import getCurrentUser from "@/app/_actions/getCurrentUser";
import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser)
      return new NextResponse("Unaothorized access", { status: 401 });

    const body = await req.json();
    const { startDate, endDate, totalPrice, listingId } = body;
    if (!startDate || !endDate || !totalPrice || !listingId)
      return new NextResponse("Missing Credentials", { status: 400 });

    const listingAndReservations = await client.listing.update({
      where: {
        id: listingId,
      },
      data: {
        reservations: {
          create: {
            userId: currentUser.id,
            startDate,
            endDate,
            totalPrice,
          },
        },
      },
    });

    return NextResponse.json(listingAndReservations);
  } catch (err) {
    console.log("[api/reservation/route.ts]_error]", err);
    return new NextResponse(
      "Internal Error caused by api/reservation/route.ts",
      {
        status: 500,
      }
    );
  }
}
