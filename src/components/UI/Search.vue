<template>
  <input 
  type="text" 
  class="search" 
  placeholder="search..."
  v-model="value"
  @input="searchProducts(value)"
  >
</template>

<script>
export default {
  name: 'MySearch',
  data(){
    return{
      value: '',
      timeout: 0
    }
  },
  methods:{
    searchProducts(value){
      if(this.timeout){
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() =>{
        this.$router.push({name: 'products'})
        this.$emit('searchProducts', value)
      }, 1500)
    }
  }
}
</script>

<style>
.search{
  outline: none;
  border-radius: 20px;
  text-align: center;
}
</style>