<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">Father</h4>
      <div>来自GrandPa的数据：{{ storeState.grandPaValue }}</div>
      <div>
        <span>
          <input type="text" v-model="value" />
          <button
            type="button"
            @click="changeFatherValue()"
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
import store from './store'

export default {
  components: {
    ChildA: ChildA,
    ChildB: ChildB
  },
  data() {
    return {
      storeState: store.state,
      value: ''
    }
  },
  methods: {
    changeFatherValue() {
      store.setFatherValue(this.value)
    }
  }
}
</script>
