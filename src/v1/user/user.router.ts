import { Router } from 'express';

import { UserController } from '.';

const userRouter = Router();

// Routes
userRouter.get('/', UserController.getAll);

export default userRouter;
