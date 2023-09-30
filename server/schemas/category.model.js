import { Schema, model } from 'mongoose';

const category = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
    },

    color: {
      type: String,
      required: [true, 'Category name is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Category = model('category', category, 'categories');

export default Category;
