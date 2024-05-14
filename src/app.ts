import express from "express";
import cors from "cors";
import "dotenv/config"
import {router} from './note/note.router'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import db from "./mongo"
import defaults from "./note/utils/defaults";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

db().then(()=> console.log('Connected to Database'));
app.listen(Number(PORT), '0.0.0.0', async () => {
  await defaults.create()
  console.log(`Server ready on PORT ${PORT}`);
});

