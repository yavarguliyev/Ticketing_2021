import { Subjects } from './enums/enum-types';

interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled,
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}

export { OrderCancelledEvent };