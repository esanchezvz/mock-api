import { Router } from 'express';

import { v1Router } from '@/v1';

const coreRouter = Router();

// Routes
coreRouter.use('/v1', v1Router);

export default coreRouter;
