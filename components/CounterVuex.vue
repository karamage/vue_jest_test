<template>
  <div>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  computed: {
    ...mapGetters("count", ["count"])
  },
  methods: {
    ...mapActions("count", ["increment"])
  }
}
</script>

<style scoped>

</style>
