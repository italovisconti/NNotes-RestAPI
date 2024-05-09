import { z } from 'zod';

const createNoteSchema = z.object({
    title: z.string(),
    content: z.string(),
});
export type CreateNoteDTO = z.infer<typeof createNoteSchema>;

const updateNoteSchema = z.object({
    _id: z.string(),
    title: z.string(),
    content: z.string(),
});
export type UpdateNoteDTO = z.infer<typeof updateNoteSchema>;

const deleteNoteSchema = z.object({
    _id: z.string(),
});
export type DeleteNoteDTO = z.infer<typeof deleteNoteSchema>;
  