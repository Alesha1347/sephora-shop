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
                  <div class="comments__info-helpful">

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