import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//router
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, your are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, your are logged in and you can delete your account!!");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, your are logged in and you can delete all account!!");
// });

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get single User

router.get("/:id", verifyUser, getUser);

//get all Users

router.get("/", verifyUser, getUsers);

export default router;
