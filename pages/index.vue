<template>
  <div class="container">
    <div>
      Vuexなし
      <counter />
      <br>
      Vuexあり
      <counter-vuex />
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import CounterVuex from '@/components/CounterVuex.vue'

export default {
  components: {
    Counter,
    CounterVuex,
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
