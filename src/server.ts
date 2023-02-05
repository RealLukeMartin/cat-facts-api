import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { config } from './config';
import { createRestRoutes } from './routes';

export async function startServer() {
  const app = express();

  app.use(
    cors({
      origin: config.allowedOrgin,
    }),
  );
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/', createRestRoutes());

  return app;
}
