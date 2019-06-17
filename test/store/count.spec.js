import Vuex from 'vuex'
import * as count from '@/store/count'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

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
})
