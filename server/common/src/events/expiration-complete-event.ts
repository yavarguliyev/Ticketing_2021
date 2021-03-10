import { Subjects } from './enums/enum-types';

interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  }
}

export { ExpirationCompleteEvent };