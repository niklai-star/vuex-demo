<template>
  <div>
    <div>
      <h1>store 模式</h1>
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