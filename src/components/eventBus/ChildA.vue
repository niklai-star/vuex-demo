<template>
  <div class="demo-panel">
    <h4 class="title">ChildA</h4>
    <div>来自GrandPa的数据：{{ grandPaValue }}</div>
    <div>来自ChildB的数据：{{ childBValue }}</div>
    <div>
      <span>
        <input type="text" v-model="value" />
        <button type="button" @click="changeGrandPaValue()" class="btn btn-default">修改GrandPa</button>
      </span>
    </div>
    <div>
      <span>
        <input type="text" v-model="valueToB" />
        <button type="button" @click="changeChildBValue()" class="btn btn-default">修改ChildB</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grandPaValue: '',
      childBValue: '',
      value: '',
      valueToB: ''
    }
  },
  mounted() {
    this.$EventBus.$on('grandPaInputValueEvent', val => {
      this.grandPaValue = val
    })

    this.$EventBus.$on('changeChildAValueFromChildB', val => {
      this.childBValue = val
    })
  },
  methods: {
    changeGrandPaValue() {
      this.$EventBus.$emit('changeGrandPaValueFromChild', this.value)
    },

    changeChildBValue() {
      this.$EventBus.$emit('changeChildBValueFromChildA', this.valueToB)
    }
  }
}
</script>