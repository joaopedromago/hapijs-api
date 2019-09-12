import { Server } from '@hapi/hapi'

import { registerSwaggerPlugin } from './swagger'

/**
 * Registers all hapi plugins.
 */
export const installPlugins = async (server: Server): Promise<void> => {
  await registerSwaggerPlugin(server)
}
