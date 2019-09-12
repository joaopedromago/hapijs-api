import * as Hapi from 'hapi'
import * as Boom from 'boom'
import { Not, IsNull } from 'typeorm'
import { IServerConfigurations } from '../../configurations'
import { Ninja } from '../../entities'
import { ResponseObject, ResponseToolkit } from '@hapi/hapi'

export default class NinjaController {
  private database: Object
  private configs: IServerConfigurations

  constructor(configs: IServerConfigurations, database: Object) {
    this.database = database
    this.configs = configs
  }

  public async findAll(request: any, h: ResponseToolkit) {
    let ninjas = []

    try {
      ninjas = await Ninja.find()
    } catch (error) {
      request.log('Error finding entity.')
      return Boom.badImplementation(error)
    }

    return h.response(ninjas).code(200)
  }

  public async findOne(request: any, h: ResponseToolkit) {
    let ninja: Ninja

    if (request.params.id == null) {
      request.log('Id not informed')
      return Boom.badImplementation()
    }

    try {
      ninja = await Ninja.findOne(request.params.id)
    } catch (error) {
      request.log('Error finding entity.')
      return Boom.badImplementation(error)
    }

    return h.response(ninja).code(200)
  }

  public async addNew(request: any, h: ResponseToolkit) {
    let ninja = new Ninja()
    ninja.mount(request.payload)

    try {
      await ninja.save()
    } catch (error) {
      request.log('Error saving entity to database.')
      return Boom.badImplementation(error)
    }

    return h.response('Successfully registered.').code(201)
  }

  public async delete(request: any, h: ResponseToolkit) {
    if (request.params.id == null) {
      request.log('Id not informed')
      return Boom.badImplementation()
    }

    try {
      let ninja = await Ninja.findOne(request.params.id)

      if (ninja == null) {
        request.log('Ninja not found')
        return Boom.badImplementation()
      }

      ninja.remove()
    } catch (error) {
      request.log('Error deleting entity.')
      return Boom.badImplementation(error)
    }

    return h.response('Successfully deleted.').code(201)
  }

  public async update(request: any, h: ResponseToolkit) {
    if (request.params.id == null) {
      request.log('Id not informed')
      return Boom.badImplementation()
    }

    try {
      let ninja = await Ninja.findOne(request.params.id)

      if (ninja == null) {
        request.log('Ninja not found')
        return Boom.badImplementation()
      }

      ninja.mount(request.payload)

      ninja.save()
    } catch (error) {
      request.log('Error deleting entity.')
      return Boom.badImplementation(error)
    }

    return h.response('Successfully updated.').code(201)
  }
}
