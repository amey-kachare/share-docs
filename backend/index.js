import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();
const app=express();

const port = process.env.PORT || 5000;
const corsOptions = {
    origin: true,
    credentials: true,
};

mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTON_STRING, {
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("MongoDB Connection fault");
    }
};

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// app.use('/auth', authRoute);
// app.use('/users', userRoute);
app.use('/', router);

app.listen(port, () => {
    connect();
    console.log("server is listening on port", port);
});