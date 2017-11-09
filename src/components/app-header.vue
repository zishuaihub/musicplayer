<template>
    <div id="AppHeader">
      <div class="icon"></div>
      <h1 class="text">Chicken Music</h1>
      <router-link tag="div" class="mine" to="/user">
        <i class="icon-mine"></i>
      </router-link>
    </div>
</template>

<script>

    export default {
        name: 'AppHeader',
        components: {}
    }
</script>


