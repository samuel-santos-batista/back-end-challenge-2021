import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container';

import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

import { createConnection } from '@shared/infra/db/mongoose';
import { handlingErrors } from '@shared/infra/http/middlewares/handlingErrors';

import rateLimiter from './middlewares/rateLimiter';
import { router } from './routes';

createConnection();
const app = express();
const http = createServer(app);
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use(rateLimiter);
app.use(router);
app.use(handlingErrors);

export { app, http };
