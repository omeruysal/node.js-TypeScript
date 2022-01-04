import { object, string, TypeOf } from 'zod';
export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is mandatory',
    }),
    password: string({
      required_error: 'Password is mandatory',
    }).min(6, 'Password is too short - should be 6 chars minimum'),
    passwordConfirmation: string({
      required_error: 'passwordConfirmation is mandatory',
    }),
    email: string({
      required_error: 'Email is mandatory',
    }).email('Not a valid email'),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
