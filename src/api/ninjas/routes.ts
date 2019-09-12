import * as Hapi from 'hapi'
import NinjaController from './ninja-controller'
import { IServerConfigurations } from '../../configurations'
import { number } from 'joi'

export default function(
  server: Hapi.Server,
  serverConfigs: IServerConfigurations,
  database: Object
) {
  const ninjaController = new NinjaController(serverConfigs, database)
  server.bind(ninjaController)

  console.log('starting to create ninja routes')
  server.route({
    method: 'GET',
    path: '/ninjas',
    options: {
      handler: ninjaController.findAll,
      auth: false,
      tags: ['api', 'site-content'],
      description: 'Get registered suppliers origin from database',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              description: 'Returned Suppliers origin.',
            },
            '401': {
              description: 'Unauthorized.',
            },
          },
        },
      },
    },
  })
}
