<template>
<!-- 新闻中心 -->
<loading v-if="showSol&&showSolBn&&!showNews&&!showNewsBn"></loading>
<div class="part news" v-if="!showNews&&showNewsBn">
    <div class="title" :class="{ active : scroll >= baseFont * (180 - 5 ) }">
        <p>{{newsBnCn.ModuleName}}</p>
        <span class="line"></span>
        <p class="desc">{{newsBnCn.ModuleNamePlus}}</p>
    </div>
    <div class="cont"  :class="{ active : scroll >= baseFont * (200 - 5 ) }">
        <div class="wrap clear">
        </div>
        <div class="more">
            <router-link to="/news">查看更多</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            showNews: true,
            showNewsBn: true,
        };
  }
};
</script>

<style lang="css" scoped>
div.index div.part.news div.cont {
  padding-left: 10rem;
  padding-right: 10rem;
  transform: translateY(20%);
  -webkit-transform: translateY(20%);
  -moz-transform: translateY(20%);
  -ms-transform: translateY(20%);
  -o-transform: translateY(20%);
  transition: all 0.6s 0.2s;
  -webkit-transition: all 0.6s 0.2s;
  -moz-transition: all 0.6s 0.2s;
  -ms-transition: all 0.6s 0.2s;
  -o-transition: all 0.6s 0.2s;
}
div.index div.part.news div.cont.active {
  transform: translateY(0%);
  -webkit-transform: translateY(0%);
  -moz-transform: translateY(0%);
  -ms-transform: translateY(0%);
  -o-transform: translateY(0%);
}
div.index div.part.news div.cont div.wrap {
  width: 100%;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item {
  width: 33.33%;
  float: left;
  padding-right: 2rem;
  padding-left: 2rem;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item:hover div.img {
  background-size: cover;
  background-position: center;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item:hover div.img a {
  transform: scale(1.15);
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item:hover div.img a img {
  transform: scale(1.15);
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.img {
  width: 100%;
  height: 15rem;
  margin-bottom: 2rem;
  overflow: hidden;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.img a {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  background-size: cover;
  background-position: center;
  transition: all 0.6s 0.2s;
  -webkit-transition: all 0.6s 0.2s;
  -moz-transition: all 0.6s 0.2s;
  -ms-transition: all 0.6s 0.2s;
  -o-transition: all 0.6s 0.2s;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.img a img {
  max-width: 100%;
  max-height: 100%;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text {
  padding-bottom: 1.8rem;
  border-bottom: 1px solid #acceec;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text div.tit {
  margin-bottom: 0.8rem;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text div.tit span.line {
  display: block;
  width: 2.3rem;
  height: 2px;
  background: #0079ef;
  margin-bottom: 1.3rem;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text div.tit a {
  font-size: 18px;
  color: #0179ef;
  line-height: 1;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text p {
  font-size: 14px;
  line-height: 1.4rem;
  color: #333;
  text-align: justify;
  margin-bottom: 1rem;
  height: 4.2rem;
  overflow: hidden;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text a.detail {
  float: right;
  font-size: 14px;
  color: #0179ef;
  line-height: 1rem;
  display: block;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.item div.text a.detail span.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: top;
  background: url('../../../static/img/more.png') no-repeat center center;
  background-size: contain;
  margin-left: 0.6rem;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.btn {
  display: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(169, 175, 191, 0.4);
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 100;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.btn:hover {
  background: rgba(0, 120, 240, 0.3);
}
div.index div.part.news div.cont div.wrap div.swiper-container div.btn:before {
  content: '';
  width: 2rem;
  height: 2rem;
  background: url('../../../static/img/arrow_prev.png') no-repeat center center;
  background-size: contain;
  display: block;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.btn.next {
  right: 0.5rem;
}
div.index div.part.news div.cont div.wrap div.swiper-container div.btn.next:before {
  background-image: url('../../../static/img/arrow_next.png');
}
div.index div.part.news div.cont div.wrap div.swiper-container div.btn.prev {
  left: 0.5rem;
}
@media screen and (max-width: 1400px) {
     div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.swiper-slide div.img {
    margin-bottom: 1rem;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.swiper-slide div.text div.tit a {
    font-size: 16px;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.swiper-slide div.text p {
    font-size: 14px;
  }
}
@media screen and (max-width: 1150px) {
    div.index div.part.news div.cont {
    padding-left: 40px;
    padding-right: 40px;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item {
    padding-left: 14px;
    padding-right: 14px;
  }
}
@media screen and (max-width: 800px) {
    div.index div.part.news div.cont {
    padding-left: 20px;
    padding-right: 20px;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text div.tit a {
    font-size: 14px;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text p {
    font-size: 12px;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text a.detail {
    font-size: 12px;
  }
}

@media screen and (max-width: 767px) {
     div.index div.part.news div.cont {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -ms-transform: translateY(0%);
    -o-transform: translateY(0%);
  }
  div.index div.part.news div.cont div.wrap div.swiper-container {
    border-bottom: 1px solid #acceec;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item {
    width: 100%;
    padding: 0px;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.img {
    margin-bottom: 1.8rem;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.img a img {
    width: 100%;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text {
    border: none;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text div.tit span.line {
    margin-bottom: 1.5rem;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text div.tit a {
    font-size: 1.1rem;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    text-align: justify;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.swiper-wrapper div.item div.text a.detail {
    font-size: 0.9rem;
  }
  div.index div.part.news div.cont div.wrap div.swiper-container div.btn {
    display: block;
  }
  div.index div.part.news div.cont div.more a {
    font-size: 1rem;
    line-height: 2.7rem;
  }
}
</style>