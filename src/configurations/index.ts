export interface IServerConfigurations {
  port: number
  plugins: Array<string>
  jwtSecret: string
  jwtExpiration: string
  routePrefix: string
  premiumPlanId: string
}

// export { swaggerplugin } from './default-plugins'