import Vuex from 'vuex'
import * as count from '@/store/count'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

let action
const testedAction = (context = {}, payload = {}) => {
  return count.actions[action](context, payload)
}

describe('store/count.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(count)
  })
  describe('getters', () => {
    test('countの値を取得', () => {
      store.replaceState({
        count: 3
      })
      expect(store.getters['count']).toBe(3)
    })
  })
  describe('actions', () => {
    let commit
    let state
    beforeEach(() => {
      commit = store.commit
      state = store.state
    })
    test('increment', async done => {
      action = "increment"
      await testedAction({ commit, state })
      expect(store.getters['count']).toBe(1)
      await testedAction({ commit, state })
      expect(store.getters['count']).toBe(2)
      done()
    })
  })
})
