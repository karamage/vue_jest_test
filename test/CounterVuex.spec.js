import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CounterVuex from '@/components/CounterVuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CounterVuex.vue', () => {
  let store
  let countStoreMock
  let wrapper

  beforeEach(() => {
    //Vuexストアのモックを作成する
    countStoreMock = {
      namespaced: true,
      actions : {
        increment: jest.fn(),
      },
      getters : {
        count: () => 0,
      },
    }
    store = new Vuex.Store({
      modules: {
        count:countStoreMock
      }
    })
    // shallowMountだと子コンポーネントをスタブによって描画しなくなる(高速化)
    wrapper = shallowMount(CounterVuex, { store, localVue })
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 要素の存在を確認することも簡単です
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // ボタンを押してinclementが呼び出されているかテスト
  it('button click should increment call', () => {
    expect(countStoreMock.actions.increment).not.toBeCalled()
    const button = wrapper.find('button')
    button.trigger('click')
    expect(countStoreMock.actions.increment).toBeCalled()
  })

})
