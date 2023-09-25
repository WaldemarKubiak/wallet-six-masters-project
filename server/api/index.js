import express from "express";

import userRouter from "./user.router.js";
import categoryRouter from "./category.router.js";
import transactionRouter from "./transaction.router.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/transactions", transactionRouter);

export default router;
