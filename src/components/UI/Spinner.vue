<template>
<div class="spinner">
    <div class="spinner__inner">
        <b-spinner 
        type="grow" 
        ></b-spinner>
    </div>
</div>
</template>

<script>
export default {
    name: 'MySpinner',
}
</script>

<style>
.spinner {
    background-color: black;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}
.spinner__inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.spinner .spinner-grow{
    color: brown;
    width: 500px;
    height: 500px;
}
</style>