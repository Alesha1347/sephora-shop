<template>
    <div class="select">
        <div class="select-title"
        @click="isShowOptions = !isShowOptions">
        {{selected}} 
        <b-icon class="select__icon" :icon="this.isShowOptions ? 'chevron-up' : 'chevron-down'"></b-icon>
        </div>

        <div class="options" 
        v-if="isShowOptions">
            <div class="choose"
            v-for="category in categories"
            :key="category.id"
            @click="chooseSelect(category.value)"
            >
            {{category.name}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MySelect',
    props:{
        selected:{
            type:String,
            required: true
        },
        categories:{
            type: Array,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            isShowOptions: false
        }
    },
    methods:{
        chooseSelect(category){
            this.$emit('chooseSelect', category)
        },
        hideSelect(){
            this.isShowOptions = false
        }
    },
    mounted(){
        document.addEventListener('click', this.hideSelect, true)
    },
    beforeDestroy(){
        document.removeEventListener('click', this.hideSelect, true)
    }
}
</script>

<style>
.select{
    position: relative;
    width: 200px;
    font-size: 18px;
    z-index: 10;
}
.select-title{
    cursor: pointer;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}
.select__icon{
    font-weight: bold;
}
.choose{
    margin: 0px;
    cursor: pointer;
    background-color: white;
    color: black;
    padding: 2px 3px;
}
.choose:hover{
    background-color: brown;
    color: white;
}
.options{
    position: absolute;
    /* top: 40px;
    right: 0; */
    width: 100%;
    text-align: left;
    z-index: 20;
    border: 1px solid lightgray;
    box-shadow: 0px 1px 59px 0px rgba(34, 60, 80, 0.2);
}
</style>