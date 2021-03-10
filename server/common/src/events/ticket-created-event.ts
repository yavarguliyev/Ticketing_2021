import { Subjects } from './enums/enum-types';

interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  }
}

export { TicketCreatedEvent };