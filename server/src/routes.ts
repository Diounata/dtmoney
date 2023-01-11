import { Router } from 'express'

import { AddTransaction } from './services/add-transaction'
import { GetTransactions } from './services/get-transactions'

export const routes = Router()

routes.get('/transactions', new GetTransactions().handle)
routes.post('/transactions', new AddTransaction().handle)
