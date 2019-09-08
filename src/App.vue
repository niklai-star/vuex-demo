<template>
  <div
    id="app"
    class="container-fluid"
  >
    <div id="nav">
      <router-link to="/propsandemit">
        props 和 $emit
      </router-link>|
      <router-link to="/attrandlisterners">
        $attrs 和 $listeners
      </router-link>|
      <router-link to="/eventbus">
        EventBus
      </router-link>|
      <router-link to="/simple">
        store 模式
      </router-link>|
      <router-link to="/vuex">
        Vuex
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
