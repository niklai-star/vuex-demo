<template>
  <div>
    <div>
      <h1>$attrs 和 $listeners</h1>
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
