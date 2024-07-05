import express from "express";
import cors from "cors";
import "dotenv/config"
import {router} from './note/note.router'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import db from "./mongo"
import defaults from "./note/utils/defaults";

const PORT = process.env.PORT || 3001;
const DB_URI = <string>process.env.DB_URI || "mongodb://mongodb:27017/";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

console.log('Connecting to Database');
console.log('PORT:', PORT);
console.log('DB_URI:', DB_URI);

db().then(()=> console.log('Connected to Database'));
app.listen(Number(PORT), '0.0.0.0', async () => {
  await defaults.create()
  console.log(`Server ready on PORT ${PORT}`);
});

