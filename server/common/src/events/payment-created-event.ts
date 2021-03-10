import { Subjects } from './enums/enum-types';

interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  }
}

export { PaymentCreatedEvent };