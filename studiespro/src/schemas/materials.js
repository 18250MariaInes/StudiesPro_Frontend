import { schema } from 'normalizr';


export const material = new schema.Entity(
  'materials',
);
export const materials = new schema.Array(material);
