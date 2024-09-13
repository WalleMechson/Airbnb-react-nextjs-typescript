import getCurrentUser from "@/app/_actions/getCurrentUser";
import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser)
      return new NextResponse("Unauthorized access (user not found)", {
        status: 401,
      });
    const { listingId } = params;

    if (!listingId || typeof listingId !== "string")
      return new NextResponse("Missing listingId (or Invalid type)", {
        status: 400,
      });

    const listing = await client.listing.deleteMany({
      where: {
        id: listingId,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(listing);
  } catch (err) {
    console.log("[api/listings/[listingId]/route.ts]_error]", err);
    return new NextResponse(
      "Internal Error caused by api/listings/[listingId]/route.ts",
      {
        status: 500,
      }
    );
  }
}
