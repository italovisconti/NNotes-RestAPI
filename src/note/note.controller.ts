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