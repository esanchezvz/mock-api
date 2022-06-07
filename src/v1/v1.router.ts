import { Router } from 'express';
import { userRouter } from '@/v1/user';

const v1Router = Router();

// Routes
v1Router.get('/', (_req, res) => res.status(200).json({ message: 'Ping successful.' }));
v1Router.use('/users', userRouter);

export default v1Router;
