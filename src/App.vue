<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    // console.log(this.$api)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.body{
  background-color: white;
}
</style>
