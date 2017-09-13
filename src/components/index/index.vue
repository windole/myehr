 <template>
    <div class="index fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <!-- banner广告 -->
            <div class="bannerWrap page-1 page" v-if='showBanner'>
                <div class="bannerLoop">
                    <swiper :options="bannerOption" ref="bannerOption" class="clear">
                        <swiper-slide class="item"  v-for="(item,index) in bannerLoop" key="index">
                            <div class="bg" :style="{backgroundImage:'url('+ item.SlideImage +')'}"></div>
                            <div class="txt" v-show = 'item.SlideIntro'>
                                <div class="tit clear">
                                    <h4>{{ item.SlideTitle }}</h4>
                                    <div class="tips" style="display:block;">
                                        <p style="width:100%;">{{item.SlideTitlePlus}}</p>
                                    </div>
                                </div>
                                <div class="en">
                                    <p>{{ item.SlideIntro }}</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev btn prev" slot="button-prev"></div>
                <div class="swiper-button-next btn next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <loading v-if="!showBanner"></loading>
            <!-- 服务模式 -->
            <div class="part solution clearfix page-2 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR服务模式</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="slideBox">
                    <swiper :options="solutionOption" ref="solutionSwiper" class="clear">
                        <swiper-slide class="item" v-for="(item,index) in solution" :key='item.PlanPath'>
                            <router-link :to="{path: item.PlanPath}" v-if='index % 2'>
                                <div class="txt">
                                    <!-- <i class="icon iconfont" :class='item.PlanIcon'></i> -->
                                    <p class="tit">{{ item.PlanTitle }}</p>
                                    <ul>
                                        <li v-for="cell in item.PlanTitlePlus">{{cell}}</li>
                                    </ul>
                                </div>
                                <div class="img clear">
                                    <a href="javascript:"  :style="{backgroundImage:'url(\'static/'+item.PlanThumb+'\')'}"></a>
                                    <span class="arrow"></span>
                                    <div class="shadow">
                                        <span class="icon"></span>
                                    </div>
                                </div>
                            </router-link>
                            <router-link :to="{path: item.PlanPath}"  v-else>
                                <div class="img clear">
                                    <a href="javascript:"  :style="{backgroundImage:'url(\'static/'+item.PlanThumb+'\')'}"></a>
                                    <span class="arrow"></span>
                                    <div class="shadow">
                                        <span class="icon"></span>
                                    </div>
                                </div>
                                <div class="txt">
                                    <!-- <i class="icon iconfont" :class='item.PlanIcon'></i> -->
                                    <p class="tit">{{ item.PlanTitle }}</p>
                                    <ul>
                                        <li v-for="cell in item.PlanTitlePlus">{{cell}}</li>
                                    </ul>
                                </div>
                                <div class="shadow">
                                </div>
                            </router-link>
                        </swiper-slide>
                        <div class="swiper-button-prev btn prev" slot="button-prev"></div>
                        <div class="swiper-button-next btn next" slot="button-next"></div>
                    </swiper>
                    <div class="more">
                        <router-link to="/solution">查看更多</router-link>
                    </div>
                </div>
            </div>
            <!-- 解决方案 -->
            <div class="part project page-3 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR解决方案</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contentwrap">
                        <div v-for="item in projectData" class="contentitem">
                            <div class="left-img" :style="{backgroundImage:' url(\'static/'+item.ProjectIcon+'\')'}" >
                            </div>
                            <div class="right-con">{{item.ProjectTit}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 比较 -->
            <div class="part compare page-4 page">
                <div class="compare-left">
                    <div class="title">传统代码模式</div>
                    <ul>
                        <li>
                            <div class="tit">程序员水平不同影响项目质量项目BUG层出不穷</div>
                            <div class="img"></div>
                        </li>
                        <li>
                            <div class="img"></div>
                            <div class="tit">重复性的工作投入，修改方案，时间人力成本大</div>
                        </li>
                        <li>
                            <div class="tit">项目完成后需要大量的时间进行代码，交付性差</div>
                            <div class="img"></div>
                        </li>
                        <li>
                            <div class="img"></div>
                            <div class="tit">项目周期长，时间不可控</div>
                        </li>
                    </ul>
                </div>
                <div class="compare-right">
                    <div class="title">MyeHR产品模式<span class="little">(乐高式)</span></div>
                    <div class="img">
                        <img src="/static/img/modal.png" alt="MyeHR产品模式（乐高式）">
                    </div>
                </div>
            </div>
            <!-- 产品与服务 -->
            <div class="part product page-5 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 66 - 5 ) }">
                    <p>关于我们</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="aboutus">
                    <div class="iconwarp clear">
                     <div class="iconitem iconitem1" v-animate="{value: 'bounceInLeft', delay: 0}">
                       <img src="/static/img/icon_1.png" alt="">
                       <h2>600万个人用户<br/>8千家企业用户</h2>
                       <p>HR用户体验，积累丰富的行业经验</p>
                     </div>
                     <div class="iconitem iconitem2" v-animate="{value: 'bounceInLeft', delay: 600}">
                       <img src="/static/img/icon_2.png" alt="">
                       <h2>18年行业耕耘</h2>
                       <p>专业人力资源管理信息化软件服务</p>
                     </div>
                     <div class="iconitem iconitem3" v-animate="{value: 'bounceInLeft', delay: 1200}">
                       <img src="/static/img/icon_3.png" alt="">
                       <h2>22家全国性分支机构</h2>
                       <p>国内专业eHR专业厂商最强</p>
                     </div>
                     <div class="iconitem iconitem4" v-animate="{value: 'bounceInLeft', delay: 1800}">
                       <img src="/static/img/icon_4.png" alt="">
                       <h2>450名专业实施团队</h2>
                       <p>包含咨询顾问、项目经理、软件工程师等专业团队</p>
                     </div>
                   </div>
                </div>
            </div>
            <!-- 我们的客户 -->
            <div class="part client case clear page-6 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>典型客户</p>
                    <span class="line"></span>
                    <!-- <p class="desc">{{solutionBnCn.ModuleNamePlus}}</p> -->
                </div>
                <div class="case_list" >
                    <div class="title">
                        <ul class="clear" ref="ullist">
                            <!-- <li :class="{ active : currentType === 0}" type-id='0' @click="clickType(-1,0)"><span>全部</span></li> -->
                            <li :type-id='item.CaseTypeId' v-for="(item,index) in allCaseDate" @click="clickType(index,item.CaseTypeId)" :class="{ active : currentType === (index + 1)}">
                                <span>{{ item.CaseTypeTitle }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="cont">
                        <loading v-show="!showDetail"></loading>
                        <ul class="clear list" v-show='showDetail'>
                            <li class="item" v-for="(item,index) in showCaseDate" :style="{backgroundImage:'url(\'static/'+item.ThumbPicture+'\')'}"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <v-foot class="page-7 page"></v-foot>
        </div>
    </div>
</template>
<script type="text/javascript">
    import $ from 'jquery';
    import axios from 'axios';
    import foot from './../foot.vue';
    import loading from './../loading.vue';
    import swiper from './../swiper.vue';
    import swiperSlide from './../slide.vue';
    const baseUrl = '';
    export default{
        data() {
            return {
                head: {},
                scroll: '',
                itemWidth: '',
                poster: '',
                next: 0,
                solution: {},
                product: {},
                solutionBnCn: {},
                proBnCn: {},
                showSol: true,
                showSolBn: true,
                showBanner: false,
                dark: false,
                plus: [],
                bannerUrl: baseUrl,
                base_url: baseUrl,
                clientBg: '',
                phone: null,
                bannerLoop: {},
                showDetail: false,
                allCaseDate: {},
                showCaseDate: {},
                allCaseLogo: [],
                projectData: [],
                currentType: 1,
                solutionOption: {
                    //  所有配置均为可选（同Swiper配置）
                    autoplay: false,
                    setWrapperSize: true,
                    autoHeight: true,
                    paginationClickable: true,
                    observeParents: true,
                    onlyExternal: true,
                    slidesPerView: 4,
                    nextButton: '.solution .swiper-button-next',
                    prevButton: '.solution .swiper-button-prev',
                    speed: 1000,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            onlyExternal: false
                        },
                        1024: {
                            slidesPerView: 3,
                            onlyExternal: false
                        }
                    }
                },
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
                return parseInt($('html').css('font-size'));
            },
            cacl() {
                this.itemWidth = $('div.index div.solution.part div.cont div.slideBox div.bd').width() * 0.25;
            },
            swiper() {
                return this.$refs.solutionSwiper.swiper;
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
            nextSolution() {
                let len = $(this.$refs.solutionSwiper).find('.item').length - 5;
                let oWidth = $(this.$refs.solutionSwiper).width() / 4;
                let oLeft = parseInt($(this.$refs.solutionSwiper).find('.list').css('left'));
                if (oWidth * len >= Math.abs(parseInt($(this.$refs.slideBox).find('.list').css('left')))) {
                    $(this.$refs.slideBox).find('.list').stop().animate({
                        'left': oLeft - oWidth + 'px'},
                    600);
                } else {
                    $(this.$refs.slideBox).find('.list').stop().animate({
                        'left': '0px'},
                    600);
                }
            },
            prevSolution() {
                // let len = $(this.$refs.slideBox).find('.item').length - 5;
                let oWidth = $(this.$refs.slideBox).find('.bd').width() / 4;
                let oLeft = parseInt($(this.$refs.slideBox).find('.list').css('left'));
                if (parseInt($(this.$refs.slideBox).find('.list').css('left')) < 0) {
                    $(this.$refs.slideBox).find('.list').stop().animate({
                        'left': oLeft + oWidth + 'px'},
                    600);
                } else {
                    $(this.$refs.slideBox).find('.list').stop().animate({
                        'left': '0px'},
                    600);
                }
            },
            initial() {
                if ($(window).width() >= 768) {
                    // 设置banner的高度
                    $('div.index div.banner').height($('div.index div.banner').width() * 0.5);
                    $('div.index div.bannerLoop').height($('div.index div.bannerLoop').width() * 0.5);
                    // 设置解决方案的高度
                    $(this.$refs.slideBox).find('.swiper-container').height($(this.$refs.slideBox).find('.swiper-container').width() * 0.4375);
                    // 产品与服务图片高度设置
                    $('div.index div.part.product div.cont div.tp div.item a div.img').height($('div.index div.part.product div.cont div.tp div.item a div.img').width() * 0.8);
                    // 设置北调服务高度设置
                    $('div.index div.part.product div.cont div.btm').height($('div.index div.part.product div.cont div.btm').width() * 0.1354);
                    // 我们的客户图片高度设置
                    $('div.index div.part.client div.ad').height($('div.index div.part.client div.ad').width() * 0.34375);
                } else {
                    // 设置banner的高度
                    $('div.index div.banner').height($('div.index div.banner').width() * 0.875);
                    $('div.index div.bannerLoop').height($('div.index div.bannerLoop').width() * 0.875);
                    // 设置解决方案的高度
                    $(this.$refs.slideBox).find('.swiper-container').height($(this.$refs.slideBox).find('.swiper-container').width() * 0.875);
                    // 产品与服务图片高度设置
                    $('div.index div.part.product div.cont div.tp div.item a div.img').height($('div.index div.part.product div.cont div.tp div.item a div.img').width() * 0.87);
                    // 设置北调服务高度设置
                    $('div.index div.part.product div.cont div.btm').height($('div.index div.part.product div.cont div.btm').width() * 0.34375);
                    // 我们的客户图片高度设置
                    $('div.index div.part.client div.ad').height($('div.index div.part.client div.ad').width() * 0.703125);
                }

                // 设置解决方案各个部分的宽度
                $(this.$refs.slideBox).find('.item').width($(this.$refs.slideBox).find('.bd').width() / 4);
            },
            rerender() {
                this.initial();
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
                    that.bannerLoop = data.head.slide;
                    // console.log(that.bannerLoop);
                    that.showBanner = true;
                    // 获取解决方案数据
                    // 解决方案标题
                    that.solutionBnCn = data.plan_intro;
                    that.showSolBn = true;
                    // 解决方案各个模块
                    that.solution = data.plan;
                    // console.log(data.plan);
                    that.showSol = true;
                    // 获取产品与服务数据
                    // 产品与服务标题
                    that.proBnCn = data.product_intro;
                    // 获取解决方案
                    that.projectData = data.project;
                });
            },
            getCaseList() {
                this.showDetail = false;
                axios.get('./../../static/data/case.json').then((response) => {
                    // console.log(response.data.content);
                    this.allCaseDate = response.data.content;
                    let content = [];
                    let resData = response.data.content;
                    for (let i = 0; i < resData.length; i++) {
                        for (let j = 0; j < resData[i].caseinfo.length; j++) {
                            content.push({ThumbPicture: resData[i].caseinfo[j].ThumbPicture});
                        }
                    }
                    this.allCaseLogo = content;
                    this.showCaseDate = content.slice(0, 18);
                    console.log(content);
                    this.showDetail = true;
                });
            },
            clickType: function (index, type) {
                this.currentType = index + 1;
                if (index < 0) {
                    this.showCaseDate = this.allCaseLogo;
                } else {
                    let content = [];
                    for (var i = 0; i < this.allCaseDate.length; i++) {
                        if (this.allCaseDate[i].CaseTypeId === type) {
                            for (let j = 0; j < this.allCaseDate[i].caseinfo.length; j++) {
                                content.push({ThumbPicture: this.allCaseDate[i].caseinfo[j].ThumbPicture});
                            }
                        }
                    }
                    this.showCaseDate = content;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
            window.addEventListener('resize', this.rerender);
            this.initial();
        },
        created() {
            this.getDate();
            this.getCaseList();
        }
    };
</script>
<style type="text/css">
.fullpage-container{position:absolute;top:0;left:0;width:100%;height:100%;}
.page{top:2em;}
.index{width:100%;color: rgb(105,105,105);}
.index .swiper-button-disabled{pointer-events:auto;}
.index .banner{position:relative;overflow:hidden;width:100%;height:46rem;background:rgba(0,0,0,.4);}
.index .banner .text{position:absolute;top:50%;left:50%;display:inline-block;vertical-align:top;text-align:center;transform:translate(-50%,-50%);}
.index .banner .text .tit{text-align:center;}
.index .banner .text .tit h4{display:inline-block;color:#fff;vertical-align:top;font-weight:400;font-size:3.5rem;line-height:4.6rem;}
.index .banner .text .tit span.line{display:block;display:inline-block;margin-top:1.4rem;margin-right:2.5rem;margin-left:2.5rem;width:.15rem;height:1.8rem;background:#fff;vertical-align:top;}
.index .banner .text .tit .tips{display:inline-block;vertical-align:top;}
.index .banner .text .tit .tips p{color:#fff;font-size:1.3rem;line-height:2.3rem;}
.index .banner .text .tit .tips p span{display:block;}
.index .banner .text .en{margin-top:3.5rem;color:#fff;font-size:2.3rem;line-height:1;}
.index .banner .bg{position:absolute;top:0;left:0;z-index:-1;display:block;width:100%;height:100%;}
.index .banner .next{position:absolute;bottom:3rem;left:50%;transform:translateX(-50%);}
.index .banner .next i.iconfont{background:-moz-linear-gradient(top,#0fce98,#008cf5);background:-webkit-gradient(linear,0 0,0 bottom,from(#0fce98),to(#008cf5));background:-ms-linear-gradient(top,#0fce98,#008cf5);color:transparent;font-size:2rem;cursor:default;FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr=#0fce98,endColorStr=#008cf5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.index .banner .next i.nobg{background:0 0;color:#008cf5;}
.index .banner span.music{position:absolute;top:6rem;right:6rem;display:block;width:1.5rem;height:1.5rem;background:url(../../../static/img/on.png) no-repeat center center;background-size:contain;}
.index .banner span.music.active{background-image:url(../../../static/img/off.png);}
.index .bannerWrap{height:48rem;}
.index .bannerLoop{position:relative;overflow:hidden;width:100%;height:100%;background-size:cover;}
.index .bannerLoop .swiper-container{width:100%;height:100%;}
.index .bannerLoop .swiper-container .swiper-wrapper{height:100%!important;}
.index .bannerLoop .swiper-container .swiper-wrapper .item{position:relative;height:100%;}
.index .bannerLoop .swiper-container .swiper-wrapper .item .bg{display:block;width:100%;height:100%;background-size:cover;}
.index .bannerLoop .swiper-container .swiper-wrapper .item .bg:before{display:block;width:100%;height:100%;background:rgba(0,0,0,.4);content:'';}
.index .bannerLoop .item{position:relative;}
.index .bannerLoop .txt{position:absolute;top:50%;left:50%;display:inline-block;vertical-align:top;text-align:center;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);}
.index .bannerLoop .txt .tit{text-align:center;}
.index .bannerLoop .txt .tit h4{display:inline-block;color:#fff;vertical-align:top;font-weight:400;font-size:2.8rem;line-height:4.6rem;}
.index .bannerLoop .txt .tit span.line{display:block;display:inline-block;margin-top:1.4rem;margin-right:2.5rem;margin-left:2.5rem;width:.15rem;height:1.8rem;background:#fff;vertical-align:top;}
.index .bannerLoop .txt .tit .tips{display:inline-block;vertical-align:top;}
.index .bannerLoop .txt .tit .tips p{color:#fff;font-size:1.3rem;line-height:2.3rem;}
.index .bannerLoop .txt .tit .tips p span{display:block;}
.index .bannerLoop .txt .en{margin-top:3.5rem;color:#fff;font-size:2.3rem;line-height:1;}
.index .bannerLoop .next{position:absolute;right:10px;bottom:3rem;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);-ms-transform:translateX(-50%);}
.index .bannerLoop .next i.iconfont{background:-moz-linear-gradient(top,#0fce98,#008cf5);background:-webkit-gradient(linear,0 0,0 bottom,from(#0fce98),to(#008cf5));background:-ms-linear-gradient(top,#0fce98,#008cf5);color:transparent;font-size:2rem;cursor:default;FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr=#0fce98,endColorStr=#008cf5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.index .bannerLoop .next i.nobg{background:0 0;color:#008cf5;}
.index .part .title{/*padding-top:1.3rem;*/padding-bottom:2.5rem;text-align:center;-webkit-transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;transition:all 1s;-webkit-transform:translateY(30%);-moz-transform:translateY(30%);-o-transform:translateY(30%);transform:translateY(30%);-ms-transform:translateY(30%);-ms-transition:all 1s;}
.index .part .title p{color:#333;font-size:24px;line-height:4.3rem;}
.index .part .title span.line{display:inline-block;margin:0 auto;width:4rem;height:.2rem;background:#0079ef;}
.index .part .title p.desc{margin-top:1.6rem;color:#666;font-size:16px;line-height:1rem;}
.index .product.part .title p{color:#fff;}
.index .product.part .title span.line{background:#fff;}
.iconwarp{margin:0 auto;padding-top:120px;padding-bottom:60px;width:905px;}
.iconitem{position:relative;top:0;float:left;margin:13px;width:200px;height:200px;border:3px solid #83A7CB;border-radius:50%;text-align:center;opacity:1!important;}
.iconitem h2{margin:10px 0;color:#fff;}
.iconitem p{padding:0 27px;color:#fff;font-size:12px;}
.iconitem img{margin-top:20px;}
@media screen and (max-width:767px){.index .part .title p{font-size:1.7rem;}
.index .part .title p.desc{font-size:.8rem;}
}
.index .part .title.active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part .cont .more{margin:3rem auto 5rem;width:10rem;height:2.8rem;border-radius:1.4rem;background:url(../../../static/img/more_border.png) no-repeat center center;background-size:contain;}
.index .part .cont .more:hover{background-image:url(../../../static/img/more_active.png);}
.index .part .cont .more:hover a{color:#fff;}
.index .part .cont .more a{display:block;width:100%;height:100%;color:#0079ef;text-align:center;font-size:16px;line-height:2.8rem;}
.index .solution.part .cont{margin:0 auto;width:100%;max-width:1100px;-webkit-transition:all 1s .2s;-moz-transition:all 1s .2s;-o-transition:all 1s .2s;transition:all 1s .2s;-webkit-transform:translateY(3%);-moz-transform:translateY(3%);-o-transform:translateY(3%);transform:translateY(3%);-ms-transform:translateY(3%);-ms-transition:all 1s .2s;}
.index .solution.part .cont .swiper-container{position:relative;height:42rem;}
.index .solution.part .cont .swiper-container .swiper-wrapper{height:100%!important;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item{float:left;overflow:hidden;width:25vw;height:100%;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item:nth-child(2n+2) a .img span.arrow{top:0;bottom:auto;background-image:url(../../../static/img/arrow_btm.png);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a{position:relative;display:block;width:100%;height:100%;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .img{position:relative;overflow:hidden;width:100%;height:50%;background-position:center;background-size:cover;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-webkit-transform:rotateY(0);-moz-transform:rotateY(0);-o-transform:rotateY(0);transform:rotateY(0);-ms-transform:rotateY(0);-ms-transition:all .6s;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .img a{display:block;width:100%;height:100%;background-position:center;background-size:cover;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-ms-transition:all .6s;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .img img{height:100%;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);-ms-transition:all .6s;-ms-transform:scale(1);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .img span.arrow{position:absolute;bottom:0;left:50%;display:block;width:20px;height:15px;background:url(../../../static/img/arrow_top.png) no-repeat center center;background-size:cover;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);-ms-transform:translateX(-50%);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .img .shadow{position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:rgba(0,0,0,.4);opacity:0;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-ms-transition:all .6s;filter:alpha(opacity=0);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .img .shadow span.icon{position:absolute;top:50%;left:50%;display:block;width:5rem;height:5rem;background:url(../../../static/img/moreIcon.png) no-repeat center center;background-size:contain;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-webkit-transform:translate(-50%,-50%) scale(.2);-moz-transform:translate(-50%,-50%) scale(.2);-o-transform:translate(-50%,-50%) scale(.2);transform:translate(-50%,-50%) scale(.2);-ms-transform:translate(-50%,-50%) scale(.2);-ms-transition:all .6s;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt{padding:1.5rem 2rem 0 2rem;width:100%;height:50%;color:#fff;text-align:center;font-size:1.3em;line-height:1.5em;}
.item:nth-child(1) a .txt{background:#2ea7bd;}
.item:nth-child(2) a .txt{background:#2280c3;}
.item:nth-child(3) a .txt{background:#5858ac;}
.item:nth-child(4) a .txt{background:#873dab;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt i.iconfont{color:#037af2;font-size:2.4rem;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt p.tit{margin-top:1.5rem;margin-bottom:1.3rem;color:#fff;text-align:center;font-size:1.5rem;line-height:1;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt p{color:#666;text-align:justify;font-size:.9rem;line-height:1.8rem;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .img a,.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .img img{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);-ms-transform:scale(1.1);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .img .shadow{opacity:1;filter:alpha(opacity=100);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .img .shadow span.icon{-webkit-transform:translate(-50%,-50%) scale(1);-moz-transform:translate(-50%,-50%) scale(1);-o-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-ms-transform:translate(-50%,-50%) scale(1);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .txt{background:rgba(29,42,51,.7);}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .txt i.iconfont{color:#fff;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .txt p{color:#fff;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a:hover .txt p.tit{color:#fff;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item:nth-child(2) a .img{-webkit-transition:all .6s .2s;-moz-transition:all .6s .2s;-o-transition:all .6s .2s;transition:all .6s .2s;-ms-transition:all .6s .2s;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item:nth-child(3) a .img{-webkit-transition:all .6s .4s;-moz-transition:all .6s .4s;-o-transition:all .6s .4s;transition:all .6s .4s;-ms-transition:all .6s .4s;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item:nth-child(4) a .img{-webkit-transition:all .6s .6s;-moz-transition:all .6s .6s;-o-transition:all .6s .6s;transition:all .6s .6s;-ms-transition:all .6s .6s;}
.index .solution.part .cont .swiper-container .btn{position:absolute;top:50%;z-index:100;display:block;width:2rem;height:2rem;border-radius:50%;background:rgba(169,175,191,.4);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);-ms-transform:translateY(-50%);}
.index .solution.part .cont .swiper-container .btn:hover{background:rgba(0,120,240,.3);}
.index .solution.part .cont .swiper-container .btn:before{display:block;width:2rem;height:2rem;background:url(../../../static/img/arrow_prev.png) no-repeat center center;background-size:80%;content:'';}
.index .solution.part .cont .swiper-container .btn.next{right:3rem;}
.index .solution.part .cont .swiper-container .btn.next:before{background-image:url(../../../static/img/arrow_next.png);}
.index .solution.part .cont .swiper-container .btn.prev{left:3rem;}
.index .solution.part .cont.active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .solution.part .cont.active .swiper-container .swiper-wrapper .item a .img{-webkit-transform:rotateY(0);-moz-transform:rotateY(0);-o-transform:rotateY(0);transform:rotateY(0);-ms-transform:rotateY(0);}

.index .project .cont{width: 70%;margin-left: 15%;}
.index .project .cont .contentwrap{width: 100%;display: flex; flex-wrap: wrap;}
.index .project .cont .contentwrap .contentitem{display: inline-block;width: 33.3%;padding-top: 3rem;}
.index .project .cont .contentwrap .contentitem .left-img{width: 70px;height: 70px;border-radius: 10px;display: inline-block;vertical-align: middle;margin-bottom:10px;background-position: center;background-repeat: no-repeat;}
.contentitem:nth-child(1) .left-img{background-color: rgb(79,129,189);}
.contentitem:nth-child(2) .left-img{background-color: rgb(192,80,77);}
.contentitem:nth-child(3) .left-img{background-color: rgb(155,187,89);}
.contentitem:nth-child(4) .left-img{background-color: rgb(128,100,162);}
.contentitem:nth-child(5) .left-img{background-color: rgb(75,172,198);}
.contentitem:nth-child(6) .left-img{background-color: rgb(247,150,70);}
.contentitem:nth-child(7) .left-img{background-color: rgb(34,128,195);}
.contentitem:nth-child(8) .left-img{background-color: rgb(88,88,172);}
.contentitem:nth-child(9) .left-img{background-color: rgb(142,92,212);}
.index .project .cont .contentwrap .contentitem .right-con{display: inline-block;}





.index .part.product{background:#076ce0;}
.index .part.product .cont .tp{padding-top:2rem;padding-right:10.5rem;padding-left:10.5rem;}
.index .part.product .cont .tp .item{margin-bottom:8rem;}
.index .part.product .cont .tp .item:last-child{margin-bottom:7rem;}
.index .part.product .cont .tp .item:last-child a .img{float:right;margin-right:3rem;}
.index .part.product .cont .tp .item:last-child a .text{position:relative;margin-top:4rem;padding-top:0;padding-left:2rem;-webkit-transition:all .5s .15s;-moz-transition:all .5s .15s;-o-transition:all .5s .15s;transition:all .5s .15s;-webkit-transform:translateX(-30%);-moz-transform:translateX(-30%);-o-transform:translateX(-30%);transform:translateX(-30%);-ms-transform:translateX(-30%);-ms-transition:all .5s .15s;}
.index .part.product .cont .tp .item:last-child a .text span.line{position:absolute;top:0;left:-.35rem;display:inline-block;width:.3rem;height:4rem;background:-moz-linear-gradient(top,#5da1e3,#5ae5b7);background:-webkit-linear-gradient(top,#5da1e3,#5ae5b7);background:-o-linear-gradient(top,#5da1e3,#5ae5b7);background:-ms-linear-gradient(top,#5da1e3,#5ae5b7);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5da1e3',endColorStr='#5da1e3');}
.index .part.product .cont .tp .item:last-child a .text p{margin-top:0;vertical-align:top;}
.index .part.product .cont .tp .item:last-child a .text p.tit{display:inline-block;margin-top:0;}
.index .part.product .cont .tp .item a{position:relative;display:block;font-size:0;}
.index .part.product .cont .tp .item a .img{display:inline-block;margin-right:8rem;width:33rem;height:26.5rem;vertical-align:top;text-align:center;}
.index .part.product .cont .tp .item a .img img{max-width:100%;max-height:100%;}
.index .part.product .cont .tp .item a .text{display:inline-block;margin-left:7rem;padding-top:5rem;width:25.5rem;vertical-align:top;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;-webkit-transform:translateX(30%);-moz-transform:translateX(30%);-o-transform:translateX(30%);transform:translateX(30%);-ms-transform:translateX(30%);-ms-transition:all .5s;}
.index .part.product .cont .tp .item a .text.active{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
.index .part.product .cont .tp .item a .text span.line{display:block;width:4.1rem;height:.3rem;background:-moz-linear-gradient(left,#5da1e3,#5ae5b7);background:-webkit-linear-gradient(left,#5da1e3,#5ae5b7);background:-o-linear-gradient(left,#5da1e3,#5ae5b7);background:-ms-linear-gradient(left,#5da1e3,#5ae5b7);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5da1e3',endColorStr='#5da1e3');}
.index .part.product .cont .tp .item a .text p{color:#666;font-size:16px;line-height:1.9rem;}
.index .part.product .cont .tp .item a .text p.tit{margin-top:2rem;margin-bottom:2.5rem;color:#0078f0;font-size:32px;}
.index .part.product .cont .btm{width:100%;height:13rem;}
.index .part.product .cont .btm .item{float:left;width:25%;height:100%;background:#2b3946;}
.index .part.product .cont .btm .item:nth-child(2n+2){background:#273341;}
.index .part.product .cont .btm .item:hover a .txt{left:-.5rem;}
.index .part.product .cont .btm .item a{display:block;padding:3rem 2rem 0 2rem;width:100%;height:100%;color:#fff;}
.index .part.product .cont .btm .item a i.iconfont{float:left;display:inline-block;width:25%;font-size:2.3rem;}
.index .part.product .cont .btm .item a .txt{position:relative;left:0;float:right;display:inline-block;width:75%;vertical-align:top;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;-ms-transition:all .5s;}
.index .part.product .cont .btm .item a .txt p{color:#fff;font-size:14px;line-height:1.5rem;}
.index .part.product .cont .btm .item a .txt p.tit{font-size:1.1rem;line-height:1;}
.index .part.product .cont .btm .item a .txt span.line{display:block;margin-top:.6rem;margin-bottom:.6rem;width:1.8rem;height:.1rem;background:#0079ef;}
.index .part.product .cont .btm .item:last-child a{padding-top:4rem;text-align:center;}
.index .part.product .cont .btm .item:last-child a i.iconfont{float:none;margin-bottom:1.5rem;}
.index .part.product .cont .btm .item:last-child a .txt{float:none;}
.index .part.product .cont .btm .item:last-child a .txt p{font-size:18px;line-height:1;}
.index .part.client{width:100%;}
.index .part.client .ad{width:100%;height:33rem;background-size:cover;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-webkit-transform:translateY(20%);-moz-transform:translateY(20%);-o-transform:translateY(20%);transform:translateY(20%);-ms-transform:translateY(20%);-ms-transition:all .6s;}
.index .part.client .ad.active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part.client .ad .msg{padding-top:7.5rem;color:#fff;text-align:center;}
.index .part.client .ad .msg span{display:inline-block;margin-bottom:.5rem;width:3.5rem;height:3.5rem;background-size:contain;}
.index .part.client .ad .msg p{color:#fff;letter-spacing:1px;font-size:1.2rem;font-family:"Microsoft Yahei";line-height:3rem;}
.index .part.client .ad .msg p:first-line{font-size:1.8rem;line-height:5.5rem;}


@media screen and (max-width:1400px){.index .part.product .cont .tp .item a .text p{font-size:14px;}
.index .part.product .cont .tp .item a .text p.tit{margin-top:1rem;margin-bottom:1.5rem;font-size:26px;}
.index .part.product .cont .btm .item a i.iconfont{font-size:1.8rem;}
.index .part.product .cont .btm .item a .txt p.tit{font-size:18px;}
.index .part.product .cont .btm .item a .txt p{font-size:14px;}
.index .part.product .cont .btm .item a .txt span.line{margin-top:.8rem;margin-bottom:1rem;}
.index .part.client .ad .msg{padding-top:5rem;}
.index .part.client .ad .msg span{width:3rem;height:3rem;}
.index .part.client .ad .msg p{font-size:18px;}
.index .part.client .ad .msg p:first-line{font-size:26px;}
}


@media screen and (max-width:1150px){.index .banner .text{width:80%;}
.index .banner .text .tit h4{font-size:30px;line-height:50px;}
.index .banner .text .tit span.line{margin-top:15px;margin-right:20px;margin-left:20px;height:20px;}
.index .banner .text .tit .tips p{font-size:15px;line-height:25px;}
.index .banner .text .en{margin-top:30px;font-size:30px;}
.index .part .title{padding-bottom:20px;}
.index .part .title p{font-size:17px;line-height:40px;}
.index .part .title p.desc{margin-top:20px;font-size:12px;line-height:1;}
.index .part .cont .more{margin:30px auto;width:15.4%;height:30px;line-height:30px;}
.index .part .cont .more a{font-size:14px;line-height:30px;}
.index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt{padding:30px 10px 0 10px;}
.index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt p.tit{font-size:20px;}
.index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt p{font-size:12px;}
.index .part.solution .cont .swiper-container .swiper-wrapper .item a .img{-webkit-transform:rotateY(0);-moz-transform:rotateY(0);-o-transform:rotateY(0);transform:rotateY(0);-ms-transform:rotateY(0);}
.index .part.solution .cont .more{margin:30px auto;width:15.4%;height:30px;line-height:30px;}
.index .part.solution .cont .more a{font-size:14px;line-height:30px;}
.index .part.product .cont .tp{padding-right:50px;padding-left:50px;}
.index .part.product .cont .tp .item:last-child{margin-bottom:60px;}
.index .part.product .cont .tp .item:last-child a .img{margin-right:0;}
.index .part.product .cont .tp .item a .img{margin-right:50px;width:44%;}
.index .part.product .cont .tp .item a .text{margin-left:40px;width:40%;}
.index .part.product .cont .tp .item a .text p{font-size:14px;}
.index .part.product .cont .tp .item a .text p.tit{font-size:20px;}
.index .part.product .cont .btm .item a{padding:20px 20px 0 20px;}
.index .part.product .cont .btm .item a i.iconfont{width:16%;font-size:20px;}
.index .part.product .cont .btm .item a .txt p{font-size:12px;}
.index .part.product .cont .btm .item a .txt p.tit{font-size:14px;}
.index .part.client .ad{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part.client .ad .msg{padding-top:50px;}
.index .part.client .ad .msg p{font-size:16px;line-height:40px;}
.index .part.client .ad .msg p:fistt-line{font-size:24px;}
}


@media screen and (max-width:800px){.index .banner .text .tit h4{font-size:26px;line-height:50px;}
.index .banner .text .tit span.line{margin-top:15px;margin-right:20px;margin-left:20px;height:20px;}
.index .banner .text .tit .tips p{margin:auto;font-size:14px;line-height:25px;}
.index .banner .text .en{margin-top:22px;font-size:30px;}
.index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt{padding:20px 10px 0 10px;}
.index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt p.tit{margin-top:10px;margin-bottom:10px;}
}


@media screen and (max-width:767px){.index .banner .bg{text-align:center;}
.index .banner .text{padding-right:1.5rem;padding-left:1.5rem;width:100%;}
.index .banner .text .en{display:none;}
.index .banner .text .tit h4{display:block;font-weight:400;font-size:2.2rem;line-height:4rem;}
.index .banner .text .tit span.line{display:none;}
.index .banner .text .tit .tips{display:block;width:100%;}
.index .banner .text .tit .tips p span{display:inline-block;margin-right:.7rem;margin-left:.7rem;text-align:center;font-size:1.3rem;}
.index .banner span.music{right:2rem;}
.index .part .title{padding-top:1rem;padding-bottom:1.5rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part .title p{font-size:1.7rem;}
.index .part .title p.desc{margin-top:1.5rem;font-size:.9rem;}
.index .part .cont .more{margin-top:2.3rem;margin-bottom:3rem;width:10rem;height:2.7rem;}
.index .part .cont .more a{font-size:1rem;}
.index .part.solution .cont{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part.solution .cont .swiper-container .btn{top:56%;width:3rem;height:3rem;}
.index .part.solution .cont .swiper-container .btn.prev{left:.75rem;}
.index .part.solution .cont .swiper-container .btn.next{right:.75rem;}
.index .part.solution .cont .swiper-container .btn:before{width:100%;height:100%;}
.index .part.solution .cont .more{margin-top:2.3rem;margin-bottom:3rem;width:10rem;height:2.7rem;}
.index .part.solution .cont .more a{font-size:1rem;line-height:2.7rem;}
.index .part.client .ad{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part.client .ad .msg{padding-top:2.5rem;padding-right:1.5rem;padding-left:1.5rem;}
.index .part.client .ad .msg span{margin-bottom:0;}
.index .part.client .ad .msg p{font-size:1.2rem;line-height:2.5rem;}
.index .part.client .ad .msg p:first-line{font-size:1.8rem;line-height:4.5rem;}
}


.case .case_list{margin:0 auto;width:67.5rem;}
.case .case_list .title ul li{float:left;display:inline-block;margin-bottom:2.5rem;width:12.5%;height:2.8rem;border-radius:5px;color:#333;text-align:center;font-size:20px;line-height:2rem;cursor:default;}
.case .case_list .title ul li span{display:inline-block;width:100%;border-left:1px solid #979899;vertical-align:middle;line-height:1;}
.case .case_list .title ul li:nth-child(10n+10) span{border-right:1px solid #979899;}
.case .case_list .title ul li.active{background:#0078f0;color:#fff;}
.case .case_list .title ul li.active span{border:none;}
.case .case_list .title ul li.active+li span{border:none;}
.case .case_list .title ul.long li{width:12.5%;}
.case .case_list .title ul.long li:nth-child(10n+10) span{border-right:none;}
.case .case_list .title ul.long li:nth-child(8n+8) span{border-right:1px solid #979899;}
.case .case_list .cont{padding-bottom:2.5rem;}
.case .case_list .cont ul.list{border-top:1px solid #e3e4e6;border-left:1px solid #e3e4e6;}
.case .case_list .cont ul.list li{float:left;width:16.66%;height:7.5rem;border-right:1px solid #e3e4e6;border-bottom:1px solid #e3e4e6;background:no-repeat center center;background-size:80%;line-height:7.5rem;}
.case .case_list .cont ul.list li:nth-child(6n+6){border-right:1px solid #e3e4e6;}
.case .case_list .cont ul.list li a{display:block;width:100%;height:100%;}


@media screen and (max-width:767px){.case .case_list{overflow:hidden;margin:0 auto;width:100%;}
.case .case_list .title1{margin-bottom:2rem;border-bottom:1px solid #e3e4e6;line-height:4.8rem;-webkit-tap-highlight-color:transparent;}
.case .case_list .title1  {text-align:center;font-size:16px;}
.case .case_list .title1  :after{float:right;color:#333;content:'|';}
.case .case_list .title1  .swiper-slide-active{color:#0078f0;}
.case .case_list .title1 .active{color:#0078f0!important;}
.case .case_list .cont{margin:0 auto;padding-right:0;padding-bottom:2.5rem;padding-left:0;width:90.625%;}
.case .case_list .cont ul.list{width:100%;}
.case .case_list .cont ul.list li{width:33.33333333%;height:6.4rem;line-height:6.4rem;}
}

</style>

