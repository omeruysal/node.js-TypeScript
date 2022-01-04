import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/userController';
import validate from './middleware/validateResource';
import { createUserSchema } from './schema/userSchema';

const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.status(200).send('success');
  });

  app.post('/api/users', validate(createUserSchema), createUserHandler);
};
export default routes;
