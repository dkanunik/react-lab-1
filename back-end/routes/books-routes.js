import { Book } from '../models/book-model.js'

const router = express.Router();

router.post('', async (request, response) => {
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
        console.log(e.message);
        response.status(500).send({
            message: e.message
        });
    }
});

router.get('/', async (request, response) => {
    try {
        const books: Array<Book> = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (e) {
        console.log(e.message);
        response.status(500).send({
            message: e.message
        });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book: Array<Book> = await Book.findById(id);
        return response.status(200).json(book);
    } catch (e) {
        console.log(e.message);
        response.status(500).send({
            message: e.message
        });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'The following arguments are mandatory: title, author, publishYear'
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: `The book with the "${id}" id hasn't been found` });
        }
        return response.status(200).send({ message: `The book with the "${id}" id has been updated successfully` })
    } catch (e) {
        console.log(e.message);
        response.status(500).send({
            message: e.message
        });
    }
});

router.delete(`/:id`, async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: `The book with the "${id}" id hasn't been found` });
        }
        return response.status(200).send({ message: `The book with the "${id}" id has been deleted` })
    } catch (e) {
        console.log(e.message);
        response.status(500).send({
            message: e.message
        });
    }
});


export default router;
