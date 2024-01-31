### React lab 1

This is a laboratory project to study the web app creation based on React

#### Environment variables:
```
    BE_DB_USER
    BE_DB_PASSWORD
    BE_PORT (5555 by default)
```

#### Back-end endpoints:

```
POST /book [title, author, publishYear]
GET  /books
GET  /books/:id [book_id]
PUT  /book/:id [title, author, publishYear]
DELETE  /book/:id
```

#### CORS settings:
```
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
```
