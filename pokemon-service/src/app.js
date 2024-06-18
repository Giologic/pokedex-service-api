import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/pokemonRoutes.js';
import pb from './services/pocketbase.js';

const app = express();




app.use(bodyParser.json());
app.use('/api', routes);

export default app;
