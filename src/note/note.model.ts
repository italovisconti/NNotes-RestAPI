import { Document, ObjectId, Schema, model } from 'mongoose';

export interface INote {
    _id: any;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
}

export type NoteDocument = Document<ObjectId, any, INote> & INote;

const noteSchema = new Schema<INote>(
  {
    content: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Note = model<INote>('Event', noteSchema);
