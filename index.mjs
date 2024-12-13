// @ts-check
import { MyFunctionSchema } from './schemas.mjs'

/** @type { import('./schemas.mjs').MyFunction } */
export const impl = MyFunctionSchema.implement(async (config, { foo }) => {
  const extra = config.apiKey.charAt(1)
  return { boo: `${foo}bar-${extra}` }
})
