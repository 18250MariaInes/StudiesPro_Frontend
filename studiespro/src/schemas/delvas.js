import { schema } from 'normalizr';


export const delva = new schema.Entity(
  'delvas',
);
export const delvas = new schema.Array(delva);