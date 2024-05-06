import { Request, Response, Router } from "express";
import { getNotes, createNote } from "./note.controller";

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", createNote);

export { router };