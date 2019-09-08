<template>
  <div id="app"
class="container">
    <div id="nav">
      <router-link to="/propsandemit">
props 和 $emit
</router-link>&emsp;|&emsp;
      <router-link to="/attrandlisterners">
$attrs 和 $listeners
</router-link>&emsp;|&emsp;
      <router-link to="/eventbus">
EventBus
</router-link>&emsp;|&emsp;
      <router-link to="/simple">
store 模式
</router-link>&emsp;|&emsp;
      <router-link to="/vuex">
Vuex
</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  text-align: center;
  margin-top: 20px;
}
.demo-panel {
  margin-bottom: 30px;
  border: 1px solid;
  border-color: gray;
  padding: 10px;
}
.demo-panel .title {
  text-align: center;
}
</style>
