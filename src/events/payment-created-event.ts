import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    chargeId: string;
    order: {
      id: string;
      price: number;
    };
    user: {
      id: string;
      email: string;
    };
  };
}
