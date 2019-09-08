<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">
GrandPa
</h4>
      <div>
        <span>输入框：</span>
        <input type="text"
v-model="inputValue" >
      </div>
    </div>
    <father :message="inputValue"
@getChildData="getChildData" />
  </div>
</template>

<script>
import Father from './Father'

export default {
  components: {
    Father: Father
  },
  data() {
    return {
      inputValue: 'abc'
    }
  },
  methods: {
    getChildData(val) {
      this.inputValue = val
    }
  }
}
</script>