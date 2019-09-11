<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">Father</h4>
      <div>{{ grandPaValue }}</div>
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
import { mapGetters } from 'vuex'
import ChildA from './ChildA'
import ChildB from './ChildB'

export default {
  components: {
    ChildA: ChildA,
    ChildB: ChildB
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters('GrandPa', ['grandPaValue'])
  },
  methods: {
    changeFatherValue() {
      this.$store.commit('Father/changeFatherValue', this.value)
    }
  }
}
</script>
