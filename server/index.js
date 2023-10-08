import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
// import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
// import cors from "cors";
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import listingRoute from './routes/listingRoute.js';
import path from 'path';

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
const PORT = process.env.PORT_NUMBER;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("App is connected to the MongoDB!!!");
  })
  .catch((error) => {
    console.log(error);
  });

  const __dirname = path.resolve();


 app.use('/api/user', userRoute);
 app.use('/api/auth', authRoute);
 app.use('/api/listing', listingRoute);

 app.use(express.static(path.join(__dirname, '/client/dist')));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
 })


app.listen(PORT, () => {
  console.log("App is running on port!!! " + PORT);
});


// middleware;
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).send({
    success: false,
    statusCode,
    message,
  });
});
