import { z } from 'zod';

const createNoteSchema = z.object({
    content: z.string(),
});
export type CreateNoteDTO = z.infer<typeof createNoteSchema>;
  