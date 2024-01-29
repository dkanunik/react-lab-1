import express from "express";
import mongoose from "mongoose";

import {DB_URL, PORT} from "./config.js"
import {Book} from "./models/book-model.js";

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome!');
});

app.post('/book', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'The following arguments are mandatory: title, author, publishYear'
            });
        }

        const newBookData = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }

        const book = await Book.create(newBookData);

        return response.status(201).send(book);
    } catch (e) {
        console.log(e);
        response.status(500).send({
            message: e.message
        });
    }
});

mongoose.connect(DB_URL).then(() => {
    console.log('DB connection has been established');
    app.listen(PORT, () => {
        console.log(`App is listening the port: ${PORT}`)
    });
}).catch((e) => {
    console.log(e);
});
