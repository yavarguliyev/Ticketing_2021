import { Publisher, Subjects, OrderCreatedEvent } from '@yavartickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}