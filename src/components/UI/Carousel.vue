<template>
    <div class="wrap__content">

        <carousel
        :perPage="5"
        :paginationEnabled="false"
        :navigationEnabled="true"
        navigationNextLabel="›"
        navigationPrevLabel="‹"
        >

        <slide
        v-for="item in array"
        :key="item.productId"
        class="slide"
        >
        <div class="slide__info">
        <img class="slide__image" :src="item.heroImage">
        <div class="slide__brand">{{ item.brandName }}</div>
        <div class="slide__name">{{ item.displayName }}</div>
        </div>
        </slide>
    </carousel>

        </div>
</template>

<script>
export default {
    name: 'MyCarousel',
    props:{
        array:{
            type: Array,
            default: () => []
        }
    },
}
</script>

<style>
.VueCarousel .VueCarousel-navigation-button{
    font-size: 100px;
}
.VueCarousel .VueCarousel-navigation-button[data-v-453ad8cd]:focus{
    outline: none;
}
.VueCarousel .VueCarousel-navigation-prev[data-v-453ad8cd]{
    transform: translateY(-60%) translateX(-100%);
}
.VueCarousel .VueCarousel-navigation-next[data-v-453ad8cd]{
    transform: translateY(-60%) translateX(100%);
}
.slide{
    display: flex;
    align-items: center;
    justify-content: center;
}
.slide__info {
    display: flex;
    flex-direction: column;
}
.slide__image {
    width: 150px;
    height: 150px;
    border-radius: 10px;
}
.slide__brand {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}
.slide__name {
    width: 150px;
     white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
}
</style>