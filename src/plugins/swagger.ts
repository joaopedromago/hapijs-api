import { Server } from '@hapi/hapi'
import * as Inert from '@hapi/inert'
import * as Vision from '@hapi/vision'
import * as Swagger from 'hapi-swagger'

/**
 * Registers hapi swagger plugin on server.
 */
export const registerSwaggerPlugin = async (server: Server): Promise<void> => {
  await server.register([
    Inert,
    Vision,
    {
      plugin: Swagger,
      options: {
        info: {
          title: 'Konoha API',
          description: 'Documentation for konoha API',
          version: '1.0',
        },
        swaggerUI: true,
        documentationPage: true,
        documentationPath: '/docs',
      },
    },
  ])
}
