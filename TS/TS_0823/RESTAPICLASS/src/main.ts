import express from 'express';
import databaseA from './database.js';
const app = express();
const PORT = 8000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`localhost:${PORT}에서 실행`);
    console.log('Customer Data:', databaseA.customer); 
});

