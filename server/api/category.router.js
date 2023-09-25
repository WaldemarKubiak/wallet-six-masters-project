import express from "express";
import categoryCtrl from "../controllers/category.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, categoryCtrl.getAll);

router.post("/", auth, categoryCtrl.add);

export default router;
