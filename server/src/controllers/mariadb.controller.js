import { checkMariaConnection } from '../services/mariadb.js'
import { config } from '../config/environments.js'

export async function ctrlMariaVerifyConnection (_req, res) {
  const status = await checkMariaConnection(config.MARIADB)

  res.json({
    database: 'MariaDB',
    status: status ? 'CONNECTED' : 'NOT CONNECTED'
  })
}
