<template>
  <div class="main__gifts">
    <h2 class="main__gifts-name">Gifts</h2>
      <MyCarousel
      :array="GIFTS"
      />
      sdfsdfdss
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      GIFTS: 'promo/GIFTS'
    })
  },
  methods:{
    ...mapActions({
      GET_GIFTS_FROM_API: 'promo/GET_GIFTS_FROM_API'
    })
  },
  mounted(){
    this.GET_GIFTS_FROM_API()
  }
}
</script>

<style>
.main__gifts{
  display: flex;
  flex-direction: column;
}
.main__gifts-name{
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>