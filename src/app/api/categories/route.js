import { connectToDatabase } from "@/ultils/database";
import Category from "@/models/category";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  try {
    await connectToDatabase();
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
