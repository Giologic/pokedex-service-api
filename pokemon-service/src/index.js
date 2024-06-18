import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import dotenv from 'dotenv';
import Pocketbase from 'pocketbase';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
