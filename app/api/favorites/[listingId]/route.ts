import getCurrentUser from "@/app/_actions/getCurrentUser";
import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser)
      return new NextResponse("Unauthorized access (user not found)", {
        status: 401,
      });

    const listingId = params?.listingId;

    if (!listingId)
      return new NextResponse("Missing Listing Id", { status: 400 });

    if (typeof listingId !== "string")
      return new NextResponse("Missing Listing Id", { status: 400 });

    let favoriteIds = [...(currentUser?.favoriteIds || [])];

    favoriteIds.push(listingId);

    const user = await client.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    console.log("[api/favorites/[listingId]/route.ts]_error]", err);
    return new NextResponse(
      "Internal Error caused by api/favorites/[listingId]/route.ts",
      {
        status: 500,
      }
    );
  }
}

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

    const listingId = params?.listingId;

    if (!listingId)
      return new NextResponse("Missing Listing Id", { status: 400 });

    if (typeof listingId !== "string")
      return new NextResponse("Missing Listing Id", { status: 400 });

    let favoriteIds = [...(currentUser?.favoriteIds || [])];

    favoriteIds = favoriteIds.filter((id) => id !== listingId);

    const user = await client.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    console.log("[api/favorites/[listingId]/route.ts]_error]", err);
    return new NextResponse(
      "Internal Error caused by api/favorites/[listingId]/route.ts",
      {
        status: 500,
      }
    );
  }
}
