import type { Request, Response, NextFunction } from 'express';
import noteService from './note.service';

export async function getNotes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const notes = await noteService.find();
    res.status(200).json(notes);
  } catch (err) {
    next(err);
  }
}

export async function createNote(
  {body}: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log('BODY: ', body);
    const notes = await noteService.create(body);
    res.status(200).json(notes);
  } catch (err) {
    next(err);
  }
}

export async function updateNote(
  {body}: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log('BODY: ', body);
    const notes = await noteService.update(body);
    if (notes) res.status(200).json(notes);
    res.status(404).json('Note not found');
  } catch (err) {
    next(err);
  }
}

export async function deleteNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const _id = req.query._id as string
    const notes = await noteService.deleteNote(_id);
    if (notes.status) res.status(404).json(notes.message);
    res.status(200).json(notes.message);
  } catch (err) {
    next(err);
  }
}

export async function getNoteById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const _id = req.query._id as string
    const notes = await noteService.getNoteById(_id);
    if (notes.status === 404) res.status(404).json(notes.message);
    res.status(200).json(notes.message);
  } catch (err) {
    next(err);
  }
}