import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import e from "cors";
import UserRoute from "./routes/UserRoute.js";


const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

app.use(express.json());
app.use(cors());
app.use(UserRoute);

app.listen(5000, () => {console.log("Server started on port 5000")});