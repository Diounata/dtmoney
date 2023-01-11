import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { routes } from './routes'

const app = express()
const PORT = 4000
const corsOrigin = 'http://localhost:5173'

app.use(cors({ origin: corsOrigin }))
app.use(json())
app.use(routes)

app.listen(PORT, () => console.log('Running 🚀'))
mongoose.connect('mongodb://127.0.0.1:27017/dtmoney')
