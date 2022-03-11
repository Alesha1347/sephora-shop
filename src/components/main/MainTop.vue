<template>
  <div class="header__content">
      <div class="header__content-nav">
      <div class="header__bath-body" ><span>Bath & Body <b-icon icon="arrow-right-circle"></b-icon></span></div>
      <div class="header__sets"><span>Value & Gift Sets <b-icon icon="arrow-right-circle"></b-icon></span></div>
      <div class="header__hair"><span>Hair <b-icon icon="arrow-right-circle"></b-icon></span></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header__content {
    background-image: url('../../assets/minis.png');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 70px;
}
.header__content-nav {
    display: flex;
    font-size: 30px;
    font-weight: bold;
}
.header__bath-body {
    cursor: pointer;
    height: 500px;
    width: 450px;
    opacity: 0.6;
}
.header__bath-body:hover{
    opacity: 1;
    box-shadow: 0px 19px 23px 10px rgba(0, 0, 0, 0.2);
}
.header__bath-body span{
    display: flex;
    align-items: center;
    margin-left: 230px;
    margin-top: 450px;
}
.header__sets {
    cursor: pointer;
    height: 500px;
    width: 600px;
    opacity: 0.6;
}
.header__sets:hover{
    opacity: 1;
    box-shadow: 0px 19px 23px 10px rgba(0, 0, 0, 0.2);
}
.header__sets span{
    display: flex;
    align-items: center;
    margin-left: 300px;
    margin-top: 450px;
}
.header__hair {
    cursor: pointer;
    height: 500px;
    width: 450px;
    opacity: 0.6;
}
.header__hair:hover{
    opacity: 1;
    box-shadow: 0px 19px 23px 10px rgba(0, 0, 0, 0.2);
}
.header__hair span{
    display: flex;
    align-items: center;
    margin-left: 330px;
    margin-top: 450px;
}
</style>