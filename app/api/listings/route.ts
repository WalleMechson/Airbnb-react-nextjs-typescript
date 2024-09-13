import { NextResponse } from "next/server";
import client from "@/lib/prismadb";
import getCurrentUser from "@/app/_actions/getCurrentUser";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser)
      return new NextResponse("Unauthorized access (user not found)", {
        status: 401,
      });
    const body = await req.json();
    const {
      category,
      location,
      guestCount,
      roomCount,
      bathroomCount,
      imageSrc,
      price,
      title,
      description,
    } = body;

    for (const item of Object.keys(body)) {
      if (!body[item]) {
        return new NextResponse(`Missing fields (${item})`, { status: 400 });
      }
    }

    const listing = await client.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });

    return NextResponse.json(listing);
  } catch (err) {
    console.log("[api/listings/route.ts]_error]", err);
    return new NextResponse("Internal Error caused by api/listings/route.ts", {
      status: 500,
    });
  }
}
