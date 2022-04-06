<template>
    <div class="products__content-show">
                Выводить по: 
        <b-navbar>
            <b-navbar-nav>
          <b-nav-item class="active">60</b-nav-item>
          <b-nav-item>90</b-nav-item>
          <b-nav-item>120</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.products__content-show{
    margin-right: 200px;
    font-size: 18px;
    color: gray;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.navbar-nav.nav-item.nav-link{
    color: black;
}
/* .show__content{
    margin-left: 10px;
    cursor: pointer;
}
.show__content.active{
    color: black;
}
.show__content:hover{
    color: black;
} */
</style>