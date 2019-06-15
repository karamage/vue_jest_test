import { shallowMount } from "@vue/test-utils"
import NewTodo from '@/components/NewTodo.vue'

describe("NewTodo.vue", () => {
  it("inputがあるか確認する", () => {
    const wrapper = shallowMount(NewTodo)

    expect(wrapper.find("input.new").exists()).toBe(true)
  })

  it("新しいタグをemitする", () => {
    const text = "text"
    const wrapper = shallowMount(NewTodo)

    wrapper.setData({text})
    wrapper.find(".new").trigger("keyup.enter")

    expect(wrapper.emitted("createTodo")[0][0]).toBe(text)
  })
})
