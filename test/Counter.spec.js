import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter', () => {
  // コンポーネントがマウントされ、ラッパが作成されます。
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 要素の存在を確認することも簡単です
  it('has a button', () => {
    expect(wrapper.contains('.count')).toBe(true)
  })

  // ボタンを押してカウントアップするテスト
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  // nextTick 補足されない
  /*
  it('will time out', done => {
    Vue.nextTick(() => {
      expect(true).toBe(false)
      done()
    })
  })
  */

  /*
  // 以下の２つのテストは期待通り動作します
  it('will catch the error using done', done => {
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      expect(true).toBe(false)
      done()
    })
  })

  it('will catch the error using a promise', () => {
    return Vue.nextTick().then(function() {
      expect(true).toBe(false)
    })
  })
  */

})
