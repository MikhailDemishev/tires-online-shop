import { z } from 'zod';
import type { supportRequestSchema } from '../schemas/supportRequestSchema';

export type SupportRequestFormType = z.infer<typeof supportRequestSchema>;
