export const config = {
  MONGODB: {
    URI: `mongodb://${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || 27017}/${process.env.MONGO_DATABASE || 'test'}`,
    HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.MONGO_PORT || 27017,
    DATABASE: process.env.MONGO_DATABASE || 'maria'
  },
  MARIADB: {
    HOST: process.env.MARIA_HOST || 'localhost',
    ROOT_USER: 'root',
    ROOT_PASSWORD: process.env.MARIA_ROOT_PASSWORD || 'root',
    DATABASE: process.env.MARIA_DATABASE || 'maria',
    DIALECT: process.env.SQL_DIALECT || 'mariadb'
  }
}
