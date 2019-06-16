<template>
  <NewTodo
    @createTodo="addTodo"
  />
</template>

<script>
import NewTodo from "@/components/NewTodo.vue"
export default {
  components: {
    NewTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({text, checked:false, id: this.todos.length + 1})
    }
  }
}
</script>

<style scoped>

</style>
