import { Request, Response } from 'express'

import { Transactions } from '../schemas/transaction'

export class GetTransactions {
  async handle(req: Request, res: Response) {
    const data = await Transactions.find({})

    return res.status(200).json(data)
  }
}
