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

  // GET
  server.route({
    method: 'GET',
    path: '/ninjas',
    options: {
      handler: ninjaController.findAll,
      auth: false,
      tags: ['api', 'site-content'],
      description: 'Get all ninjas from database',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              description: 'Returned all Ninjas',
            },
            '401': {
              description: 'Unauthorized',
            },
          },
        },
      },
    },
  })
  server.route({
    method: 'GET',
    path: '/ninjas/{id}',
    options: {
      handler: ninjaController.findOne,
      auth: false,
      tags: ['api', 'site-content'],
      description: 'Get a ninja from database',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              description: 'Returned a Ninja by Id',
            },
            '401': {
              description: 'Unauthorized',
            },
          },
        },
      },
    },
  })

  // POST
  server.route({
    method: 'post',
    path: '/ninjas',
    options: {
      handler: ninjaController.addNew,
      auth: false,
      tags: ['api', 'site-content'],
      description: 'Save a ninja to database',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              description: 'Ninja saved',
            },
            '401': {
              description: 'Unauthorized',
            },
          },
        },
      },
    },
  })

  // DELETE
  server.route({
    method: 'delete',
    path: '/ninjas/{id}',
    options: {
      handler: ninjaController.delete,
      auth: false,
      tags: ['api', 'site-content'],
      description: 'exclude a ninja to database',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              description: 'Ninja deleted',
            },
            '401': {
              description: 'Unauthorized',
            },
          },
        },
      },
    },
  })

  // PUT
  server.route({
    method: 'put',
    path: '/ninjas/{id}',
    options: {
      handler: ninjaController.update,
      auth: false,
      tags: ['api', 'site-content'],
      description: 'update a ninja from database',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              description: 'Ninja updated',
            },
            '401': {
              description: 'Unauthorized',
            },
          },
        },
      },
    },
  })
}
