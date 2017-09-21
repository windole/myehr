 <template>
    <div class="MyeHR fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <!-- banner广告 -->
            <div class="bannerWrap page-1 page" v-if='showBanner'>
                <div class="bannerLoop" ref="bannerLoop">
                    <swiper :options="bannerOption" ref="bannerOption" class="clear">
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner2.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>MyeHR 社交化 实时互动</h4>
                                    <div class="tips" style="display:block;">
                                        <p style="width:100%;">18年创新之路 专注eHR深度应用</p>
                                    </div>
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
            <div class="part product page-5 page">
                <div class="cont" ref="aboutus">
                    <div class="iconwarp clear">
                     <div class="iconitem iconitem1">
                        <img src="/static/img/icon_1.png" alt="">
                        <h2>600万个人用户<br/>8千家企业用户</h2>
                        <p>HR用户体验，积累丰富的行业经验</p>
                     </div>
                     <div class="iconitem iconitem2">
                       <img src="/static/img/icon_2.png" alt="">
                       <h2>18年行业耕耘</h2>
                       <p>专业人力资源管理信息化软件服务</p>
                     </div>
                     <div class="iconitem iconitem3">
                       <img src="/static/img/icon_3.png" alt="">
                       <h2>22家全国性分支机构</h2>
                       <p>国内专业eHR专业厂商最强</p>
                     </div>
                     <div class="iconitem iconitem4">
                       <img src="/static/img/icon_4.png" alt="">
                       <h2>450名专业实施团队</h2>
                       <p>包含咨询顾问、项目经理、软件工程师等专业团队</p>
                     </div>
                   </div>
                </div>
            </div>
            
            <div class="card page">
                <div class="cell card-center match-height" matchheight="" style="cursor: pointer; height: 357px;">
                    <article class="icon-content">
                        <header>
                            <div class="icon-container"></div>                                
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
                            <div class="icon-container"></div>                                
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
            <div class="part page mainmodal">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR三大层级主模块</p>
                    <p class="desc">通过模块的组合运作满足企业eHR系统建设需求</p>
                    <span class="line"></span>
                </div>
                <div class="textinfo" style="width: 362px;">
                    <div class="animate-enlarge" style="background:url(img/index/list1.png) no-repeat 0 6px;padding-left: 73px;">
                      <h3>开发平台</h3>
                      <p>统一建模/统一门户</p>
                      <p>统一流程/统一身份</p>
                    </div>
                    <div class="animate-enlarge" style="background:url(img/index/list2.png) no-repeat 0 6px;padding-left: 73px; margin-top: 30px;">
                      <h3>HR应用</h3>
                      <p>组织管理/人事管理/培训管理</p>
                      <p>薪酬福利/考勤管理/绩效管理</p>
                      <p>招聘管理/员工发展</p>
                    </div>
                    <div class="animate-enlarge" style="background:url(img/index/list2.png) no-repeat 0 6px;padding-left: 73px; margin-top: 30px;">
                      <h3>员工服务</h3>
                      <p>移动办公、员工关怀、积分激励</p>
                      <p>学习生成、共享服务中心</p>
                    </div>
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
<style type="text/css">
.fullpage-container{position:absolute;top:0;left:0;width:100%;height:100%;}
.page{top:2rem;}
.MyeHR{width:100%;color: rgb(105,105,105);}

.part .title{/*padding-top:1.3rem;*/padding-bottom:2.5rem;text-align:center;-webkit-transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;transition:all 1s;-webkit-transform:translateY(30%);-moz-transform:translateY(30%);-o-transform:translateY(30%);transform:translateY(30%);-ms-transform:translateY(30%);-ms-transition:all 1s;}
.part .title p{color:#333;font-size:24px;line-height:4.3rem;}
.part .title span.line{display:inline-block;margin:0 auto;width:4rem;height:.2rem;background:#0079ef;}
.part .title p.desc{margin-top:1.6rem;color:#666;font-size:16px;line-height:1rem;}

.part.product .cont .tp{padding-top:2rem;padding-right:10.5rem;padding-left:10.5rem;}
.part.product .cont .tp .item{margin-bottom:8rem;}
.part.product .cont .tp .item:last-child{margin-bottom:7rem;}
.part.product .cont .tp .item:last-child a .img{float:right;margin-right:3rem;}
.part.product .cont .tp .item:last-child a .text{position:relative;margin-top:4rem;padding-top:0;padding-left:2rem;-webkit-transition:all .5s .15s;-moz-transition:all .5s .15s;-o-transition:all .5s .15s;transition:all .5s .15s;-webkit-transform:translateX(-30%);-moz-transform:translateX(-30%);-o-transform:translateX(-30%);transform:translateX(-30%);-ms-transform:translateX(-30%);-ms-transition:all .5s .15s;}
.part.product .cont .tp .item:last-child a .text span.line{position:absolute;top:0;left:-.35rem;display:inline-block;width:.3rem;height:4rem;background:-moz-linear-gradient(top,#5da1e3,#5ae5b7);background:-webkit-linear-gradient(top,#5da1e3,#5ae5b7);background:-o-linear-gradient(top,#5da1e3,#5ae5b7);background:-ms-linear-gradient(top,#5da1e3,#5ae5b7);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5da1e3',endColorStr='#5da1e3');}
.part.product .cont .tp .item:last-child a .text p{margin-top:0;vertical-align:top;}
.part.product .cont .tp .item:last-child a .text p.tit{display:inline-block;margin-top:0;}
.part.product .cont .tp .item a{position:relative;display:block;font-size:0;}
.part.product .cont .tp .item a .img{display:inline-block;margin-right:8rem;width:33rem;height:26.5rem;vertical-align:top;text-align:center;}
.part.product .cont .tp .item a .img img{max-width:100%;max-height:100%;}
.part.product .cont .tp .item a .text{display:inline-block;margin-left:7rem;padding-top:5rem;width:25.5rem;vertical-align:top;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;-webkit-transform:translateX(30%);-moz-transform:translateX(30%);-o-transform:translateX(30%);transform:translateX(30%);-ms-transform:translateX(30%);-ms-transition:all .5s;}
.part.product .cont .tp .item a .text.active{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
.part.product .cont .tp .item a .text span.line{display:block;width:4.1rem;height:.3rem;background:-moz-linear-gradient(left,#5da1e3,#5ae5b7);background:-webkit-linear-gradient(left,#5da1e3,#5ae5b7);background:-o-linear-gradient(left,#5da1e3,#5ae5b7);background:-ms-linear-gradient(left,#5da1e3,#5ae5b7);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5da1e3',endColorStr='#5da1e3');}
.part.product .cont .tp .item a .text p{color:#666;font-size:16px;line-height:1.9rem;}
.part.product .cont .tp .item a .text p.tit{margin-top:2rem;margin-bottom:2.5rem;color:#0078f0;font-size:32px;}
.part.product .cont .btm{width:100%;height:13rem;}
.part.product .cont .btm .item{float:left;width:25%;height:100%;background:#2b3946;}
.part.product .cont .btm .item:nth-child(2n+2){background:#273341;}
.part.product .cont .btm .item:hover a .txt{left:-.5rem;}
.part.product .cont .btm .item a{display:block;padding:3rem 2rem 0 2rem;width:100%;height:100%;color:#fff;}
.part.product .cont .btm .item a i.iconfont{float:left;display:inline-block;width:25%;font-size:2.3rem;}
.part.product .cont .btm .item a .txt{position:relative;left:0;float:right;display:inline-block;width:75%;vertical-align:top;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;-ms-transition:all .5s;}
.part.product .cont .btm .item a .txt p{color:#fff;font-size:14px;line-height:1.5rem;}
.part.product .cont .btm .item a .txt p.tit{font-size:1.1rem;line-height:1;}
.part.product .cont .btm .item a .txt span.line{display:block;margin-top:.6rem;margin-bottom:.6rem;width:1.8rem;height:.1rem;background:#0079ef;}
.part.product .cont .btm .item:last-child a{padding-top:4rem;text-align:center;}
.part.product .cont .btm .item:last-child a i.iconfont{float:none;margin-bottom:1.5rem;}
.part.product .cont .btm .item:last-child a .txt{float:none;}
.part.product .cont .btm .item:last-child a .txt p{font-size:18px;line-height:1;}
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
.card{width: 60%;margin-left:20%;margin:3em 0;display: flex;justify-content: center;}
.card .cell{padding: 1em;
    position: relative;
    width: 100%;
    text-align: center;
    -webkit-transition: box-shadow 0.5s ease-in-out;
    -moz-transition: box-shadow 0.5s ease-in-out;
    transition: box-shadow 0.5s ease-in-out;}
.component-hovercard .cell .icon-content {
    margin-top: 1em;
    margin-bottom: 1em;
}
.component-hovercard .cell .icon-container {
    margin-bottom: 2.475rem;height: 60px;
}
.size-down{    font-weight: 400;
    font-size: 14px;
    font-size: 0.875rem;
    line-height: 20.02px;
    line-height: 1.25125rem;}

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



</style>

