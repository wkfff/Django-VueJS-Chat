<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.min.css';
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .column {
    margin: 1px;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  input {
    width: 100%;
    height: 100%;
  }
  button {
    width: 100%;
    border: 0;
  }
  .messages {
    height: 94vh;
  }
</style>
