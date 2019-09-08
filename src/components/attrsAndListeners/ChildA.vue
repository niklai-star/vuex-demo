<template>
  <div class="demo-panel">
    <h4 class="title">
      ChildA
    </h4>
    <div>来自GrandPa的数据：{{ grandPaMessage }}</div>
    <div>
      <span>
        <input
          type="text"
          v-model="value"
        >
        <button
          type="button"
          @click="changeGrandPaValue()"
          class="btn btn-default"
        >修改GrandPa属性值</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messageA'],
  data() {
    return {
      grandPaMessage: this.messageA,
      value: ''
    }
  },
  methods: {
    changeGrandPaValue() {
      this.$emit('getChildAValue', this.value)
    }
  },
  // props默认不能同步父级组件的属性变化，需要增加watch才可以实现
  watch: {
    messageA(val) {
      this.grandPaMessage = val
    }
  }
}
</script>