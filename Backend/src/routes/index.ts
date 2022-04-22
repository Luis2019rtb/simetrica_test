import userRouter from './v1/user';
import { Router } from 'express';

const v1Router = Router();

v1Router.use('/v1',userRouter)

export default v1Router