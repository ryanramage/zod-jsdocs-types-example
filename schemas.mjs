// @ts-check
import { z } from 'zod'

export const ServiceConfig = z.object({
  apiKey: z.string().describe('api key')
})

export const DataReturnSchema = z.object({
  boo: z.string()
})

export const MyFunctionSchema = z
  .function()
  .args(
    ServiceConfig.describe('config object'),
    z.object({
      foo: z.string().describe('function argument')
    })
  )
  .returns(
    z.promise(
      DataReturnSchema.passthrough().describe('datatypeDescription').nullable()
    )
  )
/** @typedef { z.infer<typeof MyFunctionSchema> } MyFunction */
