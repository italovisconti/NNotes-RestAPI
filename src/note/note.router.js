"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const note_controller_1 = require("./note.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/notes", note_controller_1.getNotes);
router.get("/note", note_controller_1.getNoteById);
router.post("/notes", note_controller_1.createNote);
router.patch("/notes", note_controller_1.updateNote);
router.delete("/notes", note_controller_1.deleteNote);