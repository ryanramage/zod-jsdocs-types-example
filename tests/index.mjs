// @ts-check
import test from 'tape'
import { impl } from '../index.mjs'

test('fetchListingsByMls returns listing when found', async (t) => {
  const config = { apiKey: 'test-api-key' }
  const expected = { boo: 'bazbar-e' }

  const response = await impl(config, { foo: 'baz' })
  t.deepEqual(response, expected, 'should return the correct response')
  t.end()
})

test('invalid config rejected at runtime', async (t) => {
  const config = {}
  try {
    await impl(config, { foo: 'bad' }) // eslint-ignore-line
    t.fail('should not reach this point')
  } catch (e) {
    t.equals(e.issues[0].message, 'Invalid function arguments')
    t.end()
  }
})
