<template>
  <div class="wrap__header">
      <MainTop/>
      <MainGifts/>
      <router-view/>
  </div>
</template>

<script>
import MainTop from '../components/main/MainTop.vue'
import MainGifts from '../components/main/MainGifts.vue'
export default {
  components:{MainTop, MainGifts}
}
</script>

<style>
.wrap__content{
  width: 1200px;
  margin: 0 auto;
}

</style>