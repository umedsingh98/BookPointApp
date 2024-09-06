import express from "express";
import { getBook } from "../controllers/book_controller.js";

const router = express.Router();

router.get("/bookportal", getBook);

export default router;