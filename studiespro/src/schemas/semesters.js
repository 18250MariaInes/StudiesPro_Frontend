import { schema } from 'normalizr';


export const semester = new schema.Entity(
  'semesters',
);
export const semesters = new schema.Array(semester);