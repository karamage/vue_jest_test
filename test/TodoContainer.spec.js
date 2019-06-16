import { shallowMount } from "@vue/test-utils"
import TodoContainer from '@/components/TodoContainer.vue'
import NewTodo from "@/components/NewTodo.vue"

describe("TodoContainer.vue", () => {
  it("from render", () => {
    const wrapper = shallowMount(TodoContainer)

    expect(wrapper.find(NewTodo).exists()).toBe(true)
  })

  it("todoを追加する", () => {
    const localThis = {
      todos: []
    }

    TodoContainer.methods.addTodo.call(localThis, "text")

    expect(localThis.todos[0]).toEqual({
      id: 1,
      text: "text",
      checked: false
    })
  })
})
