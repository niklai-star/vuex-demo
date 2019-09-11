<template>
  <div>
    <div>
      <h1>EventBus</h1>
    </div>
    <grand-pa />
  </div>
</template>

<script>
import Vue from 'vue'
import GrandPa from './GrandPa'

Vue.prototype.$EventBus = new Vue()

export default {
  components: {
    GrandPa: GrandPa
  }
}
</script>
