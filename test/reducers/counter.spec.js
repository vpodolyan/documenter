import expect from 'expect'
import counter from '../../reducers'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {}).counter).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT' }).counter).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(2, { state: 1, type: 'DECREMENT' }).counter).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' }).counter).toBe(1)
    })
  })
})
