import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
