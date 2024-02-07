import Post from "@/models/post";
import { connectToDatabase } from "@/ultils/database";

export const POST = async (request) => {
  const post = await request.json();
  try {
    await connectToDatabase();
    const newPosts = new Post(post);
    await newPosts.save();
    return new Response(JSON.stringify(newPosts), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
