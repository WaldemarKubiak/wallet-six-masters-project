import Category from "../schemas/category.model.js";

const addCategory = async ({ name }) => {
  return Category.create({ name });
};

const getCategories = async () => {
  return Category.find({});
};
const service = {
  getCategories,
  addCategory,
};

export default service;
