import express, { json } from 'express';
const app = express();
const port = 3001;

app.use(json());

//require routes
app.use('/', require('./routes'));

app.listen(port, () => console.log('Listening on port ', port));
