import mongoose from "mongoose";
import cors from 'cors';

import {DB_URL, PORT} from "./config.js"
import booksRoutes from './routes/books-routes.js';
import express from "express";

const app = express();

app.use(express.json())

app.use(cors());

/*app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));*/

app.use('/books', booksRoutes);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome!');
});

mongoose.connect(DB_URL).then(() => {
    console.log('DB connection has been established');
    app.listen(PORT, () => {
        console.log(`App is listening the port: ${PORT}`)
    });
}).catch((e) => {
    console.log(e);
});
