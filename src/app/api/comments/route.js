import { connectToDatabase } from "@/ultils/database";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";
import Post from "@/models/post";
import User from "@/models/user";
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");
  console.log(postId);
  try {
    await connectToDatabase();
    const comments = await Comment.find({ postId: postId }).populate("userId");
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const POST = async (request) => {
  const { desc, userId, postId } = await request.json();
  if (!userId) {
    return new NextResponse(
      JSON.stringify({ message: "User is required" }, { status: 401 })
    );
  }
  try {
    await connectToDatabase();
    const newComment = new Comment({ desc, userId, postId });
    await newComment.save();
    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
