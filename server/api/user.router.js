import express from "express";
import userCtrl from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", userCtrl.createUser);

router.post("/login", userCtrl.login);

router.get("/logout", auth, userCtrl.logout);

router.get("/current", auth, userCtrl.getCurrent);

router.get("/verify/:verificationToken", userCtrl.verify);

router.post("/verify", userCtrl.resendEmail);

export default router;
