import express from "express";
import transactionCtrl from "../controllers/transaction.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, transactionCtrl.get);

router.get("/:id", auth, transactionCtrl.getById);

router.post("/", auth, transactionCtrl.add);

router.put("/:id", auth, transactionCtrl.update);

router.get("/stats/:year/:month", auth, transactionCtrl.getStats);

router.get("/stats/balance", auth, transactionCtrl.getBalance);

export default router;
