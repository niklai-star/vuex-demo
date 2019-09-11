<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">GrandPa</h4>
      <div>
        <span>输入框：</span>
        <input type="text" v-model="inputValue" @change="inputValueChange" />
      </div>
      <div>{{ fatherValue }}</div>
      <div>来自Child的数据：</div>
    </div>
    <father />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Father from './Father'

export default {
  components: {
    Father: Father
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapGetters('Father', ['fatherValue'])
  },
  methods: {
    inputValueChange() {}
  },
  watch: {
    inputValue(val) {
      this.$store.commit('GrandPa/changeGrandPaValue', val)
    }
  }
}
</script>
