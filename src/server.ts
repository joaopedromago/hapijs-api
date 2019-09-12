import * as Hapi from 'hapi'
import * as Boom from 'boom'
import * as Joi from 'joi'
import * as Ninjas from './api/ninjas'
import { IServerConfigurations } from './configurations'
import { installPlugins } from './plugins'

export async function init(
  configs: IServerConfigurations,
  database: Object
): Promise<Hapi.Server> {
  try {
    const port = 3000
    const server = new Hapi.Server({
      debug: { request: ['error'] },
      port: port,
      routes: {
        cors: {
          origin: ['*'],
        },
        validate: {
          failAction: async (request, h, err) => {
            if (err['isJoi']) {
              throw err
            }
          },
        },
      },
    })

    console.log('Installing plugins')
    await installPlugins(server)

    console.log('Register Routes')
    Ninjas.init(server, configs, database)
    console.log('Routes registered sucessfully.')

    return server
  } catch (err) {
    console.log('Error starting server: ', err)
    throw err
  }
}
