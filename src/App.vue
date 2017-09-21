<template>
  <div class="main-content">
    <keep-alive>
        <v-header :dark='dark'></v-header>
    </keep-alive>

    <keep-alive>
        <router-view  @isdark="getDark"></router-view>
    </keep-alive>

    <!-- <keep-alive>
        <v-top></v-top>
    </keep-alive> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header.vue';
  // import top from './components/top.vue';
  export default{
      data() {
          return {
              dark: false,
              baseUrl: '',
              title: '',
              description: '',
              keywords: '',
              Newstitle: '',
              Newsdescription: '',
              Newskeywords: ''
          };
      },
      components: {
          'vHeader': header
          // 'vTop': top
      },
      methods: {
          getDark() {
              this.dark = !this.dark;
          },
          font() {
              var ohtml = document.documentElement;
              var screenWidth = ohtml.clientWidth;
              if (screenWidth >= 768) {
                  ohtml.style.fontSize = 20 * screenWidth / 1920 + 'px';
              } else {
                  ohtml.style.fontSize = screenWidth * 20 / 640 + 'px';
              };
          }
      },
      mounted() {
          window.addEventListener('resize', this.font);
      },
      created() {
          this.font();
      }
  };
</script>

<style>
.main-content{width: 100%;height: 100vh;}
 .swiper-button-disabled{pointer-events:auto;}
 .banner{position:relative;overflow:hidden;width:100%;height:46rem;background:rgba(0,0,0,.4);}
 .banner .text{position:absolute;top:50%;left:50%;display:inline-block;vertical-align:top;text-align:center;transform:translate(-50%,-50%);}
 .banner .text .tit{text-align:center;}
 .banner .text .tit h4{display:inline-block;color:#fff;vertical-align:top;font-weight:400;font-size:3.5rem;line-height:4.6rem;}
 .banner .text .tit span.line{display:block;display:inline-block;margin-top:1.4rem;margin-right:2.5rem;margin-left:2.5rem;width:.15rem;height:1.8rem;background:#fff;vertical-align:top;}
 .banner .text .tit .tips{display:inline-block;vertical-align:top;}
 .banner .text .tit .tips p{color:#fff;font-size:1.3rem;line-height:2.3rem;}
 .banner .text .tit .tips p span{display:block;}
 .banner .text .en{margin-top:3.5rem;color:#fff;font-size:2.3rem;line-height:1;}
 .banner .bg{position:absolute;top:0;left:0;z-index:-1;display:block;width:100%;height:100%;}
 .banner .next{position:absolute;bottom:3rem;left:50%;transform:translateX(-50%);}
 .banner .next i.iconfont{background:-moz-linear-gradient(top,#0fce98,#008cf5);background:-webkit-gradient(linear,0 0,0 bottom,from(#0fce98),to(#008cf5));background:-ms-linear-gradient(top,#0fce98,#008cf5);color:transparent;font-size:2rem;cursor:default;FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr=#0fce98,endColorStr=#008cf5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
 .banner .next i.nobg{background:0 0;color:#008cf5;}
 .bannerWrap{height:48rem;}
 .bannerLoop{position:relative;overflow:hidden;width:100%;height:100%;background-size:cover;}
 .bannerLoop .swiper-container{width:100%;height:100%!important;}
 .bannerLoop .swiper-container .swiper-wrapper{height:100%!important;}
 .bannerLoop .swiper-container .swiper-wrapper .item{position:relative;height:100%;}
 .bannerLoop .swiper-container .swiper-wrapper .item .bg{display:block;width:100%;height:100%;background-size:cover;}
 .bannerLoop .swiper-container .swiper-wrapper .item .bg:before{display:block;width:100%;height:100%;background:rgba(0,0,0,.4);content:'';}
 .bannerLoop .item{position:relative;}
 .bannerLoop .txt{position:absolute;top:50%;left:50%;display:inline-block;vertical-align:top;text-align:center;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);}
 .bannerLoop .txt .tit{text-align:center;}
 .bannerLoop .txt .tit h4{display:inline-block;color:#fff;vertical-align:top;font-weight:400;font-size:2.8rem;line-height:4.6rem;}
 .bannerLoop .txt .tit span.line{display:block;display:inline-block;margin-top:1.4rem;margin-right:2.5rem;margin-left:2.5rem;width:.15rem;height:1.8rem;background:#fff;vertical-align:top;}
 .bannerLoop .txt .tit .tips{display:inline-block;vertical-align:top;margin-bottom: 2em;}
 .bannerLoop .txt .tit .tips p{color:#fff;font-size:1.5rem;line-height:2.3rem;}
 .bannerLoop .txt .tit .tips p span{display:block;}
 .bannerLoop .txt .en{margin-top:2.5rem;color:#fff;font-size:1.5rem;line-height:1;}
 .bannerLoop .next{position:absolute;right:10px;bottom:3rem;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);-ms-transform:translateX(-50%);}
 .bannerLoop .next i.iconfont{background:-moz-linear-gradient(top,#0fce98,#008cf5);background:-webkit-gradient(linear,0 0,0 bottom,from(#0fce98),to(#008cf5));background:-ms-linear-gradient(top,#0fce98,#008cf5);color:transparent;font-size:2rem;cursor:default;FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr=#0fce98,endColorStr=#008cf5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
 .bannerLoop .next i.nobg{background:0 0;color:#008cf5;}
@media screen and (max-width:1400px){

}


@media screen and (max-width:1150px){
    .banner .text{width:80%;}
    .banner .text .tit h4{font-size:30px;line-height:50px;}
    .banner .text .tit span.line{margin-top:15px;margin-right:20px;margin-left:20px;height:20px;}
    .banner .text .tit .tips p{font-size:15px;line-height:25px;}
    .banner .text .en{margin-top:30px;font-size:30px;}
    .part .title{padding-bottom:20px;}
    .part .title p{font-size:17px;line-height:40px;}
    .part .title p.desc{margin-top:20px;font-size:12px;line-height:1;}
    .part .cont .more{margin:30px auto;width:15.4%;height:30px;line-height:30px;}
    .part .cont .more a{font-size:14px;line-height:30px;}
}


@media screen and (max-width:800px){
    .banner .text .tit h4{font-size:26px;line-height:50px;}
    .banner .text .tit span.line{margin-top:15px;margin-right:20px;margin-left:20px;height:20px;}
    .banner .text .tit .tips p{margin:auto;font-size:14px;line-height:25px;}
    .banner .text .en{margin-top:22px;font-size:30px;}
}

@media screen and (max-width:767px){.banner .bg{text-align:center;}
    .banner .text{padding-right:1.5rem;padding-left:1.5rem;width:100%;}
    .banner .text .en{display:none;}
    .banner .text .tit h4{display:block;font-weight:400;font-size:2.2rem;line-height:4rem;}
    .banner .text .tit span.line{display:none;}
    .banner .text .tit .tips{display:block;width:100%;}
    .banner .text .tit .tips p span{display:inline-block;margin-right:.7rem;margin-left:.7rem;text-align:center;font-size:1.3rem;}
    .part .title{padding-top:1rem;padding-bottom:1.5rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
    .part .title p{font-size:1.7rem;}
    .part .title p.desc{margin-top:1.5rem;font-size:.9rem;}
    .part .cont .more{margin-top:2.3rem;margin-bottom:3rem;width:10rem;height:2.7rem;}
    .part .cont .more a{font-size:1rem;}
}

</style>