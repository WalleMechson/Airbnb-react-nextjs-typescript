import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import client from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    if (!name || !email || !password)
      return new NextResponse("Missing Credentials", { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await client.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    console.log("[api/register/route.ts]_error]", err);
    return new NextResponse("Internal Error caused by api/register/route.ts", {
      status: 500,
    });
  }
}
