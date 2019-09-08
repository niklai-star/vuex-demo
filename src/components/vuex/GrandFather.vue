<template>
  <div>
    <div>
      <h4>GrandFather</h4>
    </div>
    <father />
  </div>
</template>

<script>
import Father from './Father'

export default {
  components: {
    Father: Father
  }
}
</script>