import { db } from "@/lib/db";
import { apiRequestValidator } from "@/lib/validator/dashboard/membership/api-request";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: number;
    };
  }
) => {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const id = params.id;

  const body = await req.json();
  try {
    const { name, address } = apiRequestValidator.parse(body);
    const membership = await db.membership.update({
      where: {
        id: parseInt(id.toString()),
      },
      data: {
        name,
        address,
      },
    });

    return NextResponse.json(
      {
        error: null,
        data: membership,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json("Unprocessable entity", { status: 422 });
  }
};
