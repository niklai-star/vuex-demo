<template>
  <div>
    <div>
      <h1>props 和 $emit</h1>
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