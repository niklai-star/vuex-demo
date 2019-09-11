<template>
  <div class="demo-panel">
    <h4 class="title">ChildA</h4>
    <div>来自GrandPa的数据：{{ storeState.grandPaValue }}</div>
    <div>来自ChildB的数据：{{ storeState.childBValue }}</div>
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
        <input type="text" v-model="valueToB" />
        <button
          type="button"
          @click="changeChildAValue()"
          class="btn btn-default"
        >
          修改ChildB
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import store from './store'

export default {
  data() {
    return {
      storeState: store.state,
      value: '',
      valueToB: ''
    }
  },
  methods: {
    changeChildValue() {
      store.setChildValue(this.value)
    },

    changeChildAValue() {
      store.setChildAValue(this.valueToB)
    }
  }
}
</script>
