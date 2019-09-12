require('dotenv').config()
import 'reflect-metadata'
import * as Server from './server'
import * as Entities from './entities'
import { Connection, createConnection } from 'typeorm'
import * as nconf from 'nconf'
import * as path from 'path'
import { BaseServer } from './common/interface'

const initDb = async (server: BaseServer): Promise<Connection> => {
  let database
  try {
    database = await createConnection({
      database: server.app.TYPEORM_DATABASE,
      entities: [server.app.TYPEORM_ENTITIES],
      host: server.app.TYPEORM_HOST,
      logging: false,
      password: server.app.TYPEORM_PASSWORD,
      port: server.app.TYPEORM_PORT,
      synchronize: server.app.TYPEORM_AUTO_SCHEMA_SYNC,
      type: server.app.TYPEORM_CONNECTION,
      username: server.app.TYPEORM_USERNAME,
    })
    console.log('DB connected')
  } catch (error) {
    console.log(error)
  }
  return database
}

//Read Configurations
const configs = new nconf.Provider({
  env: true,
  argv: true,
})

export function getServerConfigs() {
  let config = configs.get('server')

  return config
}

// Define async start function
const start = async (): Promise<void> => {
  const db = await initDb
  const serverConfigs = getServerConfigs() // Starting Application Server
  const server = await Server.init(serverConfigs, db)

  await server.start()
  console.log('Server running at PORT:', server.settings.port)
}

start()
  .then(() => {
    console.log('Ready to receive requests.')
  })
  .catch((err: Error): void => {
    console.info('Error starting server: ', err.message)
    process.exit(1)
  })
