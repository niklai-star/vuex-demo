<template>
  <div class="demo-panel">
    <h4 class="title">ChildB</h4>
    <div>来自GrandPa的数据：{{ grandPaValue }}</div>
    <div>来自ChildA的数据：{{ childAValue }}</div>
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
    <div>
      <span>
        <input type="text" v-model="valueToA" />
        <button
          type="button"
          @click="changeChildAValue()"
          class="btn btn-default"
        >
          修改ChildA
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grandPaValue: '',
      childAValue: '',
      value: '',
      valueToA: ''
    }
  },
  mounted() {
    this.$EventBus.$on('grandPaInputValueEvent', val => {
      this.grandPaValue = val
    })

    this.$EventBus.$on('changeChildAValue', val => {
      this.childAValue = val
    })
  },
  methods: {
    changeGrandPaValue() {
      this.$EventBus.$emit('changeChildValue', this.value)
    },

    changeChildAValue() {
      this.$EventBus.$emit('changeChildBValue', this.valueToA)
    }
  }
}
</script>
