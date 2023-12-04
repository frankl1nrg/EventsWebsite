// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Reservation, User, Event } = initSchema(schema);

export {
  Category,
  Reservation,
  User,
  Event
};