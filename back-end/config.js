export const PORT = process.env.BE_DB_USER || 5555;

export const DB_URL = `mongodb+srv://${process.env.BE_DB_USER}:${process.env.BE_DB_PASSWORD}`
    +`@books-store.v9uccy4.mongodb.net/?retryWrites=true&w=majority`;
