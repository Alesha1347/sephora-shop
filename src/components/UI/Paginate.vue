<template>
  <div class="pagination" @click="changePage(currentPage)">
      <b-pagination
        v-model="currentPageChange"
        :total-rows="counts"
        :per-page="60"
        aria-controls="my-table"
        :limit="3"
        size="sm"
        pills 
      ></b-pagination>
  </div>
</template>

<script>
export default {
    name: 'MyPaginate',
    props:['counts', 'currentPage'],
    computed:{
        currentPageChange:{
            get(){
                return this.currentPage
            },
            set(newCurrentPage){
                this.$emit('update:currentPage', newCurrentPage)
            }
        }
    },
    methods:{
        changePage(currentPage){
            this.$emit('update:currentPage', currentPage)
            this.$emit('changePage', currentPage)
        }
    }
}
</script>

<style>
.pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
}
.pagination .page-item{
    margin-right: 10px;
    box-shadow: none;
    text-align: center;
}
.pagination .page-item .page-link{
    font-size: 20px;
}
.pagination .page-item:hover .page-link{
    color: white;
    background-color: black;
}
.pagination .page-item:focus .page-link{
    box-shadow: none;
}
.pagination .page-link{
    color: black;
    font-weight: bold;
    border: none;
}
.pagination .pagination-sm .page-link{
    padding: 5px 10px; 
    text-align: center;
}
.pagination .page-item.active .page-link{
    color: white;
    background-color: black;
    box-shadow: none;
}
.pagination .page-item:focus,
.pagination .page-link:active
{
    outline: none;
    box-shadow: none;
    background-color: white;
    color: black;
}
.pagination .page-item .page-link:focus{
    outline: none;
    box-shadow: none;
}
.pagination .page-item.disabled .page-link{
    background-color: white;
    color: black;
}
</style>