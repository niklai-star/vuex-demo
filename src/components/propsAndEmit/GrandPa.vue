<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">GrandPa</h4>
      <div>
        <span>输入框：</span>
        <input type="text" v-model="inputValue" />
      </div>
      <div>来自Father的数据：{{ fatherValue }}</div>
    </div>
    <father :message="inputValue" @getFatherValue="getFatherValue" />
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
      inputValue: '',
      fatherValue: ''
    }
  },
  methods: {
    getFatherValue(val) {
      this.fatherValue = val
    }
  }
}
</script>