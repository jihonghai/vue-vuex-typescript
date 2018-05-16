<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
}
</script>

<style src="@/assets/css/bootstrap-reset.css"></style>
<style src="@/assets/css/element-reset.less" lang="less"></style>
<style src="@/assets/css/flex.less" lang="less"></style>
<style src="@/assets/css/style.css"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
