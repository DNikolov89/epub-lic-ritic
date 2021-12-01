import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import config from '../src/config/config.js';
import routes from './routes.js';


const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.text());
app.use(routes);

mongoose.connect(config.DB_CONNECTION)
    .then(() => {
        app.listen(config.port, () => console.log(`Server is working on port ${config.port}...`));
    })
    .catch(err => {
        console.log('Application init failed', err);
    });