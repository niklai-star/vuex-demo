<template>
  <div>
    <div class="demo-panel">
      <h4 class="title">
Father
</h4>
      <div>
        <span>来自GrandFather的数据：{{ fatherMessage }}</span>
      </div>
      <div>
        <span>
          <input type="text"
v-model="fatherValue" >
          <button type="button"
@click="changeGrandPaValue()">触发修改父级属性值</button>
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
  props: ['message'],
  data() {
    return {
      fatherMessage: this.message,
      fatherValue: ''
    }
  },
  methods: {
    changeGrandPaValue() {
      this.$emit('getChildData', this.fatherValue)
    }
  },
  // props默认不能同步父级组件的属性变化，需要增加watch才可以实现
  watch: {
    message(val) {
      this.fatherMessage = val
    }
  }
}
</script>