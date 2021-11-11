import express from 'express';
import mongoose from 'mongoose';

import config from '../src/config/config.js';
import routes from './routes.js';


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(routes);

mongoose.connect(config.DB_CONNECTION)
    .then(() => {
        app.listen(config.port, () => console.log(`Server is working on port ${config.port}...`));
    })
    .catch(err => {
        console.log('Application init failed', err);
    });