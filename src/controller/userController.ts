import { Request, Response } from 'express';
import User from '../models/user';
import { CreateUserInput } from '../schema/userSchema';
import { createUser } from '../service/userService';
import logger from '../utils/logger';

export const createUserHandler = async (req: Request<{}, {}, CreateUserInput['body']>, res: Response) => {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
};
