import { Note } from './note.model';
import { CreateNoteDTO, UpdateNoteDTO } from './note.dto';


async function find() {
    return await Note.find({active: true});
}

async function create(record: CreateNoteDTO) {
    console.log('RECORD: ', record);
    const note = new Note({...record});
    await note.save();
    return await Note.find({active: true});
}

async function update(record: UpdateNoteDTO) {
    console.log('RECORD: ', record);
    const note = await Note.findOneAndUpdate({_id: record._id},{...record});
    if(!note) return undefined;
    return await Note.find({active: true});
}

async function deleteNote(_id: string) {
    console.log('_id: ', _id);
    const note = await Note.deleteOne({_id: _id});
    if(note.deletedCount === 0) return {message: 'Error, note not found', status: 404}
    return {message: 'Delete succesfull'};
}

async function getNoteById(_id: string) {
    console.log('_id: ', _id);
    const note = await Note.findOne({_id: _id});
    if(!note) return {message: 'Error, note not found', status: 404}
    return {message: note, status: 200};
}

export default {
    find,
    create,
    update,
    deleteNote,
    getNoteById
}