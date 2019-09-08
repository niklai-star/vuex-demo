<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">
        GrandPa
      </h4>
      <div>
        <span>输入框：</span>
        <input
          type="text"
          v-model="inputValue"
        >
      </div>
      <div>来自Father的数据：{{ fatherValue }}</div>
      <div>来自ChildA的数据：{{ childAValue }}</div>
    </div>
    <father
      :message-a="inputValue"
      :message="inputValue"
      @getFatherValue="getFatherValue"
      @getChildAValue="getChildAValue"
    />
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
      inputValue: 'abc',
      fatherValue: '',
      childAValue: ''
    }
  },
  methods: {
    getFatherValue(val) {
      this.fatherValue = val
    },
    getChildAValue(val) {
      this.childAValue = val
    }
  }
}
</script>