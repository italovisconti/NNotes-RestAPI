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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteById = exports.deleteNote = exports.updateNote = exports.createNote = exports.getNotes = void 0;
const note_service_1 = __importDefault(require("./note.service"));
function getNotes(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notes = yield note_service_1.default.find();
            res.status(200).json(notes);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.getNotes = getNotes;
function createNote(_a, res_1, next_1) {
    return __awaiter(this, arguments, void 0, function* ({ body }, res, next) {
        try {
            console.log('BODY: ', body);
            const notes = yield note_service_1.default.create(body);
            res.status(200).json(notes);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.createNote = createNote;
function updateNote(_a, res_1, next_1) {
    return __awaiter(this, arguments, void 0, function* ({ body }, res, next) {
        try {
            console.log('BODY: ', body);
            const notes = yield note_service_1.default.update(body);
            if (notes)
                res.status(200).json(notes);
            res.status(404).json('Note not found');
        }
        catch (err) {
            next(err);
        }
    });
}
exports.updateNote = updateNote;
function deleteNote(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _id = req.query._id;
            const notes = yield note_service_1.default.deleteNote(_id);
            if (notes.status)
                res.status(404).json(notes.message);
            res.status(200).json(notes.message);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.deleteNote = deleteNote;
function getNoteById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _id = req.query._id;
            const notes = yield note_service_1.default.getNoteById(_id);
            if (notes.status === 404)
                res.status(404).json(notes.message);
            res.status(200).json(notes.message);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.getNoteById = getNoteById;
