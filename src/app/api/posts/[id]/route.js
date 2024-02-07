import { connectToDatabase } from "@/ultils/database";
import Post from "@/models/post";
import Category from "@/models/category";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await connectToDatabase();
    const post = await Post.findById(id)
      .populate("categoryId")
      .populate("userId");
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
