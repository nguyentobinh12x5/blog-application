import Category from "@/models/category";
import { connectToDatabase } from "@/ultils/database";

export const POST = async (request) => {
  const { title, img } = await request.json();
  try {
    await connectToDatabase();
    const newCategory = new Category({ title, img });
    await newCategory.save();
    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new category", { status: 500 });
  }
};
