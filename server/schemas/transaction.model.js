import { Schema, model, SchemaTypes } from 'mongoose';

const transaction = new Schema(
  {
    date: {
      type: Date,
      required: [true, 'Transaction date is required'],
    },

    income: {
      type: Boolean,
      required: [true, 'Transaction type is required'],
      default: false,
    },

    category: {
      type: String,
      required: [true, 'Transaction category is required'],
    },

    comment: {
      type: String,
      // required: [true, "Transaction comment is required"],
    },
    sum: {
      type: Number,
      required: [true, 'Transaction amount is required'],
      min: 0,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model('transaction', transaction, 'transactions');

export default Transaction;
