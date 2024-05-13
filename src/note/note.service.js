"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("./note.model");
function find() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield note_model_1.Note.find({ active: true });
    });
}
function create(record) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('RECORD: ', record);
        const note = new note_model_1.Note(Object.assign({}, record));
        yield note.save();
        return yield note_model_1.Note.find({ active: true });
    });
}
function update(record) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('RECORD: ', record);
        const note = yield note_model_1.Note.findOneAndUpdate({ _id: record._id }, Object.assign({}, record));
        if (!note)
            return undefined;
        return yield note_model_1.Note.find({ active: true });
    });
}
function deleteNote(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('_id: ', _id);
        const note = yield note_model_1.Note.deleteOne({ _id: _id });
        if (note.deletedCount === 0)
            return { message: 'Error, note not found', status: 404 };
        return { message: 'Delete succesfull' };
    });
}
function getNoteById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('_id: ', _id);
        const note = yield note_model_1.Note.findOne({ _id: _id });
        if (!note)
            return { message: 'Error, note not found', status: 404 };
        return { message: note, status: 200 };
    });
}
exports.default = {
    find,
    create,
    update,
    deleteNote,
    getNoteById
};
