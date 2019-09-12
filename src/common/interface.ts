import { Request, Server } from '@hapi/hapi'

import { DotEnv } from './validate.env'

export interface BaseServer extends Server {
  app: DotEnv
}

export interface BaseRequest extends Request {
  server: BaseServer
}

export interface IdParamRequest extends Request {
  params: {
    id: string
  }
}
