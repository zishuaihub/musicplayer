<template>
  <div id="app">
    <app-header></app-header>
    <tab></tab>
    <router-view></router-view>

  </div>
</template>

<script>
  import AppHeader from './components/app-header/app-header.vue'
  import tab from './components/tab/tab.vue'
  import getRecommend from './api/recommend'
  export default {
  name: 'app',
  components:{
    AppHeader,
    tab
  },
    created(){
    }
}
</script>

<style lang="stylus">
  @import "common/css/variable.styl"
#app {
  color: $color-theme
  background $color-background
}
</style>
