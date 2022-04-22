import { Router } from 'express';
import { User } from '../../controllers';
import { UserSchema, requestValidator } from '../../middlewares/index';

const userRouter = Router();

const { findAll, create, update } = User;

const user_route = '/user';

userRouter.get(`${user_route}`, findAll);
userRouter.post(`${user_route}`, UserSchema, requestValidator, create);
userRouter.put(`${user_route}/:idUser`, UserSchema, requestValidator, update);

export default userRouter;