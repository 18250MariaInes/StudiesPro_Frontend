import { schema } from 'normalizr';


export const exam = new schema.Entity(
  'exams',
);
export const exams = new schema.Array(exam);