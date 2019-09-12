import * as Hapi from 'hapi'
import * as Boom from 'boom'
import { Not, IsNull } from 'typeorm'
import { IServerConfigurations } from '../../configurations'
import { Ninja } from '../../entities'

export default class NinjaController {
  private database: Object
  private configs: IServerConfigurations

  constructor(configs: IServerConfigurations, database: Object) {
    this.database = database
    this.configs = configs
  }
  public findAll() {
    return Ninja.find()
  }
}
