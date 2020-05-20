import { schema } from 'normalizr';


export const teacher = new schema.Entity(
  'teachers',
);
export const teachers = new schema.Array(teacher);
