<template>
  <div>
    <div>
      <h4>Father</h4>
    </div>
    <div class="row">
      <child-a class="col-md-6" />
      <child-b class="col-md-6" />
    </div>
  </div>
</template>

<script>
import ChildA from './ChildA'
import ChildB from './ChildB'

export default {
  components: {
    ChildA: ChildA,
    ChildB: ChildB
  }
}
</script>