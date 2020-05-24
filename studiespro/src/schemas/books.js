import { schema } from 'normalizr';


export const book = new schema.Entity(
  'books',
);
export const books = new schema.Array(book);