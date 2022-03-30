<template>
  <div class="child__category">

  </div>
</template>

<script>
export default {
    data(){
        return{
            childCat: []
        }
    },
    methods:{
        getChildCat(){
            this.childCat = localStorage.getItem
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>