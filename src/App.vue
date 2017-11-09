<template>
  <div id="app">
    hello
  </div>
</template>

<script>
  import AppHeader from './components/app-header/app-header.vue'
export default {
  name: 'app',
  components:{
    AppHeader
  }
}
</script>

<style lang="stylus">
  @import "common/css/variable.styl"
#app {
  color: $color-theme
}
</style>
