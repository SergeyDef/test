<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';

body, html {
    height: 100%;
}
ul{
  margin-left: 0;
  padding-left: 0;
}
li{
  list-style-type: none;
}
button:active, button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
