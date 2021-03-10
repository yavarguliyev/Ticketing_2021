import { Subjects } from './enums/enum-types';

interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    orderId?: string;
  }
}

export { TicketUpdatedEvent };