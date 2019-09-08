<template>
  <div>
    <div>
      <h1>$attrs 和 $listeners</h1>
    </div>
    <grand-father />
  </div>
</template>

<script>
import GrandFather from './GrandFather'

export default {
  components: {
    GrandFather: GrandFather
  }
}
</script>