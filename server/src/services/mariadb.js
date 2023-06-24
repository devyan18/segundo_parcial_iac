import { Sequelize } from 'sequelize'

export function getInstanceOfSequelize ({
  DATABASE,
  ROOT_USER,
  ROOT_PASSWORD,
  HOST,
  DIALECT
}) {
  return new Sequelize(
    DATABASE,
    ROOT_USER,
    ROOT_PASSWORD,
    {
      host: HOST,
      dialect: DIALECT
    })
}

export async function checkMariaConnection (config) {
  const sequelize = getInstanceOfSequelize(config)
  return await sequelize.authenticate()
    .then(() => true)
    .catch(() => false)
}
