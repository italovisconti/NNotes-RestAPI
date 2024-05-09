import { Request, Response, Router } from "express";
import { getNotes, createNote, updateNote, deleteNote } from "./note.controller";

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", createNote);
router.patch("/notes", updateNote);
router.delete("/notes", deleteNote);

export { router };