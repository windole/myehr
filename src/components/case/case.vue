 <template>
    <div class="case fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <!-- banner广告 -->
            <div class="bannerWrap page-1 page" v-if='showBanner'>
                <div class="bannerLoop" ref="bannerLoop">
                    <swiper :options="bannerOption" ref="bannerOption" class="clear">
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner2.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>case</h4>
                                    <div class="tips" style="display:block;">
                                        <p style="width:100%;">MyeHR 社交化 实时互动</p>
                                    </div>
                                </div>
                                <div class="en">
                                    <p>18年创新之路 专注eHR 500强企业首选</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev btn prev" slot="button-prev"></div>
                <div class="swiper-button-next btn next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <loading v-if="!showBanner"></loading>
            <!-- 我们的客户 -->
            <div class="part client case clear page-6 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR典型客户</p>
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
                allCaseDate: {},
                showCaseDate: {},
                allCaseLogo: [],
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
        },
        created() {
            this.getDate();
            this.getCaseList();
        }
    };
</script>
<style type="text/css" scoped>
.fullpage-container{position:absolute;top:0;left:0;width:100%;height:100%;}
.case{width:100%;color: rgb(105,105,105);}

.part .title{/*padding-top:1.3rem;*/padding-bottom:2.5rem;text-align:center;-webkit-transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;transition:all 1s;-webkit-transform:translateY(30%);-moz-transform:translateY(30%);-o-transform:translateY(30%);transform:translateY(30%);-ms-transform:translateY(30%);-ms-transition:all 1s;}
.part .title p{color:#333;font-size:24px;line-height:4.3rem;}
.part .title span.line{display:inline-block;margin:0 auto;width:4rem;height:.2rem;background:#0079ef;}
.part .title p.desc{margin-top:1.6rem;color:#666;font-size:16px;line-height:1rem;}


.client.case .title p{color: #fff;}
.case .case_list{margin:0 auto;width:67.5rem;}
.case .case_list .title{margin-bottom: 4rem;padding-bottom: 0;border-bottom: 2px solid #fff;}
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

