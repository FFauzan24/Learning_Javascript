import express from "express";
import {getUser, getUserbyId, saveUser, updateUser, deleteUser} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserbyId);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;