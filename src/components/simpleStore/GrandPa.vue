<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">GrandPa</h4>
      <div>
        <span>输入框：</span>
        <input type="text" v-model="inputValue" @change="inputValueChange" />
      </div>
      <div>来自Father的数据：{{ storeState.fatherValue }}</div>
      <div>来自Child的数据：{{ storeState.childValue }}</div>
    </div>
    <father />
  </div>
</template>

<script>
import Father from './Father'
import store from './store'

export default {
  components: {
    Father: Father
  },
  data() {
    return {
      inputValue: '',
      storeState: store.state
    }
  },
  methods: {
    inputValueChange() {
      store.setGrandPaValue(this.inputValue)
    }
  }
}
</script>
