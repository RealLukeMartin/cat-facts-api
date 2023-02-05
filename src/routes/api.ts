import { Router } from 'express';

import { createCatImageRoutes } from './catImage';
import { createHealthRoutes } from './health';

export function createRestRoutes() {
  const router = Router();

  router.use('/health', createHealthRoutes());
  router.use('/cat-image', createCatImageRoutes());

  return router;
}
