import type { Patient } from '../src/types.ts';
import { Gender } from '../src/types.ts';

const patients: Patient[] = [
  {
    id: 'd2773336-f723-11e9-8f0b-362b9e155667',
    name: 'John McClane',
    dateOfBirth: '1986-07-09',
    ssn: '090786-122X',
    gender: Gender.Male,
    occupation: 'New York cop',
  },
  {
    id: 'd27735cc-f723-11e9-8f0b-362b9e155667',
    name: 'Martin Riggs',
    dateOfBirth: '1979-01-30',
    ssn: '300179-777A',
    gender: Gender.Male,
    occupation: 'Cop',
  },
  {
    id: 'd27736e4-f723-11e9-8f0b-362b9e155667',
    name: 'Hans Gruber',
    dateOfBirth: '1970-04-25',
    ssn: '250470-555L',
    gender: Gender.Male,
    occupation: 'Technocrat',
  },
  {
    id: 'd2773824-f723-11e9-8f0b-362b9e155667',
    name: 'Dana Scully',
    dateOfBirth: '1974-01-05',
    ssn: '050174-432N',
    gender: Gender.Female,
    occupation: 'Forensic Pathologist',
  },
  {
    id: 'd277396e-f723-11e9-8f0b-362b9e155667',
    name: 'Maddox',
    dateOfBirth: '1983-05-30',
    ssn: '300583-123A',
    gender: Gender.Other,
    occupation: 'Anomalous contributor',
  },
];

export default patients;
