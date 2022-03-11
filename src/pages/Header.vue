<template>
<div class="wrap__header">
  <div class="header">
      <HeaderTop/>
      <HeaderNav/>
  </div>
  <router-view/>
</div>
</template>

<script>
import HeaderTop from '../components/header/HeaderTop.vue'
import HeaderNav from '../components/header/HeaderNav.vue'
export default {
    components:{HeaderTop, HeaderNav},
}
</script>

<style>
.wrap__header{
  width: 1500px;
  margin: 0 auto;
}
.header {
    display: flex;
    flex-direction: column;
}
</style>