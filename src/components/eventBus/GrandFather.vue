<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">GrandPa</h4>
      <div>
        <span>输入框：</span>
        <input type="text" v-model="inputValue" @change="inputValueChange" />
      </div>
      <div>来自Father的数据：{{ fatherValue }}</div>
      <div>来自Child的数据：{{ childValue }}</div>
    </div>
    <father />
  </div>
</template>

<script>
import Father from './Father'

export default {
  components: {
    Father: Father
  },
  mounted() {
    this.$EventBus.$on('changeGrandPaValueFromFather', val => {
      this.fatherValue = val
    })

    this.$EventBus.$on('changeGrandPaValueFromChild', val => {
      this.childValue = val
    })
  },
  data() {
    return {
      inputValue: '',
      fatherValue: '',
      childValue: ''
    }
  },
  methods: {
    inputValueChange() {
      this.$EventBus.$emit('grandPaInputValueEvent', this.inputValue)
    }
  }
}
</script>