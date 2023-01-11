import { model, Schema } from 'mongoose'

const transcationSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0.01 },
  type: { type: String, required: true, lowercase: true },
  category: { type: String, required: true },
  date: { type: Number, required: true },
})

export const Transactions = model('transactions', transcationSchema)
