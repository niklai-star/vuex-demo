<template>
  <div>
    <div>
      <h1>EventBus</h1>
    </div>
    <grand-father />
  </div>
</template>

<script>
import Vue from 'vue'
import GrandFather from './GrandFather'

Vue.prototype.$EventBus = new Vue()

export default {
  components: {
    GrandFather: GrandFather
  }
}
</script>