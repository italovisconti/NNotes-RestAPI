import { FilterQuery } from 'mongoose';
import { INote, Note } from './note.model';
import { CreateNoteDTO } from './note.dto';


async function find() {
    return Note.find();
}

async function create(record: CreateNoteDTO) {
    console.log('RECORD: ', record);
    const note = new Note({...record});
    await note.save();
}

export default {
    find,
    create
}