import { Request, Response, Router } from "express";
import { getNotes, createNote, updateNote, deleteNote, getNoteById } from "./note.controller";

const router = Router();

router.get("/notes", getNotes);
router.get("/note", getNoteById);
router.post("/notes", createNote);
router.patch("/notes", updateNote);
router.delete("/notes", deleteNote);

export { router };