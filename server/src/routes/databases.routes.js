import { Router } from 'express'

import { ctrlMariaVerifyConnection } from '../controllers/mariadb.controller.js'
import { ctrlMongoVerifyConnection } from '../controllers/mongodb.controller.js'

const databasesRoutes = Router()

databasesRoutes.get('/check-mariadb-connection', ctrlMariaVerifyConnection)
databasesRoutes.get('/check-mongodb-connection', ctrlMongoVerifyConnection)

export { databasesRoutes }
