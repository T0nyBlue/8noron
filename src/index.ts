/*
    Import External Module
*/

import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
// import morgan from 'morgan';

dotenv.config()

/*
    App Variables
*/

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const HOST: string = process.env.HOST || '0.0.0.0'
const NODE_ENV: string = process.env.NODE_ENV || 'development'

const app = express()

/*
    App Configuration
*/

// Application Middlewares
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(express.json())

// Eror Handling Middlewares

// Application Routes

/*
    Server Activation
*/

app.listen(PORT, () => {
  console.log(`Server ${NODE_ENV} running on http://${HOST}:${PORT}`)
})
