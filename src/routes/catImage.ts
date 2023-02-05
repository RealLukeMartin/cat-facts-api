import { Router } from 'express';

import { catImageController } from '../controllers';

export function createCatImageRoutes() {
  const router = Router();

  router.get('/', catImageController);

  return router;
}
