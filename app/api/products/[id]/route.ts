import { NextRequest, NextResponse } from "next/server";
import { product } from "../data"; 

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id); 

  const findProduct = product.find((prod) => prod.id === id);

  return NextResponse.json(findProduct);
}