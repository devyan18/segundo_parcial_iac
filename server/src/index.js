import express from 'express'
import { databasesRoutes } from './routes/databases.routes.js'
import { config } from './config/environments.js'

const app = express()

app.use(databasesRoutes)

app.listen(4000, () => {
  console.log(config)
  console.log('server on port 4000 ✅ ')
})
