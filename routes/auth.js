import express from "express";
import { register, login } from "../controllers/authController.js";
import { createError } from "../utils/error.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello, this is auth endpoint");
// });

router.post("/register", register);
router.post("/login", login);
export default router;
