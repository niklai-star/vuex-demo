<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">Father</h4>
      <div>来自GrandPa的数据：{{ grandPaValue }}</div>
      <div>
        <span>
          <input type="text" v-model="value" />
          <button
            type="button"
            @click="changeGrandPaValue()"
            class="btn btn-default"
          >
            修改GrandPa
          </button>
        </span>
      </div>
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
  },
  mounted() {
    this.$EventBus.$on('grandPaInputValueEvent', val => {
      this.grandPaValue = val
    })
  },
  data() {
    return {
      grandPaValue: '',
      value: ''
    }
  },
  methods: {
    changeGrandPaValue() {
      this.$EventBus.$emit('changeFatherValue', this.value)
    }
  }
}
</script>
