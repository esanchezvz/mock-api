import express, { type Application } from 'express';
import cors, { type CorsOptions } from 'cors';

import config from '@/config';
import coreRouter from '@/core/router';

const app: Application = express();

// Body Parser
app.use(express.json());

// CORS
const corsOptions: CorsOptions = {
  origin: config.originUrl,
};
app.use(cors(corsOptions));

// Routes
app.use('/', coreRouter);

export default app;
