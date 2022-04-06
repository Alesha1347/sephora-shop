<template>
  <div class="basket__qty">
      <div class="qty__minus">-</div>
      <div class="qty__x">{{ product.qty }}</div>
      <div class="qty__plus">+</div>
  </div>
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>

</style>