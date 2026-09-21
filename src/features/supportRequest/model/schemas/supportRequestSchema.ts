import { z } from 'zod';

export const supportRequestSchema = z.object({
  customerName: z
    .string()
    .trim()
    .min(1, 'supportRequest.errors.nameRequired')
    .max(256, 'supportRequest.errors.maxLength256')
    .regex(/^[\p{L}\s'-]+$/u, 'supportRequest.errors.nameInvalid'),

  email: z
    .string()
    .trim()
    .email('supportRequest.errors.invalidEmail')
    .refine(
      (val) => {
        const [local] = val.split('@');
        return local.length <= 64;
      },
      {
        message: 'supportRequest.errors.emailLocalPartMax64',
      },
    ),

  phone: z
    .string()
    .trim()
    .min(10, 'supportRequest.errors.phoneMin10')
    .max(15, 'supportRequest.errors.phoneMax15')
    .regex(/^\+?\d+$/, 'supportRequest.errors.invalidPhone'),

  privacyConsent: z.boolean().refine((value) => value, {
    message: 'supportRequest.errors.privacyConsentRequired',
  }),

  comment: z
    .string()
    .trim()
    .max(256, 'supportRequest.errors.maxLength256')
    .optional(),
});
