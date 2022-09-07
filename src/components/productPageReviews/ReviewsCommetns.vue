<template>
        <div class="reviews__comments">
          <h4 class="reviews__comments-title"></h4>
          <div class="reviews__comments-info">
              <div class="comments__rating-info">
                  <div class="comment__rating">
                      <StarRating
                      :rating="review.Rating"
                      />
                  </div>
                  <div class="commetns__rating-time">
                      {{ getData() }}
                  </div>
              </div>
              <div class="comments__info">
                  <div class="comments__info-title">
                      {{ review.Title }}
                  </div>
                  <div class="comments__info-descr">
                      {{ review.ReviewText }}
                  </div>
                  <div class="comments__info-photos"
                  v-for="(photo, index) in review.Photos"
                  :key="index"
                  >
                    <img 
                    class="photo__thumbnail" 
                    :src="photo.Sizes.thumbnail.Url"
                    @click="openPhoto"
                    >
                    <img 
                    class="photo__normal" 
                    v-if="isNormal"
                    :src="photo.Sizes.normal.Url"
                    @click="closePhoto"
                    >
                  </div>

              </div>
              <div class="reviews__comments-user">
                  <img class="user__avatar" :src="review.AdditionalFields.sociallockup.Value.substr(7)">
                      <div class="user__name">
                          {{ review.UserNickname }}
                      </div>
              </div>
          </div>
      </div>
</template>

<script>
import StarRating from '../UI/StarRating.vue'
export default {
    components:{StarRating},
    props:{
        review:{
            type: Object,
            default:() => {}
        }
    },
    data(){
        return{
            isNormal: false
        }
    },
    methods:{
        getData(){
        let a = new Date(`${this.review.LastModeratedTime}`);
        let res = [
            addLeadZero(a.getDate()),
            addLeadZero(a.getMonth() + 1),
            a.getFullYear()
        ].join('.');
        function addLeadZero(val) {
            if (+val < 10) return '0' + val
            return val
        }
        return res
        },
        openPhoto(){
            this.isNormal = true
        },
        closePhoto(){
            this.isNormal = false
      }
    },
    watch:{
        'isNormal': function(){
            if(this.isNormal){
                document.documentElement.style.overflow = 'hidden'
                // let paddingOffset = window.innerWidth - document.body.offsetWidth
                let paddingOffset = 19 + 'px'
                document.body.style.paddingRight = paddingOffset
            } else {
                document.documentElement.style.overflow = 'auto'
                document.body.style.paddingRight = 0
            }
        }
    }
}
</script>

<style>
.reviews__comments {
    
}
.reviews__comments-title {
}
.reviews__comments-info {
    display: flex;
    border-bottom: 1px solid lightgray;
    padding: 30px 0;
}
.comments__rating-info{
    margin-right: 100px;
}
.comment__rating {
    display: flex;
    margin-bottom: 10px;
}
.star{
    margin-right: 5px;
}
.comments__info {
    margin-right: 100px;
    width: 1000px;
}
.comments__info-title {
    font-weight: bold;
    margin-bottom: 5px;
}
.comments__info-descr {
    font-size: 14px;
}
.comments__info-photos{
   position: relative;
display: flex;
}
.photo__thumbnail{
    cursor: pointer;
    width: 150px;
    height: 100px;
    border: 1px solid black;
    border-radius: 10px;
}
.photo__normal{
  display: flex;
  width: 50%;
  height: 50%;
  position: fixed;
    left: 25%;
    top: 25%;
    right: 0;
    bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
      border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
}

.comments__info-helpful {
}
.reviews__comments-user {
    display: flex;
    align-items: center;
    border-left: 1px solid lightgray;
    padding-left: 20px;
}
.user__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
}
.user__name {
    font-weight: bold;
}
</style>