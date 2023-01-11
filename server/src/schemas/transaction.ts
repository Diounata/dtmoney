import { model, Schema } from 'mongoose'

const transcationSchema = new Schema({ name: String })

export const Transactions = model('transactions', transcationSchema)
