<template>
  <div>
    <div>
      <h2>props 和 $emit</h2>
    </div>
    <grand-pa />
  </div>
</template>

<script>
import GrandPa from './GrandPa'

export default {
  components: {
    GrandPa: GrandPa
  }
}
</script>
