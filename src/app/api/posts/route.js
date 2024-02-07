import { connectToDatabase } from "@/ultils/database";
import Post from "@/models/post";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const cat = searchParams.get("cat") || "";
  const POST_PER_PAGE = 3;
  try {
    await connectToDatabase();
    const posts = await Post.find()
      .skip(POST_PER_PAGE * (page - 1))
      .limit(POST_PER_PAGE)
      .exec();
    const count = await Post.countDocuments().exec();
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
