<template>
    <div class="favourites">
        <FavouritesList/>
    </div>
</template>

<script>
import FavouritesList from '../components/favourites/FavouritesList.vue'
export default {
    components:{FavouritesList}
}
</script>

<style>
.favourites{
    display: flex;
    justify-content: center;
}
</style>