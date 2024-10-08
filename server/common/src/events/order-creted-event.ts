import { OrderStatus, Subjects } from './enums/enum-types';

interface OrderCreatedEvent {
  subject: Subjects.OrderCreated,
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}

export { OrderCreatedEvent };