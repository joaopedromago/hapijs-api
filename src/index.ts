require('dotenv').config()
import 'reflect-metadata'
import * as Server from './server'
import * as Entities from './entities'
import { createConnection } from 'typeorm'
import * as nconf from 'nconf'
import * as path from 'path'

// Define async start function
const start = async ({ config, db }) => {
  try {
    const server = await Server.init(config, db)
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (err) {
    console.error('Error starting server: ', err.message)
    throw err
  }
}

const initDb = async () => {
  let database
  try {
    database = await createConnection({
      cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'migrations',
      },
      database: 'konoha',
      schema: 'konoha',
      entities: ['./src/entities/*.ts'],
      host: 'localhost',
      logging: false,
      synchronize: false,
      password: 'natahouse',
      port: 5432,
      type: 'postgres',
      username: 'Mago',
      migrationsTableName: 'migration_history',
      migrations: ['migrations/*.ts'],
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

// Starting Application Server
const serverConfigs = getServerConfigs()

const database = initDb()

start({ config: serverConfigs, db: database })
