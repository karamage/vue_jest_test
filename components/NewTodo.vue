<template>
  <div>
    <input
      class="new"
      v-model="text"
      @keyup.enter="submit"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    submit() {
      this.$emit("createTodo", this.text)
    }
  }
}
</script>

<style scoped>

</style>
