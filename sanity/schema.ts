import { type SchemaTypeDefinition } from 'sanity';
import user from './schemaTypes/user';
import post from './schemaTypes/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, user],
};
