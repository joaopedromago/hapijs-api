import * as Joi from '@hapi/joi'

export interface DotEnv {
  JWT_SECRET: string
  NODE_ENV: string
  TYPEORM_AUTO_SCHEMA_SYNC: boolean
  TYPEORM_CONNECTION: 'postgres'
  TYPEORM_DATABASE: string
  TYPEORM_ENTITIES_DIR: string
  TYPEORM_ENTITIES: string
  TYPEORM_HOST: string
  TYPEORM_MIGRATIONS_DIR: string
  TYPEORM_MIGRATIONS: string
  TYPEORM_PASSWORD: string
  TYPEORM_PORT: number
  TYPEORM_USERNAME: string
}

export const dotEnvSchema = Joi.object().keys({
  JWT_SECRET: Joi.string().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .required(),
  TYPEORM_AUTO_SCHEMA_SYNC: Joi.bool().required(),
  TYPEORM_CONNECTION: Joi.string()
    .valid('postgres')
    .required(),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_ENTITIES_DIR: Joi.string().required(),
  TYPEORM_ENTITIES: Joi.string().required(),
  TYPEORM_HOST: Joi.string().required(),
  TYPEORM_MIGRATIONS_DIR: Joi.string().required(),
  TYPEORM_MIGRATIONS: Joi.string().required(),
  TYPEORM_PASSWORD: Joi.string().required(),
  TYPEORM_PORT: Joi.number(),
  TYPEORM_USERNAME: Joi.string().required(),
})
