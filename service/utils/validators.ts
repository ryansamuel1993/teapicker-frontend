import { z } from 'zod';

export function validateEmail(email: string | undefined): boolean {
  const emailSchema = z.string().email();

  return emailSchema.safeParse(email).success;
}

export function validateContactNumber(contact: string | undefined): boolean {
  const contactSchema = z
    .string()
    .min(6, { message: 'Contact number must be at least 6 digits' })
    .regex(/^\+?\d+$/, { message: 'Contact number must be numeric' });

  return contactSchema.safeParse(contact).success;
}

export function validateName(name: string | undefined): boolean {
  const nameSchema = z.string().trim().min(1, { message: 'Name is required' });

  return nameSchema.safeParse(name).success;
}
