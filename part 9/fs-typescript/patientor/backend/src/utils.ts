import type { NewPatientEntry } from './types.ts';
import { Gender } from './types.ts';
import { z } from 'zod';
import type { ZodError } from 'zod';

// Zod schema matching NewPatientEntry (except id)
const patientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().refine(val => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
  ssn: z.string().optional().transform(v => v ?? ''),
  gender: z.enum([Gender.Male, Gender.Female, Gender.Other] as const),
  occupation: z.string(),
});

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  const result = patientSchema.safeParse(object);
  if (!result.success) {
    const messages = (result.error as ZodError).issues.map(i => i.message).join(', ');
    throw new Error('Incorrect data: ' + messages);
  }
  return result.data;
};

export default toNewPatientEntry;


