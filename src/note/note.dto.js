"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createNoteSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
const updateNoteSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
const deleteNoteSchema = zod_1.z.object({
    _id: zod_1.z.string(),
});
