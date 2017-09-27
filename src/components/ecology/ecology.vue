 <template>
    <div class="ecology">
        <!-- banner广告 -->
        <div class="bannerWrap" v-if='showBanner'>
            <div class="bannerLoop" ref="bannerLoop">
                <swiper :options="bannerOption" ref="bannerOption" class="clear">
                    <swiper-slide class="item"  key="index">
                        <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner5.jpg)'}"></div>
                        <div class="txt">
                            <div class="tit clear">
                                <div class="tips" style="display:block;">
                                    <p style="width:100%;">致力于打造人力资源全新生态圈</p>
                                </div>
                                <h4>把握市场机遇，合作共赢发展</h4>
                            </div>
                            <div class="en">
                                <p>加入我们，携手共赢</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev btn prev" slot="button-prev"></div>
            <div class="swiper-button-next btn next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <loading v-if="!showBanner"></loading>
        <!-- 生态 -->
        <div class="plan">
            <h2>MyeHR合作伙伴计划</h2>
            <p>在移动互联网和共享经济的推动下，传统的雇佣模式正被合伙人模式逐渐取代。根据《2017中国SaaS用户研究报告》显示，人力资源管理软件以44.6%的成功应用企业呈现较大潜力和增幅。同时，企业对人才管理战略逐渐提上日程，从智能招聘到员工生产力管理再到企业战略执行落地都有巨大的市场需求。MyeHR给有志于开创新事业的年轻人提供一个平台，本着资源共享、合理酬劳、全过程透明原则，给年轻有梦想的你一个更大的舞台，实现从给别人打工到给自己打工的蜕变。</p>
        </div>

        <div class="ecologyWrap">
            <div class="ecologyItem">
                <div class="pic">
                    <img src="static/img/ecology/1.png" alt="">
                    <h3>资源共享机制</h3>
                </div>
                <p>在资源共享机制的推动下，采取深度合作模式，共同推进和提高资源利用率，实现互利共赢。</p>
            </div>
            <div class="ecologyItem">
                <div class="pic">
                    <img src="static/img/ecology/2.png" alt="">
                    <h3>合理酬劳分配</h3>
                </div>
                <p>我们会根据您提供线索最终签订的合同金额，按照对应阶梯进行酬劳分配（分成比例10-30%不等）。</p>
            </div>
            <div class="ecologyItem">
                <div class="pic">
                    <img src="static/img/ecology/3.png" alt="">
                    <h3>全过程透明原则</h3>
                </div>
                <p>与其他厂商不同，我们采取全过程透明原则，开放CRM入口，对于提供资源，您可全过程跟进，了解目前进度、客户反馈及是否签单、签单金额等信息。从根本上确保您的个人利益。</p>
            </div>
        </div>

        <div class="step">
            <div class="img"><img src="static/img/step.png" alt=""></div> 
            <div class="ui container">
                <div class="ui segment paragraph">
                    <div class="ui vertical aligned segment top">
                        <div class="summary">
                            <h2>合作共赢、协同发展</h2>
                        </div>
                        <p>我们始终保持开放的心态，真诚欢迎您的到来。</p>
                    </div>
                    <div class="ui vertical aligned segment">
                        <i class="icon-about-hand"></i>
                        <h4>商务合作请联系</h4>
                        <p class="email">13122069450</p>
                        <p class="email">myehr@163.com</p>                            
                    </div>
                </div>
            </div>         
        </div>
        
        <v-foot></v-foot>
        <v-top></v-top>
    </div>
</template>
<script type="text/javascript">
    import foot from './../foot.vue';
    import loading from './../loading.vue';
    import swiper from './../swiper.vue';
    import swiperSlide from './../slide.vue';
    import top from './../top.vue';
    export default{
        data() {
            return {
                head: {},
                scroll: '',
                next: 0,
                showBanner: true,
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
            'swiperSlide': swiperSlide,
            'vTop': top
        },
        methods: {
            menu() {
                this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
            },
            moveNext() {
                this.$refs.example.$fullpage.moveNext(); // Move to the next page
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
        }
    };
</script>
<style type="text/css" scoped>
.fullpage-container{position:absolute;top:0;left:0;width:100%;height:100%;}
.ecology{width:100%;color: rgb(105,105,105);}
.ecology .bannerWrap{height:100vh;}
.part .title{/*padding-top:1.3rem;*/padding-bottom:2.5rem;text-align:center;-webkit-transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;transition:all 1s;-webkit-transform:translateY(30%);-moz-transform:translateY(30%);-o-transform:translateY(30%);transform:translateY(30%);-ms-transform:translateY(30%);-ms-transition:all 1s;}
.part .title p{color:#333;font-size:24px;line-height:4.3rem;}
.part .title span.line{display:inline-block;margin:0 auto;width:4rem;height:.2rem;background:#0079ef;}
.part .title p.desc{margin-top:1.6rem;color:#666;font-size:16px;line-height:1rem;}

.plan{margin: 3rem 10% 5rem;width: 80%;}
.plan h2{text-align: center;line-height:5.3rem;font-size: 2.1em;font-weight: 400;color: #036;}
.plan p{text-indent: 2em;line-height: 1.8em;color:#333;}

.ecologyWrap{width:80%;margin-left:10%;display: flex;justify-content: center;margin-bottom: 5rem;}
.ecologyWrap .ecologyItem{width: 25%;text-align: center;}
.ecologyWrap .ecologyItem .pic{width: 68%;height: 0;padding-bottom: 68%;border-radius: 50%;margin:0 auto;}
.ecologyWrap .ecologyItem:nth-child(1) .pic{border:3px solid rgb(46,167,189);}
.ecologyWrap .ecologyItem:nth-child(2) .pic{border:3px solid rgb(34,128,195);}
.ecologyWrap .ecologyItem:nth-child(3) .pic{border:3px solid rgb(88,88,172);}
.ecologyWrap .ecologyItem .pic img{margin: 2.2em 0 .5em;max-width: 90px;}
.ecologyWrap .ecologyItem .pic h3{color: #333;}
.ecologyWrap .ecologyItem p{width: 65%;margin:0 auto;height: 8.5rem;display: table-cell;vertical-align: middle;    padding: 0 2em;
    text-indent: 2em;text-align: left;}
.step{text-align: center;margin-bottom:3em;}
.step .img{width: 100%;margin:0 auto;padding: 0 10%;background-color:#F4F4F4;}
.step .img img{width: 100%;}
.step .paragraph {padding: 0 48px;position: relative;margin:1rem 0;}
.step .ui.segment .ui.vertical.segment {height: 50%;padding-top: 50px;position: relative;}
.step .ui.segment .ui.vertical.segment.top:before {position: absolute;content: "";width: 170px;
    height: 2px;background-color: #0cf;bottom: -40px;left: 50%;margin-left: -85px;}
.summary h2 {font-size: 38px;font-weight: 400;margin-bottom: 40px;color: #036;}
.step .ui.segment .ui.vertical.segment p {color: #666;line-height: 28px;}
.ui.vertical.segment .icon-about-hand {display: inline-block;margin: 30px 0;font-size: 80px;color: #036;}
.step .ui.segment .ui.vertical.segment h4 {margin-bottom: 10px;}
.ui.vertical.segment .email {font-size: 18px;color: #036;}





.ecology .footer{top: 0;}

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
    .banner span.music{right:2rem;}
    .part .title{padding-top:1rem;padding-bottom:1.5rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
    .part .title p{font-size:1.7rem;}
    .part .title p.desc{margin-top:1.5rem;font-size:.9rem;}
    .part .cont .more{margin-top:2.3rem;margin-bottom:3rem;width:10rem;height:2.7rem;}
    .part .cont .more a{font-size:1rem;}
}
@media only screen and (min-width: 1200px){
.ui.container {width: 1200px!important;margin:0 auto;}

}


</style>

