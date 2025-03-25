import express from 'express';
import { intializeDatabase } from './util/database.js';

const app = express();
app.use(express.json());

async function startServer() {
    await intializeDatabase();
    app.listen(3000, () => {
        console.log("Server runs on port 3000");
    });
};

startServer();

