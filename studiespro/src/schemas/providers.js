import { schema } from 'normalizr';


export const provider = new schema.Entity(
  'providers',
);
export const providers = new schema.Array(provider);
