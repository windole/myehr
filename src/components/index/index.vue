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
                                    <div class="tips" style="display:block;">
                                        <p style="width:100%;">{{item.SlideTitlePlus}}</p>
                                    </div>
                                    <h4>{{ item.SlideTitle }}</h4>
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
                <div class="title"  v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR服务模式</p>
                    <p class="desc">咨询+平台+应用+项目二次开发，基于员工服务的深度应用平台提供</p>
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
                </div>
            </div>
            <!-- 解决方案 -->
            <div class="part project page-3 page">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR解决方案</p>
                    <p class="desc">全面化的员工管理及服务支撑平台，实现企业战略目标有效落地</p>
                    <span class="line"></span>
                </div>
                <div class="cont" v-animate="{value: 'zoomIn',delay:600}" ref="project">
                    <div class="contentwrap">
                        <div v-for="item in projectData" class="contentitem" v-animate="{value: 'zoomInDown'}">
                            <div class="left-img" :style="{backgroundImage:' url(\'static/'+item.ProjectIcon+'\')'}" >
                            </div>
                            <h3 class="right-con">{{item.ProjectTit}}</h3>
                            <p>{{item.ProjectContent}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 比较 -->
<!--             <div class="part compare  page" style="display:none;">
                <div class="compare-left" v-animate="{value: 'bounceInLeft'}">
                    <h2 class="title">传统代码模式</h2>
                    <ul class="content">
                        <li>
                            <p class="tit">程序员水平不同影响项目质量项目BUG层出不穷</p>
                            <div class="img"></div>
                        </li>
                        <li>
                            <div class="img"></div>
                            <p class="tit">重复性的工作投入，修改方案，时间人力成本大</p>
                        </li>
                        <li>
                            <p class="tit">项目完成后需要大量的时间进行代码，交付性差</p>
                            <div class="img"></div>
                        </li>
                        <li>
                            <div class="img"></div>
                            <p class="tit">项目周期长，时间不可控</p>
                        </li>
                    </ul>
                </div>
                <div class="compare-right" v-animate="{value: 'bounceInRight'}">
                    <h2 class="title">MyeHR产品模式<span class="little">(乐高式)</span></h2>
                    <div class="content">
                        <img src="/static/img/modal.png" alt="MyeHR产品模式（乐高式）">
                    </div>
                </div>
            </div>
 -->
            <!-- 优势 -->
            <div class="part advantage page-4 page">
                <div v-animate="{value: 'bounceInLeft', delay: 0}" style="height:100%;background:url(static/img/advantage.png) no-repeat 80% center;background-size:50%;opacity:1!important;">
                    <ul >
                        <h2>MyeHR移动办公平台</h2>
                        <li>一次开发 多端运行</li>
                        <li>人性化UI设计</li>
                        <li>界面友好，操作便捷</li>
                        <li>灵活增加应用，可扩展性强</li>
                        <li>全面适应iOS、Android端</li>
                    </ul>
                </div>
            </div>

            <!-- 产品与服务 -->
            <div class="part product page-5 page">
                <div class="title"  v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 66 - 5 ) }">
                    <p>为什么选择MyeHR？</p>
                    <span class="line"></span>
                </div>
                <div class="cont grid">
                    <div class="row" >
                        <div class="ui item slide down instant reveal op1" v-for="item in product" >
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
            <!-- 我们的客户 -->
            <div class="part client case clear page-6 page">
                <div class="title"  v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR典型客户</p>
                    <span class="line"></span>
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

            <div class="part company clear page-7 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR战略伙伴联盟</p>
                    <p class="desc">携手多家合作伙伴，共同打造人力资源生态联盟</p>
                    <span class="line"></span>
                </div>
                <div class="cont">
                    <div class="company-left op1" v-animate="{value: 'rollIn'}"></div>
                    <div class="company-right"></div>
                </div>
            </div>

            <v-foot class="page-8 page"></v-foot>
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
                    duration: 1000
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
                    that.product = data.product;
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
.index{width:100%;color: rgb(105,105,105);}
.index .swiper-button-disabled{pointer-events:auto;}
.index .product.part .title p{color:rgb(105,105,105);}


/*解决方案*/
.index .part .title.active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .solution.part .cont{margin:0 auto;width:100%;max-width:1200px;transition:all 1s .2s;transform:translateY(12%);}
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
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt{padding:.5rem 2rem 0 2rem;width:100%;height:50%;color:#fff;text-align:center;font-size:0.9em;line-height:1.5em;}
.item:nth-child(1) a .txt{background:#2ea7bd;}
.item:nth-child(2) a .txt{background:#2280c3;}
.item:nth-child(3) a .txt{background:#5858ac;}
.item:nth-child(4) a .txt{background:#873dab;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt i.iconfont{color:#037af2;font-size:2.4rem;}
.index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt p.tit{margin-top:1.5rem;margin-bottom:1.3rem;color:#fff;text-align:center;font-size:1.1rem;line-height:1;}
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

.index .project .cont{width: 70%;margin-left: 15%;transform: translateY(8%);transition: all 1s .2s;}
.index .project .cont .contentwrap{width: 100%;display: flex; flex-wrap: wrap;}
.index .project .cont .contentwrap .contentitem{display: inline-block;width: 33.3%;padding-top: 2rem;text-align: center;opacity: 1!important;-webkit-animation-name: bounceInUp;animation-name: bounceInUp;-webkit-transform-origin: center bottom;transform-origin: center bottom;}
.index .project .cont .contentwrap .contentitem .left-img{width: 65px;height: 65px;border-radius: 10px;margin:0 auto 10px;background-position: center;background-repeat: no-repeat;}
/*.contentitem:nth-child(1) .left-img{background-color: rgb(79,129,189);}
.contentitem:nth-child(2) .left-img{background-color: rgb(192,80,77);}
.contentitem:nth-child(3) .left-img{background-color: rgb(155,187,89);}
.contentitem:nth-child(4) .left-img{background-color: rgb(128,100,162);}
.contentitem:nth-child(5) .left-img{background-color: rgb(75,172,198);}
.contentitem:nth-child(6) .left-img{background-color: rgb(247,150,70);}
.contentitem:nth-child(7) .left-img{background-color: rgb(34,128,195);}
.contentitem:nth-child(8) .left-img{background-color: rgb(88,88,172);}
.contentitem:nth-child(9) .left-img{background-color: rgb(142,92,212);}*/
.index .project .cont .contentwrap .contentitem .right-con{display: inline-block;font-size: 18px;line-height: 26px;color: #333;}
.index .project .cont .contentwrap .contentitem p{color: #666;font-size: 14px;margin-top: .6em;}
/*.index .part.compare{background:#076ce0;color: #fff;padding-top: 5rem;}
.index .part.compare>div{width: 49%;display: inline-block;vertical-align: top;}
.index .part.compare>div h2.title{font-size: 2em; font-weight: 400;}
.index .part.compare .compare-left .content{width: 100%;padding: 0 10% 6rem;border-right: 1px dotted #f1f1f1;display: flex;    flex-wrap: wrap;margin-top: 5rem;}
.index .part.compare .compare-left .content li{width: 48%;margin-right:1%;}
.index .part.compare .compare-left .content li .tit{display: inline-block;width: calc(100% - 75px);}
.index .part.compare .compare-left .content li .img{width: 70px;height: 70px;border-radius: 10px;display: inline-block;vertical-align: middle; margin-bottom: 10px;}
.index .part.compare .compare-left .content li:nth-child(1) .img{background: rgb(250,157,76) url(../../../static/img/compare1.png)no-repeat center;background-size: 55%;}
.index .part.compare .compare-left .content li:nth-child(2) .img{background: rgb(177,188,57) url(../../../static/img/compare2.png)no-repeat center;background-size: 55%;}
.index .part.compare .compare-left .content li:nth-child(3) .img{background: rgb(57,141,227) url(../../../static/img/compare3.png)no-repeat center;background-size: 55%;}
.index .part.compare .compare-left .content li:nth-child(4) .img{background: rgb(142,92,212) url(../../../static/img/compare4.png)no-repeat center;background-size: 55%;}
.index .part.compare .compare-right .content{margin-top:5rem;text-align: center;}
.index .part.compare .compare-right .content img{width: 260px;}*/
.index .part.company{background:url(../../../static/img/banner/5.jpg) no-repeat;background-size: cover;}
.index .part.company .cont{height: calc(100% - 123px);/*background:url(../../../static/img/allcompany2.png) no-repeat center;background-size: 85%;*/}
.index .part.company .cont>div{width: 49%;display: inline-block;vertical-align: top;height: 100%;}

.index .part.company .cont img{width: 60%;}
.index .part.company .cont .company-left{margin-left: 1.66%;background: url(../../../static/img/company1.png) no-repeat 60% center;background-size: 60%;}
.index .part.company .cont .company-right{background: url(../../../static/img/company2.png) no-repeat 40%;background-size: 65%;}



.index .part.advantage ul{padding: 13% 0 0 15%;color: #333;opacity: 1!important;}
.index .part.advantage ul h2{font-size: 24px;font-weight: 100;margin-bottom: 10px;}
.index .part.advantage ul li{line-height: 35px;list-style: disc;font-size: 16px;color: #666;}


.index .part.product .cont{width: 80%;margin-left: 10%;margin-top: 5rem;}
.index .part.product .cont .row .ui.item{width: 24%;height: 0;padding-bottom: 24%;margin-right: 1%;box-sizing: border-box;}
.index .part.product .cont .row .ui .content{width: 100%;height: 0;padding-bottom: 100%;background-size: cover;background-repeat: no-repeat;}
.index .part.product .cont .row .ui .cell{text-align: center;}
.index .part.product .cont .row .ui .visible .cell {display: flex;justify-content: center;align-items: center;height: 240px;}
.index .part.product .cont .row .hidden .text {height: 100%;background-color: #0cf;margin-top: -12px;}
.index .part.product .cont .row .ui  .cell p {color: #fff;font-size: 16px;margin-top: 12px;}
.index .part.product .cont .row .hidden p{padding-top: 30%;width: 80%;margin: 0 auto;word-wrap: break-word;text-align: center;}




/*.index .part.product .cont .tp{padding-top:2rem;padding-right:10.5rem;padding-left:10.5rem;}
.index .part.product .cont .tp .item{margin-bottom:8rem;}
.index .part.product .cont .tp .item:last-child{margin-bottom:7rem;}
.index .part.product .cont .tp .item:last-child a .img{float:right;margin-right:3rem;}
.index .part.product .cont .tp .item:last-child a .text{position:relative;margin-top:4rem;padding-top:0;padding-left:2rem;-webkit-transition:all .5s .15s;-moz-transition:all .5s .15s;-o-transition:all .5s .15s;transition:all .5s .15s;-webkit-transform:translateX(-3%);-moz-transform:translateX(-30%);-o-transform:translateX(-30%);transform:translateX(-30%);-ms-transform:translateX(-30%);-ms-transition:all .5s .15s;}
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
.index .part.product .cont .btm .item:last-child a .txt p{font-size:18px;line-height:1;}*/
.index .part.client{width:100%;}
.index .part.client .ad{width:100%;height:33rem;background-size:cover;-webkit-transition:all .6s;-moz-transition:all .6s;-o-transition:all .6s;transition:all .6s;-webkit-transform:translateY(20%);-moz-transform:translateY(20%);-o-transform:translateY(20%);transform:translateY(20%);-ms-transform:translateY(20%);-ms-transition:all .6s;}
.index .part.client .ad.active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
.index .part.client .ad .msg{padding-top:7.5rem;color:#fff;text-align:center;}
.index .part.client .ad .msg span{display:inline-block;margin-bottom:.5rem;width:3.5rem;height:3.5rem;background-size:contain;}
.index .part.client .ad .msg p{color:#fff;letter-spacing:1px;font-size:1.2rem;font-family:"Microsoft Yahei";line-height:3rem;}
.index .part.client .ad .msg p:first-line{font-size:1.8rem;line-height:5.5rem;}


.case .case_list{margin:0 auto;width:67.5rem;}
.case .case_list .title{margin-bottom: 4rem;padding-bottom: 0;border-bottom: 2px solid #ccc;}
.case .case_list .title ul li{float:left;display:inline-block;width:14%;height:2.8rem;color:#fff;text-align:center;font-size:16px;line-height:2.6rem;cursor:default;background: #adbac5;margin-right: 0.25%;}
.case .case_list .title ul li:nth-child(1),.case .case_list .title ul li:nth-child(7){background-color:;}{background-color:#5082BD;}
.case .case_list .title ul li:nth-child(2){background-color:#C0514E;}
.case .case_list .title ul li:nth-child(3){background-color:#9CBB5A;}
.case .case_list .title ul li:nth-child(4){background-color:#8165A3;}
.case .case_list .title ul li:nth-child(5){background-color:#4CADC6;}
.case .case_list .title ul li:nth-child(6){background-color:#F79747;}

.case .case_list .title ul li:last-child{margin-right: 0;}
.case .case_list .title ul li span{display:inline-block;width:100%;vertical-align:middle;line-height:1;}
.case .case_list .title ul li:nth-child(10n+10) span{border-right:1px solid #979899;}
.case .case_list .title ul li.active{background:#0078f0;color:#fff;}
.case .case_list .title ul li.active span{border:none;}
.case .case_list .title ul li.active+li span{border:none;}
.case .case_list .title ul.long li{width:12.5%;}
.case .case_list .title ul.long li:nth-child(10n+10) span{border-right:none;}
.case .case_list .title ul.long li:nth-child(8n+8) span{border-right:1px solid #979899;}
.case .case_list .cont{padding-bottom:2.5rem;}
.case .case_list .cont ul.list{border-top:1px solid #e3e4e6;border-left:1px solid #e3e4e6;background: #fff;}
.case .case_list .cont ul.list li{float:left;width:16.66%;height:7.5rem;border-right:1px solid #e3e4e6;border-bottom:1px solid #e3e4e6;background:no-repeat center center;background-size:80%;line-height:7.5rem;}
.case .case_list .cont ul.list li:nth-child(6n+6){border-right:1px solid #e3e4e6;}
.case .case_list .cont ul.list li a{display:block;width:100%;height:100%;}


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
    .index .solution.part .cont .swiper-container .swiper-wrapper .item a .txt{padding-top: 1.5rem;font-size: 1.4em;}
    .iconitem h2{margin:20px 0;font-size: 1.3em;}
    .index .solution.part .cont{max-width:1100px;transition:all 1s .2s;transform:translateY(6%);}
    .index .project .cont .contentwrap .contentitem{padding-top: 1em;}
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
    .index .solution.part .cont{max-width:1100px;transition:all 1s .2s;transform:translateY(3%);}
}


@media screen and (max-width:800px){
    .index .banner .text .tit h4{font-size:26px;line-height:50px;}
    .index .banner .text .tit span.line{margin-top:15px;margin-right:20px;margin-left:20px;height:20px;}
    .index .banner .text .tit .tips p{margin:auto;font-size:14px;line-height:25px;}
    .index .banner .text .en{margin-top:22px;font-size:30px;}
    .index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt{padding:10px 10px 0 10px;}
    .index .part.solution .cont .swiper-container .swiper-wrapper .item a .txt p.tit{margin-top:10px;margin-bottom:10px;}
}

@media screen and (max-width:767px){
    .index .banner .bg{text-align:center;}
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
    .index .part .title p{font-size:1.7rem;}
    .index .part .title p.desc{font-size:.8rem;}
    .page{top:5rem;}
    .index .bannerWrap{height: 100%;}

    .case .case_list{overflow:hidden;margin:0 auto;width:100%;}
    .case .case_list .title1{margin-bottom:2rem;border-bottom:1px solid #e3e4e6;line-height:4.8rem;-webkit-tap-highlight-color:transparent;}
    .case .case_list .title1  {text-align:center;font-size:16px;}
    .case .case_list .title1  :after{float:right;color:#333;content:'|';}
    .case .case_list .title1  .swiper-slide-active{color:#0078f0;}
    .case .case_list .title1 .active{color:#0078f0!important;}
    .case .case_list .cont{margin:0 auto;padding-right:0;padding-bottom:2.5rem;padding-left:0;width:90.625%;}
    .case .case_list .cont ul.list{width:100%;}
    .case .case_list .cont ul.list li{width:33.33333333%;height:6.4rem;line-height:6.4rem;}
}


@media screen and (max-width: 450px) {
    .index .part.compare{padding: 0;}
    .index .part.compare > div {width: 100%;height: 45%;}
    .index .part.compare .compare-left .content{margin-top: 1rem;}
    .index .part.compare .compare-left .content li .img{vertical-align: baseline;}
    .index .part.compare .compare-right .content {margin-top: 0rem;text-align: center;}
    .index .part.compare .compare-right .content img {width: 260px;}

    .advantage .cont{background-position:center 70%!important;background-size: contain!important;}
    .index .part.advantage ul {padding: 3rem 0 0 80px;color: #fff;font-size: 18px;}
    .case .case_list .title ul li{height: 3.6rem;margin-bottom: 0;}
    .foot-header{height: 20rem!important;}
}

</style>

