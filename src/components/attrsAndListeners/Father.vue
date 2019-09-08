<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">
        Father
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
    <div class="row">
      <child-a
        class="col-md-6"
        v-bind="$attrs"
        v-on="$listeners"
      />
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
  },
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