import { Router } from 'express'
import { GetTransactions } from './services/get-transactions'

export const routes = Router()

routes.get('/transactions', new GetTransactions().handle)
