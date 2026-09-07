
import request from 'supertest';
import { type Application } from 'express';
import app from '../index';

// Helper to generate a valid patient payload (without id)
const validPatient = {
  name: 'Test Patient',
  dateOfBirth: '1990-01-01',
  ssn: '123-45-6789',
  gender: 'male',
  occupation: 'engineer',
};

describe('POST /api/patients', () => {
  it('creates a patient with valid data', async () => {
    const response = await request(app as Application)
      .post('/api/patients')
      .send(validPatient)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    // The response should contain the generated id and the same fields
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body: { id: string } & typeof validPatient = response.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(body).toMatchObject({ ...validPatient, id: expect.any(String) });
  });

  it('rejects a patient with invalid gender', async () => {
    const invalid = { ...validPatient, gender: 'invalidGender' };
    const response = await request(app as Application)
      .post('/api/patients')
      .send(invalid)
      .set('Accept', 'application/json');
    expect(response.status).toBe(400);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const errorMsg: string = response.body.error;
    expect(errorMsg).toContain('Incorrect data');
  });
});
