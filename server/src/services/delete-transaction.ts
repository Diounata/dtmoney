import { Request, Response } from 'express'
import { Transactions } from '../schemas/transaction'
import { TransactionProps } from '../types/TransactionProps'

export class DeleteTransaction {
  async handle({ body }: Request<any, any, TransactionProps>, res: Response) {
    const data = body

    await Transactions.findByIdAndDelete(data._id)

    return res.status(200).json({ message: `${data._id} was deleted.` })
  }
}
