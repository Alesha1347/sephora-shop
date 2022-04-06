<template>
  <div class="header__inner">
      <router-link class="header__name" to="/">S E P H O R A</router-link>
      <MySearch/>
      <div class="header__store">Store</div>
      <div class="header__reg">Sign In</div>
      <div class="header__chat"><b-icon icon="chat"></b-icon></div>
      <router-link :to="{name: 'favourites'}" class="header__favourites" ><b-icon icon="heart"></b-icon></router-link>
      <router-link :to="{name: 'basket'}" class="header__basket"><b-icon icon="basket"></b-icon></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 20px;
}
.header__name {
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 25px;
}
.header__name:hover{
    color: black;
}
.header__store {
    cursor: pointer;
}
.header__reg {
    cursor: pointer;
}
.header__chat {
    cursor: pointer;
    font-size: 25px;
}
.header__favourites {
    cursor: pointer;
    font-size: 25px;
    color: black;
}
.header__favourites:hover{
    color: black;
}
.header__basket {
    cursor: pointer;
    font-size: 25px;
    color: black;
}
.header__basket:hover{
    color: black;
}
</style>