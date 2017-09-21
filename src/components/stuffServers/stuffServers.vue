 <template>
    <div class="stuffServers fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <!-- banner广告 -->
            <div class="bannerWrap page-1 page" v-if='showBanner'>
                <div class="bannerLoop" ref="bannerLoop">
                    <swiper :options="bannerOption" ref="bannerOption" class="clear">
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner4.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>激发员工活力</h4>
                                    <div class="tips" style="display:block;">
                                        <!-- <p style="width:100%;"></p> -->
                                    </div>
                                </div>
                                <div class="en">
                                    <p>移动化、社交化、游戏化</p>
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
            <div class="part scenenet page-3 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>员工服务应用场景</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contentwrap">
                        <div class="item">游戏化</div>
                        <div class="item">社群化</div>
                        <div class="item">战略驱动</div>
                        <div class="item">全员参与</div>
                        <div class="item">网状结构关系</div>
                        <div class="item">文化共建</div>
                        <div class="item">个体崛起</div>
                        <div class="item">市场内部化</div>
                        <div class="item">实时互动</div>
                    </div>
                </div>
            </div>
            <!-- 挑战 -->
            <div class="part challenge page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>新挑战下，管理如何开展 ？</p>
                    <span class="line"></span>
                </div>
                <div class="cont flexbox">
                  <div class="inner"><span></span>
                    <li class="inimg"><img src="/static/img/challenge/challenge1.png" alt="" /></li>
                    <li class="inhead"><p>激发员工活力</p></li>
                    <li class="indetail"><p>让员工能在工作中得到实时激励</p></li>
                  </div>
                  <div class="inner"><span></span>
                    <li class="inimg"><img src="/static/img/challenge/challenge2.png" alt="" /></li>
                    <li class="inhead"><p>员工贴心服务</p></li>
                    <li class="indetail"><p>帮助员工解决工作和生活中遇到的问题</p></li>
                  </div>
                  <div class="inner"><span></span>
                    <li class="inimg"><img src="/static/img/challenge/challenge3.png" alt="" /></li>
                    <li class="inhead"><p>员工时间管理</p></li>
                    <li class="indetail"><p>利用碎片化时间提升员工工作技能</p></li>
                  </div>
                  <div class="inner"><span></span>
                    <li class="inimg"><img src="/static/img/challenge/challenge4.png" alt="" /></li>
                    <li class="inhead"><p>个人价值实现</p></li>
                    <li class="indetail"><p>鼓励员工提出建设性的意见及创意</p></li>
                  </div>
                  <div class="inner">
                    <li class="inimg"><img src="/static/img/challenge/challenge5.png" alt="" /></li>
                    <li class="inhead"><p>员工能力发挥</p></li>
                    <li class="indetail"><p>满足员工深度需求，获得个人成就感</p></li>
                  </div>
                </div>
            </div>
            <div class="part scene page-3 page">
                <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>员工服务应用场景</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contentwrap">
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene1.jpg" alt="">
                            <h3>接到Offer</h3>
                          </div>
                          <div class="text">
                            <p>过邮件短信获得入职提醒，可了解企业基本信息，快速熟悉公司环境；</p>
                          </div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene2.jpg" alt="">
                            <h3>初入职场</h3>
                          </div>
                          <div class="text">
                            <p>快速了解公司架初入职场构及企业文化，在系统中与同部门同事线上便捷沟通；</p>
                          </div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene3.jpg" alt="">
                            <h3>培训学习</h3>
                          </div>
                          <div class="text">
                            <p>人事部门会帮助新人安排培训内容，帮助员工快速融入公司，当天学习内容可在系统中记录及查询；</p>
                          </div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene4.jpg" alt="">
                            <h3>工作安排</h3>
                          </div>
                          <div class="text">
                            <p>工作安排可方便查询领导本周及今日的工作安排，也可以自己安排工作内容，领导可直接在系统中查
                          看。</p></div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene5.jpg" alt="">
                            <h3>答疑解惑</h3>
                          </div>
                          <div class="text">
                            <p>有工作不懂的问题，在系统里快速检索专家帮你解决吧。 </p>
                          </div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene6.jpg" alt="">
                            <h3>假期管理</h3>
                          </div>
                          <div class="text">
                            <p>自己管理自己的假期，可一键查询剩余假期等情况，再也不用麻烦人事帮忙查询了。</p>
                          </div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene7.jpg" alt="">
                            <h3>能力提升</h3>
                          </div>
                          <div class="text">
                          <p>想提升职业技能，不知道学习哪方面的知识，在系统里可快速查找自身岗位需要学习的内容；再也不用为学 习内容发愁了。</p>
                          </div>
                        </div>
                        <div class="contentItem">
                          <div class="pic">
                            <img src="static/img/scene/scene8.jpg" alt="">
                            <h3>离职关怀</h3>
                          </div>
                          <div class="text">
                              <p>离职之后想了解公司的发展情况，系统在入职周年发送关怀邮件，与离职员工建立情感纽带。</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- scene1 -->
            <div class="part attendance scene1 page">
              <div class="AtteL">
                <div class="AtteLtext">
                  <h3>MyeHR员工自助之考勤管理</h3>
                  <p>根据地理位置定位，轻松打卡，</p>
                  <p>便捷移动端考勤管理；</p>
                </div>
              </div>
              <div class="AtteR">
                <img class="AtteRimg" src="/static/img/attendance/page68.png" alt="" />
              </div>
            </div>
            <!-- scene2 -->
            <div class="part attendance scene2 page">
              <div class="AtteL">
                <img class="AtteRimg" src="/static/img/attendance/page69.png" alt="" />
              </div>
              <div class="AtteR">
                  <div class="AtteLtext">
                      <h3>MyeHR员工自助之即时沟通</h3>
                      <p>在系统内方便了解本部门同事，</p>
                      <p>线上即时沟通，打造团队融洽的沟通氛围；</p>
                  </div>
              </div>
            </div>
            <!-- scene3 -->
            <div class="part attendance scene3 page">
              <div class="AtteL">
                <div class="AtteLtext">
                  <h3>MyeHR员工自助之任务管理</h3>
                  <p>系统自动推送给员工需完成任务，</p>
                  <p>完成进度在线反馈，方便领导查阅指导，<br/>提升员工执行力；</p>
                </div>
              </div>
              <div class="AtteR">
                <img class="AtteRimg" src="/static/img/attendance/page70.png" alt="" />
              </div>
            </div>
            <!-- scene4 -->
            <div class="part attendance scene4 page">
              <div class="AtteL">
                <img class="AtteRimg" src="/static/img/attendance/page71.png" alt="" />
              </div>
              <div class="AtteR">
                  <div class="AtteLtext">
                      <h3>MyeHR员工自助之社区服务</h3>
                      <p>形成员工服务社区，可进行问题互动讨论，<br/>
                        结合积分发放及打赏方式，对员工提供的<br/>
                        优质信息进行反馈激励；
                        </p>
                  </div>
              </div>
            </div>
            <!-- scene5 -->
            <div class="part attendance scene5 page">
              <div class="AtteL">
                <div class="AtteLtext">
                  <h3>MyeHR员工自助之工资查询</h3>
                  <p>员工可自助查询个人工资信息及发放明细，</p>
                  <p>并对工资异常情况，直接在线咨询HR负责人；</p>
                </div>
              </div>
              <div class="AtteR">
                <img class="AtteRimg" src="/static/img/attendance/page72.png" alt="" />
              </div>
            </div>
            <!-- scene6 -->
            <div class="part attendance scene6 page">
              <div class="AtteL">
                <img class="AtteRimg" src="/static/img/attendance/page73.png" alt="" />
              </div>
              <div class="AtteR">
                  <div class="AtteLtext">
                      <h3>MyeHR员工自助之请假管理</h3>
                      <p>员工可自助查询个人请假额度，</p>
                      <p>请假之后可快速查看领导反馈意见及审批情况；</p>
                  </div>
              </div>
            </div>
            <!-- scene7 -->
            <div class="part attendance scene7 page">
              <div class="AtteL">
                <div class="AtteLtext">
                  <h3>MyeHR员工自助之感恩的心</h3>
                  <p>企业内部好人好事积分及时奖励系统，</p>
                  <p>可给想要感谢的同事赠送积分，</p>
                  <p>鼓励企业员工对同事伙伴常存感恩心，增进团结；</p>
                </div>
              </div>
              <div class="AtteR">
                <img class="AtteRimg" src="/static/img/attendance/page74.png" alt="" />
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
.stuffServers{width:100%;color: rgb(105,105,105);}

.part .title{/*padding-top:1.3rem;*/padding-bottom:2.5rem;text-align:center;-webkit-transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;transition:all 1s;-webkit-transform:translateY(30%);-moz-transform:translateY(30%);-o-transform:translateY(30%);transform:translateY(30%);-ms-transform:translateY(30%);-ms-transition:all 1s;}
.part .title p{color:#333;font-size:24px;line-height:4.3rem;}
.part .title span.line{display:inline-block;margin:0 auto;width:4rem;height:.2rem;background:#0079ef;}
.part .title p.desc{margin-top:1.6rem;color:#666;font-size:16px;line-height:1rem;}

.item a{position:relative;display:block;width:100%;height:100%;}
.item a .img{position:relative;overflow:hidden;width:100%;height:50%;background-position:center;background-size:cover;transition:all .6s;transform:rotateY(0);}
.item a .img img{height:100%;-webkit-transition:all .6s;transition:all .6s;transform:scale(1);}
.item a .img .shadow{position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:rgba(0,0,0,.4);opacity:0;transition:all .6s;filter:alpha(opacity=0);}
.item a:hover .img a,.item a:hover .img img{-webkit-transform:scale(1.1);transform:scale(1.1);}
.item a:hover .img .shadow{opacity:1;filter:alpha(opacity=100);}
.item a:hover .img .shadow span.icon{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);}

/*服务场景*/
.part.scenenet .cont{height: calc(100% - 144px);width: 100%;}
.part.scenenet .cont .contentwrap{width: 80%;margin-left: 10%;height:100%;background: url(../../../static/img/scenenet.png) no-repeat center;background-size: 65%;position: relative;}
.part.scenenet .cont .contentwrap .item{width: 65px;height: 65px;border-radius:50%;background-color: hotpink;line-height: 65px;text-align: center;color: #fff;position: absolute;}
.part.scenenet .cont .contentwrap .item:nth-child(1){top: 27.8%;left: 27.2%;}
.part.scenenet .cont .contentwrap .item:nth-child(2){top: 51%;left: 38.5%;}
.part.scenenet .cont .contentwrap .item:nth-child(3){top: 55.8%;left: 27.2%;}
.part.scenenet .cont .contentwrap .item:nth-child(4){top: 29%;left: 40%;}
.part.scenenet .cont .contentwrap .item:nth-child(5){top: 71%;left: 45%;}
.part.scenenet .cont .contentwrap .item:nth-child(6){top: 30%;left: 55%;}
.part.scenenet .cont .contentwrap .item:nth-child(7){left: 65%;top: 35%;}
.part.scenenet .cont .contentwrap .item:nth-child(8){top: 44%;left: 49%;}
.part.scenenet .cont .contentwrap .item:nth-child(9){top: 56%;left: 62%;}

/*管理开展  begin*/
.flexbox{display:flex;margin-top:5rem;padding:0 2%;flex-direction:row;flex-wrap:wrap;}
.inner{position:relative;box-sizing:border-box;margin:0 2%;padding-bottom:16%;width:16%;height:0;border-radius:10px;background:#8a4182;}
.inner:nth-child(1){background-color: rgb(220,85,98) ;}   
.inner:nth-child(1)>span{border-left:solid 25px rgb(220,85,98);}
.inner:nth-child(2){background-color: rgb(250,157,76) ;}
.inner:nth-child(2)>span{border-left:solid 25px rgb(250,157,76);}
.inner:nth-child(3){background-color: rgb(177,188,57) ;}
.inner:nth-child(3)>span{border-left:solid 25px rgb(177,188,57);}
.inner:nth-child(4){background-color: rgb(57,141,227) ;}
.inner:nth-child(4)>span{border-left:solid 25px rgb(57,141,227);}
.inner:nth-child(5){background-color: rgb(142,92,212) ;}

.inner>span{height:0;width:0;border-top:solid 20px transparent;border-bottom:solid 20px transparent;display:block;position:absolute;right:-25px;top:50%;transform:translateY(-50%)}
.inner li{width:100%;padding-top:5%}
.inner li p{font-size:14px}
.inner .inimg{padding-top:7%;text-align:center}
.inner .inhead p{text-align:center}
.inner .indetail p{color:#fff;padding:0 10%}
.inner img{width:30%}

/*管理开展  begin*/

/*scene应用场景*/
.part.scene .cont .contentwrap{width: 70%;margin-left: 15%;display: flex;flex-wrap: wrap;}
.part.scene .cont .contentwrap .contentItem{width: 25%;position: relative;height: 0;padding-bottom: 22%;text-align: center;}
.part.scene .cont .contentwrap .contentItem .pic img{width: 100%;}
.part.scene .cont .contentwrap .contentItem .text{display: none;position: absolute;text-align: center;background:rgba(255,255,255,.3);height: 100%;color: #fff;}
.part.scene .cont .contentwrap .contentItem:hover .pic{display: none;} 
.part.scene .cont .contentwrap .contentItem:hover .text{display: block;}

/*考勤管理 begin*/
.attendance{background:#076ce0}
.attendance>div{height:100%;width:50%;position:relative;float:left}
.AtteLtext{height:40%;width:80%;color: #fff;padding: 80px 20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
.attendance h3{font-size: 2rem;font-weight: 100;line-height: 2em;}
.AtteRimg{width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
/*考勤管理end*/


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

