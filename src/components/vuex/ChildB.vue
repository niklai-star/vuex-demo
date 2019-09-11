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
          @click="changeChildValue()"
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
          @click="changeChildBValue()"
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
  methods: {
    changeChildValue() {},

    changeChildBValue() {}
  }
}
</script>
