import { Request, Response } from 'express'

import { Transactions } from '../schemas/transaction'
import { TransactionProps } from '../types/TransactionProps'

export class AddTransaction {
  async handle({ body }: Request<any, any, TransactionProps>, res: Response) {
    const data = body

    await new Transactions(data).save()

    return res.status(201).json(data)
  }
}
