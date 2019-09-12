import * as Hapi from 'hapi'
import Routes from './routes'
import { IServerConfigurations } from '../../configurations'

export function init(
  server: Hapi.Server,
  configs: IServerConfigurations,
  database: Object
) {
  Routes(server, configs, database)
}
