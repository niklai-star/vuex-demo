<template>
  <div>
    <h3>简单状态管理</h3>
    <Parent />
    <Child />
  </div>
</template>

<script>
import Parent from "./Parent";
import Child from "./Child";

export default {
  components: {
    Parent,
    Child
  }
};
</script>