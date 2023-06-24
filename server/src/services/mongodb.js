import { connect } from 'mongoose'

export async function checkMongoConnection (uri) {
  return await connect(uri)
    .then(() => true)
    .catch(() => false)
}
