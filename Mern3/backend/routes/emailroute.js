import express from "express";
import { createEmail, deleteEmail, getAllEmailsById } from "../controllers/emailcontroller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createEmail);
router.route("/:id").delete(isAuthenticated, deleteEmail);
router.route("/getAllEmails").get(isAuthenticated, getAllEmailsById);

export default router;
