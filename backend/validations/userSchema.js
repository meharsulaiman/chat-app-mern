import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z.string().min(3, 'Full name is too short'),
  username: z
    .string()
    .min(3, 'Username is too short')
    .max(20, 'Username is too long')
    .regex(
      /^[a-zA-Z0-9_.]+$/,
      'Username is not valid (only letters, numbers, _ and . are allowed)'
    ),
  password: z.string().min(6, 'Password is too short'),
  confirmPassword: z.string(),
  gender: z.enum(['male', 'female', 'other']),
});

export const loginSchema = z.object({
  username: z.string().min(3, 'Username is too short'),
  password: z.string().min(6, 'Password is too short'),
});
