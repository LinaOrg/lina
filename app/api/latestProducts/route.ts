import { NextResponse } from "next/server";
import mockData from "./mock.json";

export async function GET() {
  return NextResponse.json(mockData.latestProducts);
}
