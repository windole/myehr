 <template>
    <div class="pass fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <!-- banner广告 -->
            <div class="bannerWrap page-1 page" v-if='showBanner'>
                <div class="bannerLoop" ref="bannerLoop">
                    <swiper :options="bannerOption" ref="bannerOption" class="clear">
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner7.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>基于乐高式的配置组件</h4>
                                    <div class="tips" style="display:block;">
                                        <!-- <p style="width:100%;">基于乐高式的配置组件</p> -->
                                    </div>
                                </div>
                                <div class="en">
                                    <p>灵活定义不同业务场景</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner6.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>灵活可扩展的应用平台</h4>
                                    <div class="tips" style="display:block;">
                                        <!-- <p style="width:100%;">基于乐高式的配置组件</p> -->
                                    </div>
                                </div>
                                <div class="en">
                                    <p>深度满足企业业务需求</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner8.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>多种可配置建模引擎</h4>
                                    <div class="tips" style="display:block;">
                                        <!-- <p style="width:100%;">基于乐高式的配置组件</p> -->
                                    </div>
                                </div>
                                <div class="en">
                                    <p>实现项目的快速交付</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev btn prev" slot="button-prev"></div>
                        <div class="swiper-button-next btn next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <loading v-if="!showBanner"></loading>
            <!-- 解决方案 -->
            <!-- 优势 -->
            <div class="part advantage page-2 page">
                <div v-animate="{value: 'bounceInLeft', delay: 0}" style="height:100%;background:url(static/img/advantage.png) no-repeat 80% center;background-size:50%;">
                    <ul>
                        <h2>MyeHR移动办公平台</h2>
                        <li>一次开发 多端运行</li>
                        <li>人性化UI设计</li>
                        <li>界面友好，操作便捷</li>
                        <li>灵活增加应用，可扩展性强</li>
                        <li>全面适应iOS、Android端</li>
                    </ul>
                </div>
            </div>
            <!-- 数据建模 -->
            <div class="part modal clear page-3 page">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>多平台数据建模</p>
                    <p class="desc">MyeHR统一技术平台</p>
                    <span class="line"></span>
                </div>
                <div class="cont">
                    
                </div>
            </div>
            <!-- 架构 -->
            <div class="part architecture clear page-4 page">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>技术平台总体架构</p>
                    <p class="desc">MyeHR产品设计理念</p>
                    <span class="line"></span>
                </div>
                <div class="cont">
                    
                </div>
            </div>
            <v-foot class="page-9 page"></v-foot>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios';
    import foot from './../foot.vue';
    import loading from './../loading.vue';
    import swiper from './../swiper.vue';
    import swiperSlide from './../slide.vue';
    export default{
        data() {
            return {
                head: {},
                scroll: '',
                next: 0,
                showBanner: false,
                dark: false,
                plus: [],
                projectData: [],
                currentType: 1,
                bannerOption: {
                    //  所有配置均为可选（同Swiper配置）
                    autoplay: false,
                    loop: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    paginationClickable: true,
                    observeParents: true,
                    onlyExternal: true,
                    slidesPerView: 1,
                    nextButton: '.bannerLoop .swiper-button-next',
                    prevButton: '.bannerLoop .swiper-button-prev',
                    speed: 1000
                },
                opts: {
                    start: 0,
                    dir: 'v',
                    duration: 500
                }
            };
        },
        computed: {
            webType() {
                if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
                    return 1;
                } else {
                    return 0;
                }
            },
            baseFont() {
                return parseInt(document.documentElement.style.fontSize);
            }
        },
        components: {
            'loading': loading,
            'vFoot': foot,
            'swiper': swiper,
            'swiperSlide': swiperSlide
        },
        methods: {
            menu() {
                this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
            },
            moveNext() {
                this.$refs.example.$fullpage.moveNext(); // Move to the next page
            },
            getDate() {
                let that = this;
                // 获取banner数据设置
                this.showBanner = false;
                // 解决方案设置
                this.showSol = false;
                this.showSolBn = false;
                axios.get('./../../static/data/index-body.json').then((response) => {
                    // console.log(response);
                    let data = response.data;
                    that.bannerUrl = data.base_url;
                    // 获取baner数据
                    // that.bannerLoop = data.head.slide;
                    // console.log(that.bannerLoop);
                    that.showBanner = true;
                    // 获取解决方案
                    that.projectData = data.project;
                });
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
        },
        created() {
            this.getDate();
        }
    };
</script>
<style type="text/css" scoped>
.pass{width:100%;color: rgb(105,105,105);}

/*优势*/
.part.advantage ul{padding: 13% 0 0 15%;color: #333;}
.part.advantage ul h2{font-size: 24px;font-weight: 100;margin-bottom: 10px;}
.part.advantage ul li{line-height: 35px;list-style: disc;font-size: 16px;color: #666;}
/*modal*/
.part.modal .cont{height: calc(100% - 115px);background: url(../../../static/img/pass-modal.png) no-repeat center;background-size: 78%;}

/*架构*/
.architecture .cont{height: calc(100% - 115px);background: url(../../../static/img/architecture.png) no-repeat center;background-size: 52%;}


@media screen and (max-width:767px){
     .part .title p{font-size:1.7rem;}
     .part .title p.desc{font-size:.8rem;}
     .page{top:5rem;}
     .bannerWrap{height: 100%;}
}
 .part .title.active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
 .part .cont .more{margin:3rem auto 5rem;width:10rem;height:2.8rem;border-radius:1.4rem;background:url(../../../static/img/more_border.png) no-repeat center center;background-size:contain;}
 .part .cont .more:hover{background-image:url(../../../static/img/more_active.png);}
 .part .cont .more:hover a{color:#fff;}
 .part .cont .more a{display:block;width:100%;height:100%;color:#0079ef;text-align:center;font-size:16px;line-height:2.8rem;}


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

