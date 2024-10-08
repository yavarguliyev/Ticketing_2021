import mongoose from 'mongoose';

interface PaymentsAttrs {
  orderId: string;
  stripeId: string;
}

interface PaymentDoc extends mongoose.Document {
  orderId: string;
  stripeId: string;
}

interface PaymentModel extends mongoose.Model<PaymentDoc> {
  build(attrs: PaymentsAttrs): PaymentDoc;
}

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  stripeId: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform(doc, ret) {
      ret._id = ret.id;
      delete ret._id;
    }
  }
});

paymentSchema.statics.build = (attrs: PaymentsAttrs) => {
  return new Payment(attrs);
};

const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', paymentSchema);

export { Payment };