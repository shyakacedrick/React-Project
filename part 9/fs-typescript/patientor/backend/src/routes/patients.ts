import express, { type Response } from 'express';
import patientService from '../services/patientService.ts';
import type { NonSensitivePatientEntry, Patient, NewPatientEntry } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientEntry[]>) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req, res: Response<Patient>) => {
  const newPatientData = req.body as NewPatientEntry;
  const addedPatient = patientService.addPatient(newPatientData);
  res.json(addedPatient);
});

export default router;
