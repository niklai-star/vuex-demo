<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">Father</h4>
      <div>
        <span>来自GrandPa的数据：{{ grandPaMessage }}</span>
      </div>
      <div>
        <span>
          <input type="text" v-model="value" />
          <button type="button" @click="changeGrandPaValue()" class="btn btn-default">修改GrandPa属性值</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      grandPaMessage: this.message,
      value: ''
    }
  },
  methods: {
    changeGrandPaValue() {
      this.$emit('getFatherValue', this.value)
    }
  },
  // props默认不能同步父级组件的属性变化，需要增加watch才可以实现
  watch: {
    message(val) {
      this.grandPaMessage = val
    }
  }
}
</script>