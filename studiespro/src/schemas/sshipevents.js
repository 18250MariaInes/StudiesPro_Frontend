import { schema } from 'normalizr';


export const sshipevent = new schema.Entity(
  'sshipevents',
);
export const sshipevents = new schema.Array(sshipevent);