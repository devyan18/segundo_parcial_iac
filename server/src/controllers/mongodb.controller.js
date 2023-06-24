import { checkMongoConnection } from '../services/mongodb.js'
import { config } from '../config/environments.js'

export async function ctrlMongoVerifyConnection (_req, res) {
  const status = await checkMongoConnection(config.MONGODB.URI)

  res.json({
    database: 'MongoDB',
    status: status ? 'CONNECTED' : 'NOT CONNECTED'
  })
}
