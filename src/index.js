import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import request from 'request';
import mongoose from 'mongoose';
const app = express();
var mongoDB = process.env.MONGO_SERVER
const _app_folder="./angular/strive-client"
mongoose.connect(mongoDB,{useNewUrlParser: true}); 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send({test :'Hello Hackathon!'});
});

