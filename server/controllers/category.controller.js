import service from "../services/category.service.js";

const add = async (req, res, next) => {
  const { name } = req.body;

  try {
    const result = await service.addCategory({
      name,
    });

    res.status(201).json({
      status: "success",
      code: 201,
      data: { category: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const results = await service.getCategories();
    const categories = results.map((category) => category.name);
    res.json({
      status: "success",
      code: 200,
      data: {
        categories,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const categoryCtrl = {
  getAll,
  add,
};

export default categoryCtrl;
