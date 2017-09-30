 <template>
    <div class="MyeHR">
        <!-- banner广告 -->
        <div class="bannerWrap" v-if='showBanner'>
            <div class="bannerLoop" ref="bannerLoop">
                <swiper :options="bannerOption" ref="bannerOption" class="clear">
                    <swiper-slide class="item"  key="index">
                        <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner2.jpg)'}"></div>
                        <div class="txt">
                            <div class="tit clear">
                                <div class="tips" style="display:block;">
                                    <p style="width:100%;">MyeHR 社交化 实时互动</p>
                                </div>
                                <h4>18年创新之路 专注eHR深度应用</h4>
                            </div>
                            <div class="en">
                                <p>合作共赢   协同发展</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev btn prev" slot="button-prev"></div>
            <div class="swiper-button-next btn next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <loading v-if="!showBanner"></loading>
        
        <!-- 产品与服务 -->

        <div class="part product">
            <div class="title" :class="{ active : scroll >= baseFont * ( 66 - 5 ) }">
                <p>为什么选择MyeHR？</p>
            </div>
            <div class="cont grid" ref="aboutus">
                <div class="row">
                    <div class="ui item slide down instant reveal" v-for="item in product">
                        <div class="visible content">
                            <div class="graphic health content" :style="{backgroundImage:'url('+ item.ProductThumb +')'}">
                                <div class="cell">
                                    <p v-html="item.ProductTitle"></p>
                                </div>
                            </div>
                        </div>
                        <div class="hidden content">
                            <div class="text dark content">
                                <div class="cell">
                                    <p v-html="item.ProductTitlePlus"></p>
                                    <a class="ui inverted button">查看详情</a>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="cell card-center match-height" matchheight="" style="cursor: pointer; height: 357px;">
                <article class="icon-content">
                    <header>
                        <div class="icon-container ">
                            <img src="static/img/myehr1.png" alt="">
                        </div>                                
                        <h6 class="heading">
                            公司使命
                        </h6>
                    </header>
                    <section class="content">
                        <p class="size-down">
                            MyeHR旨在为企业用户构建专业化、智能化、移动化、社交化的人才资源管理综合解决方案。以“人力资源核心算法+ 云计算应用+大数据分析+社会化运营”等核心竞争力为依托,为企业用户的人才分析决策提供数据支持。
                        </p>
                    </section>
                    <footer>
                            <a href="">免费体验></a>   
                    </footer>
                </article>
            </div>
            <div class="cell card-center match-height" matchheight="" style="cursor: pointer; height: 357px;">
                <article class="icon-content">
                    <header>
                        <div class="icon-container">
                            <img src="static/img/myehr2.png" alt="">
                        </div>                                
                        <h6 class="heading">
                            企业愿景
                        </h6>
                    </header>
                    <section class="content">
                        <p class="size-down">
                            MyeHR正在打造聚合不同行业、不同领域的员工管理生态模型；并在此基础上，通过EAP员工关怀、员工自助、HR服务等功能，提供多样的、人性化的服务，给国内HR软件市场带来重大变革，给企业效能的提升提供更强的推动力！
                        </p>
                    </section>
                    <footer>
                            <a href="">免费体验></a>   
                    </footer>
                </article>
            </div>
        </div>

        <!-- 三大住模块 -->
        <div class="part mainmodal">
            <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                <p>MyeHR三大层级主模块</p>
                <p class="desc">通过模块的组合运作满足企业eHR系统建设需求</p>
            </div>
            <div class="cont grid">
                <div class="row">
                    <div class="ui item slide down instant reveal">
                      <div class="visible content">
                          <div class="graphic health content" style="background-image:url(static/img/style1.jpg);">
                              <div class="cell">
                                  <p>开发平台</p>
                              </div>
                          </div>
                      </div>
                      <div class="hidden content">
                          <div class="text dark content">
                              <div class="cell">
                                    <p>统一建模/统一门户<br/>
                                    统一流程/统一身份</p>
                              </div>
                          </div>
                      </div>
                    </div>    
                    <div class="ui item slide down instant reveal">
                      <div class="visible content">
                          <div class="graphic health content" style="background-image:url(static/img/style2.jpg);">
                              <div class="cell">
                                  <p>HR应用</p>
                              </div>
                          </div>
                      </div>
                      <div class="hidden content">
                          <div class="text dark content">
                              <div class="cell">
                                  <p>组织管理/人事管理/培训管理<br/>
                                  薪酬福利/考勤管理/绩效管理<br/>
                                  招聘管理/员工发展</p>
                              </div>
                          </div>
                      </div>
                    </div>    
                    <div class="ui item slide down instant reveal">
                      <div class="visible content">
                          <div class="graphic health content" style="background-image:url(static/img/style3.jpg);">
                              <div class="cell">
                                  <p>员工服务</p>
                              </div>
                          </div>
                      </div>
                      <div class="hidden content">
                          <div class="text dark content">
                              <div class="cell">
                                    <p>移动办公、员工关怀、积分激励<br/>
                                    学习生成、共享服务中心</p>
                              </div>
                          </div>
                      </div>
                    </div>    
                </div>
            </div>
        </div>
        <v-foot></v-foot>
        <v-top></v-top>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios';
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
                showBanner: false,
                dark: false,
                plus: [],
                product: {},
                projectData: [],
                currentType: 1,
                pageNum: 5,
                currentNavIndex: 0,
                bannerOption: {
                    //  所有配置均为可选（同Swiper配置）
                    autoplay: 2000,
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
                    duration: 500,
                    beforeChange: function (prev, next) {
                        console.log(next);
                        this.currentNavIndex = next;
                    }
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

                    that.product = data.product;
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
.fullpage-container{position:absolute;top:0;left:0;width:100%;height:100%;}
.MyeHR{width:100%;color: rgb(105,105,105);}

.part.product .cont{width: 80%;margin-left: 10%;margin-top: 5rem;}
.part.product .cont .row .ui.item{width: 24%;height: 0;padding-bottom: 24%;margin-right: 1%;box-sizing: border-box;}
.part.product .cont .row .ui .content{width: 100%;height: 0;padding-bottom: 100%;background-size: cover;background-repeat: no-repeat;}
.part.product .cont .row .ui .cell{text-align: center;}
.part.product .cont .row .ui .visible .cell {display: flex;justify-content: center;align-items: center;height: 320px;}
.part.product .cont .row .hidden .text {height: 100%;background-color: #0cf;margin-top: -12px;}
.part.product .cont .row .ui  .cell p {color: #fff;font-size: 16px;margin-top: 12px;}
.part.product .cont .row .hidden p{padding-top: 30%;width: 80%;margin: 0 auto;word-wrap: break-word;text-align: center;}


.part.mainmodal .cont{width: 60%;margin-left: 20%;margin-top: 5rem;}
.part.mainmodal .cont .row .ui.item{width: 32%;height: 0;padding-bottom:32%;margin-right: 1%;box-sizing: border-box;}
.part.mainmodal .cont .row .ui .content{width: 100%;height: 0;padding-bottom: 100%;background-size: cover;background-repeat: no-repeat;}
.part.mainmodal .cont .row .ui .cell{text-align: center;}
.part.mainmodal .cont .row .ui .visible .cell {display: flex;justify-content: center;align-items: center;height: 320px;}
.part.mainmodal .cont .row .hidden .text {height: 100%;background-color: #0cf;margin-top: -12px;}
.part.mainmodal .cont .row .ui  .cell p {color: #fff;font-size: 16px;margin-top: 12px;}
.part.mainmodal .cont .row .hidden p{padding-top: 30%;width: 80%;margin: 0 auto;word-wrap: break-word;text-align: center;line-height: 2em;}


.iconwarp{margin:0 auto;padding-top:120px;padding-bottom:60px;width:905px;}
.iconitem{position:relative;top:0;float:left;margin:13px;width:200px;height:200px;border-radius:50%;text-align:center;opacity:1!important;transition:all 1s;}
.iconitem:nth-child(1){background: rgb(79,129,189);}
.iconitem:nth-child(2){background: rgb(192,80,77);}
.iconitem:nth-child(3){background: rgb(155,187,89);}
.iconitem:nth-child(4){background: rgb(128,100,162);}
.iconitem h2{margin:20px 0;color:#fff;font-size: 1.3em;font-weight: 100;}
.iconitem:hover{background: rgba(0,0,0,.75);}
.iconitem:hover h2,.iconitem:hover img{display: none;}
.iconitem:hover p{display: block;}
.iconitem p{padding:0 27px;color:#fff;font-size:12px;display: none;position: absolute;top: 45%;}
.iconitem img{margin-top:38px;}

/*卡片*/
.card{width: 60%;margin:3em auto 0;display: flex;justify-content: center;}
.card .cell{padding: 1em;
    position: relative;
    width: 80%;
    margin: 0 5%;
    text-align: center;
    transition: box-shadow 0.5s ease-in-out;}
.cell .icon-content {
    margin-top: 1em;
    margin-bottom: 1em;
}
.cell header {
    margin-bottom: 2.875rem;height: 60px;
}
.size-down{font-weight: 400;
    font-size: 14px;
    line-height: 20.02px;
    line-height: 1.25125rem;}
.card .cell:hover {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
}
.cell footer a {
    display: inline-block;
    margin: 1.03125rem 0;
    font-weight: 600;
    color: #40B4E5;
    text-decoration: none;
    position: relative;
}
.cell:hover a {
    color: #006DB6;
}

.MyeHR .footer{margin-top:0;}
.MyeHR .foot-header{display: none;}

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
    .part.product .cont .row .ui .visible .cell {display: flex;justify-content: center;align-items: center;height: 280px;}
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
    .part.product .cont .row .ui .visible .cell {display: flex;justify-content: center;align-items: center;height: 240px;}
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



</style>

