 <template>
    <div class="hr fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <!-- banner广告 -->
            <div class="bannerWrap page-1 page" v-if='showBanner'>
                <div class="bannerLoop" ref="bannerLoop">
                    <swiper :options="bannerOption" ref="bannerOption" class="clear">
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner9.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>标准化流程实现快速交付</h4>
                                    <div class="tips" style="display:block;">
                                        <!-- <p style="width:100%;">MyeHR 社交化 实时互动</p> -->
                                    </div>
                                </div>
                                <div class="en">
                                    <p>个性化配置满足深度应用</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="item"  key="index">
                            <div class="bg" :style="{backgroundImage:'url(static/img/banner/banner10.jpg)'}"></div>
                            <div class="txt">
                                <div class="tit clear">
                                    <h4>全面一站式人才管理解决方案</h4>
                                    <div class="tips" style="display:block;">
                                        <!-- <p style="width:100%;">MyeHR 社交化 实时互动</p> -->
                                    </div>
                                </div>
                                <div class="en">
                                    <p>优化企业信息化管理模式应用</p>
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
            <div class="part project page-2 page">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>MyeHR解决方案</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contentwrap">
                        <div v-for="item in projectData" class="contentitem">
                            <div class="left-img" :style="{backgroundImage:' url(\'static/'+item.ProjectIcon+'\')'}" >
                            </div>
                            <div class="right-con">{{item.ProjectTit}}</div>
                            <p>{{item.ProjectContent}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 组织管理 -->
            <div class="part control page-3 page" id="organzeManagement">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>全面集团化管控</p>
                    <p class="desc">通过岗位职责、招聘、考核及标准组织管理模型的标准化管理，实现集团化管控；</p>
                    <span class="line"></span>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contwrap">
                        <div class="left-items">
                            <div class="item">
                                <div class="right"></div>
                                <div class="left">
                                    <h3>多维度组织管理</h3>
                                    <p>建立多纬度的组织管理</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="right"></div>
                                <div class="left">
                                    <h3>虚拟机构管理</h3>
                                    <p>能够记录临时性的虚拟组织信息</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="right"></div>
                                <div class="left">
                                    <h3>岗位管理</h3>
                                    <p>建立部门与岗位的隶属关系</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="right"></div>
                                <div class="left">
                                    <h3>历史机构变革</h3>
                                    <p>能够快速查询到组织机构的整体情况</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="right"></div>
                                <div class="left">
                                    <h3>组织机构图</h3>
                                    <p>组织机构图可从集团到员工逐层打开</p>
                                </div>
                            </div>
                        </div>
                        <div class="right-items">
                            <div class="item">
                                <div class="left"></div>
                                <div class="right">
                                    <h3>组织机构管理</h3>
                                    <p>根据企业战略发展的需要</p>
                                </div>
                            </div>
                             <div class="item">
                                <div class="left"></div>
                                <div class="right">
                                    <h3>编制管理</h3>
                                    <p>实现对部门、岗位和条线的编制管理</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="left"></div>
                                <div class="right">
                                    <h3>组织模板</h3>
                                    <p>建立部门模板和岗位模板，<br/>形成标准组织模型</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="left"></div>
                                <div class="right">
                                    <h3>组织规划</h3>
                                    <p>包含能力素质模型定义及<br/>职务发展通道定义</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="left"></div>
                                <div class="right">
                                    <h3>信息查询</h3>
                                    <p>查询公司、部门、岗位及历史变动信息</p>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>

            <!-- 薪酬管理 -->
            <div class="part compensationManagement page-4 page" id="compensationManagement">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>精准高效薪酬管控</p>
                    <p class="desc">预算与薪酬额度管控，确保企业人工成本的可控性；</p>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contwrap">
                        <div class="row three-cols">
                            <div class="col-sm-4 text-center col-board col-border">
                                <div class="col-img icon1"></div>
                                <h4>预算与额度管理</h4>
                                <p>年度机构与人力规划/年度单位总额控制/人工成本配比规划/基本工资与奖金分配规划</p>
                            </div>
                            <div class="col-sm-4 text-center col-board col-border">
                                <div class="col-img icon2"></div>
                                <h4>部门奖金分配</h4>
                                <p>部门资金标准管理/部门绩效强制分布/部门绩效系数计算</p>
                            </div>
                            <div class="col-sm-4 text-center col-board col-border brnone">
                                <div class="col-img icon3"></div>
                                <h4>薪酬信息管理</h4>
                                <p>分析岗位平均年薪/单位岗位配比分析/行业岗位预算上下限/岗位年薪增长预测</p>
                            </div>   
                        </div>
                        <div class="row three-cols">
                            <div class="col-sm-4 text-center col-board col-border">
                                <div class="col-img icon1"></div>
                                <h4>预算与额度管理</h4>
                                <p>年度机构与人力规划/年度单位总额控制/人工成本配比规划/基本工资与奖金分配规划</p>
                            </div>
                            <div class="col-sm-4 text-center col-board col-border">
                                <div class="col-img icon2"></div>
                                <h4>部门奖金分配</h4>
                                <p>部门资金标准管理/部门绩效强制分布/部门绩效系数计算</p>
                            </div>
                            <div class="col-sm-4 text-center col-board col-border brnone">
                                <div class="col-img icon3"></div>
                                <h4>薪酬信息管理</h4>
                                <p>分析岗位平均年薪/单位岗位配比分析/行业岗位预算上下限/岗位年薪增长预测</p>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <!-- 人事管理 -->
            <div class="part peopleManagement page-5 page" id="peopleManagement">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>人员事务管理</p>
                    <p class="desc">丰富人事管理业务，人员职场全周期管控；</p>
                    <span class="line"></span>
                </div>
                <div class="cont">
                </div>
            </div>

            <!-- 培训管理 -->
            <div class="part training page-6 page" id="training">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>员工学习成长</p>
                    <p class="desc">清晰明确的员工成长路径，全面提升企业人才价值；</p>
                    <span class="line"></span>
                </div>
                <div class="cont" v-animate="{value: 'bounceInLeft', delay: 0}">
                    <ul class="lefttxt">
                        <h2>MyeHR培训管理解决方案</h2>
                        <li>培训资源/培训讲师/培训场地管理</li>
                        <li>培训需求汇总</li>
                        <li>培训计划制定及汇报审批管理</li>
                        <li>培训成果、费用管控及培训分析优化</li>
                    </ul>
                </div>
            </div>

            <!-- 考勤管理 -->
            <div class="part attenceManagement page-7 page" id="attenceManagement">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>生产效能提升</p>
                    <p class="desc">提高生产效率，生产力与任务的高度匹配</p>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contwrap">
                        <div class="row four-cols">
                            <div class="col-sm-3 text-center col-board col-border">
                                <div class="col-img icon1"></div>
                                <h4>考勤机刷卡</h4>
                                <p>考勤机管理/职场管理/移动考勤/刷卡管理</p>
                            </div>
                            <div class="col-sm-3 text-center col-board col-border">
                                <div class="col-img icon2"></div>
                                <h4>出勤管理</h4>
                                <p>班组轮班/批量排班/日历排班/自由排班/共享排班</p>
                            </div>
                            <div class="col-sm-3 text-center col-board col-border">
                                <div class="col-img icon3"></div>
                                <h4>假期管理</h4>
                                <p>年休假管理/福利假管理/请假申请</p>
                            </div>  
                            <div class="col-sm-3 text-center col-board col-border brnone">
                                <div class="col-img icon3"></div>
                                <h4>加班管理</h4>
                                <p>加班规则/加班申请/加班管理流程</p>
                            </div>   
                        </div>
                        <div class="row four-cols">
                            <div class="col-sm-3 text-center col-board col-border">
                                <div class="col-img icon1"></div>
                                <h4>异常数据</h4>
                                <p>迟到/早退/缺勤加班数据异常/基础数据校对/合规风控</p>
                            </div>
                            <div class="col-sm-3 text-center col-board col-border">
                                <div class="col-img icon2"></div>
                                <h4>生产力管理</h4>
                                <p>生产工时管理/生产工时优化/工时数据分析</p>
                            </div>
                            <div class="col-sm-3 text-center col-board col-border">
                                <div class="col-img icon2"></div>
                                <h4>统计报表</h4>
                                <p>出勤报表/加班报表/休假报表/月度汇总表</p>
                            </div>
                            <div class="col-sm-3 text-center col-board col-border brnone">
                                <div class="col-img icon3"></div>
                                <h4>员工自助</h4>
                                <p>排班查询/手机考勤/我的日程/假期额度/下属考勤追踪</p>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <!-- 招聘管理 -->
            <div class="part recruitManagement page-8 page" id="recruitManagement">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>人岗精准匹配</p>
                    <p class="desc">岗位胜任要求管理，全面提升招聘效率</p>
                </div>
                <div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="contentwrap">
                        <div class="contentItem">
                            <img src="static/img/recruit/1.png">
                            <h3 class="tit">个性化搜索推荐</h3>
                            <p>基于企业用人偏好，高效筛选候选人</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/2.png">
                            <h3 class="tit">云人才库</h3>
                            <p>企业自有简历实时更新，智能推荐候选人</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/3.png">
                            <h3 class="tit">人脉内推</h3>
                            <p>基于员工人脉大数据，定向聚焦候选人</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/4.png">
                            <h3 class="tit">ATS</h3>
                            <p>多平台信息同步，工作流程数据智能处理</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/5.png">
                            <h3 class="tit">职位BI</h3>
                            <p>职位特征一览无余，智能分析用人偏好</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/6.png">
                            <h3 class="tit">员工保留</h3>
                            <p>大数据预测员工离职意向及原因</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/7.png">
                            <h3 class="tit">人才地图</h3>
                            <p>追踪同行人才状况及优秀候选人</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/8.png">
                            <h3 class="tit">一键约ta</h3>
                            <p>免费意向确认，无意向沟通低至零</p>
                        </div>
                        <div class="contentItem">
                            <img src="static/img/recruit/9.png">
                            <h3 class="tit">企业画像</h3>
                            <p>数据化企业优势，精准触达候选人</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 报表管理 -->
            <div class="part baobiao page-9 page" id="baobiao">
                <div class="cont"  v-animate="{value: 'bounceInRight', delay: 0}">
                    <ul class="lefttxt">
                        <h2>MyeHR报表管理</h2>
                        <li>为领导决策提供数据支持</li>
                        <li>优化企业人员管理流程</li>
                        <li>提升企业效能</li>
                    </ul>
                </div>
            </div>
            
            <!-- 绩效管理 -->
            <div class="part jixiao page-10 page" id="jixiaoManagement">
                <div class="title" v-animate="{value: 'bounceInDown'}" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                    <p>提升员工执行力</p>
                    <p class="desc">企业战略目标的全面有效落地及全过程管控</p>
                </div>
                <div class="cont flexbox" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="project">
                    <div class="inner">
                        <li class="inimg"><img src="/static/img/jixiao/1.png" alt="" /></li>
                        <li class="inhead"><p>快速目标分解</p></li>
                        <li class="indetail"><p>快速形成战略目标对于整体组织架构的目标拆解和跟踪；</p></li>
                    </div>
                    <div class="inner">
                        <li class="inimg"><img src="/static/img/jixiao/2.png" alt="" /></li>
                        <li class="inhead"><p>全过程管控</p></li>
                        <li class="indetail"><p>目标、计划、任务、绩效相统一，保证目标的有效执行；</p></li>
                    </div>
                    <div class="inner">
                        <li class="inimg"><img src="/static/img/jixiao/3.png" alt="" /></li>
                        <li class="inhead"><p>便捷任务反馈</p></li>
                        <li class="indetail"><p>实现在目标执行过程中的任务回馈、纠偏和风险控制；并且可以多部门协同完成；</p></li>
                    </div>
                    <div class="inner">
                        <li class="inimg"><img src="/static/img/jixiao/4.png" alt="" /></li>
                        <li class="inhead"><p>目标与工作统一</p></li>
                        <li class="indetail"><p>构建一个以岗位为依托的目标执行体系，并且可通过图表方便了解工作进度；</p></li>
                    </div>
                </div>
            </div>

            <!-- 解决方案管理 -->
            <div class="part solve page-11 page" id="solve">
                <div class="cont" v-animate="{value: 'zoomIn'}">
                    <div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
                        <p>提升员工执行力</p>
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
<style type="text/css" scoped>
.hr{width:100%;color: rgb(105,105,105);}

.project .cont{width: 70%;margin-left: 15%;}
.project .cont .contentwrap{width: 100%;display: flex; flex-wrap: wrap;}
.project .cont .contentwrap .contentitem{display: inline-block;width: 33.3%;padding-top: 2rem;text-align: center;opacity: 1!important;-webkit-animation-name: bounceInUp;animation-name: bounceInUp;-webkit-transform-origin: center bottom;transform-origin: center bottom;}
.project .cont .contentwrap .contentitem .left-img{width: 65px;height: 65px;border-radius: 10px;margin:0 auto 10px;background-position: center;background-repeat: no-repeat;}
.project .cont .contentwrap .contentitem .right-con{display: inline-block;font-size: 18px;line-height: 26px;color: #333;}
.project .cont .contentwrap .contentitem p{color: #666;font-size: 14px;margin-top: .6em;}


/*组织掌控*/
.control .cont{width: 70%;margin-left: 15%;margin-top: 3rem;}
.control .cont .contwrap{width: 100%;display: flex; flex-wrap: wrap;}
.part.control .cont .contwrap>div{width: 48%;display: inline-block;}
.part.control .cont .contwrap h3{color: #333;margin-bottom: .5em;}
.part.control .cont .contwrap .left-items{margin-right: 2%;}
.part.control .cont .contwrap .right-items{margin-left: 2%;}
.control .cont .contwrap .item{height: 80px;margin-bottom:10px;vertical-align: middle;}
.control .cont .contwrap .left-items{text-align: right;}
.control .cont .contwrap .left-items .right{height: 70px;width: 70px;float: right;background-color: red;margin-left: 3%;
    border-radius: 50%;}
.control .cont .contwrap .right-items .left{height: 70px;width: 70px;float: left;background-color: red;margin-right: 3%;
    border-radius: 50%;}
.control .cont .contwrap .left-items .item:nth-child(1) .right{background:rgb(79,129,189) url(../../../static/img/control/control1.png) no-repeat center center/50%;}
.control .cont .contwrap .left-items .item:nth-child(2) .right{background:rgb(155,187,89) url(../../../static/img/control/control3.png) no-repeat center center/50%;}
.control .cont .contwrap .left-items .item:nth-child(3) .right{background:rgb(75,172,198) url(../../../static/img/control/control5.png) no-repeat center center/50%;}
.control .cont .contwrap .left-items .item:nth-child(4) .right{background:rgb(250,157,76) url(../../../static/img/control/control7.png) no-repeat center center/50%;}
.control .cont .contwrap .left-items .item:nth-child(5) .right{background:rgb(57,141,227) url(../../../static/img/control/control9.png) no-repeat center center/50%;}

.control .cont .contwrap .right-items .item:nth-child(1) .left{background:rgb(192,80,77) url(../../../static/img/control/control2.png) no-repeat center center/50%;}
.control .cont .contwrap .right-items .item:nth-child(2) .left{background:rgb(128,100,162) url(../../../static/img/control/control4.png) no-repeat center center/50%;}
.control .cont .contwrap .right-items .item:nth-child(3) .left{background:rgb(247,150,70) url(../../../static/img/control/control6.png) no-repeat center center/50%;}
.control .cont .contwrap .right-items .item:nth-child(4) .left{background:rgb(177,188,57) url(../../../static/img/control/control8.png) no-repeat center center/50%;}
.control .cont .contwrap .right-items .item:nth-child(5) .left{background:rgb(142,92,212) url(../../../static/img/control/control10.png) no-repeat center center/50%;}

/*薪酬管理*/

.compensationManagement .cont{width: 50%;margin-left: 25%;margin-top: 3rem;}
.three-cols {margin: -1px 0 0 0!important;border-top: 1px solid #3099c2;border-bottom: 1px solid #3099c2;
    display: flex;}
.compensationManagement  .three-cols{border:none;}
.three-cols .col-border {border-right: 1px solid #3099c2;}
.compensationManagement .three-cols .col-border{border:none;}
.three-cols .col-sm-4 {width: 33.3%;height: 0;padding-bottom: 28%;display: inline-block;}
.compensationManagement .three-cols .col-sm-4:hover {box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);}
.three-cols .col-img {border-radius: 50%;display: block;font-size: 16px;width: 80px;height: 80px;line-height: 80px;margin: 10px auto 0;}
.three-cols:nth-child(1) .col-sm-4:nth-child(1) .col-img{background: url(../../../static/img/moneycom/1.png)no-repeat center/40%;}
.three-cols:nth-child(1) .col-sm-4:nth-child(2) .col-img{background: url(../../../static/img/moneycom/2.png)no-repeat center/40%;}
.three-cols:nth-child(1) .col-sm-4:nth-child(3) .col-img{background: url(../../../static/img/moneycom/3.png)no-repeat center/40%;}
.three-cols:nth-child(2) .col-sm-4:nth-child(1) .col-img{background: url(../../../static/img/moneycom/4.png)no-repeat center/40%;}
.three-cols:nth-child(2) .col-sm-4:nth-child(2) .col-img{background: url(../../../static/img/moneycom/5.png)no-repeat center/40%;}
.three-cols:nth-child(2) .col-sm-4:nth-child(3) .col-img{background: url(../../../static/img/moneycom/6.png)no-repeat center/40%;}
.three-cols h4{line-height: 2em;}
.three-cols p{width: 90%;margin: 0 auto;font-weight: 400;font-size: 14px;line-height: 1.25125rem;}
.compensationManagement .cont .three-cols .brnone{border-right: 0;}

/*人事管理*/
.part.peopleManagement .cont{height: calc(100% - 115px);background: url(../../../static/img/renshi.png) no-repeat center;background-size: 65%;}

/*培训管理*/
.part.training .cont{height: calc(100% - 115px);background: url(../../../static/img/training.png) no-repeat right;background-size: 60%;}
.cont ul.lefttxt{padding: 10% 0 0 15%;color: #333;opacity: 1!important;}
.cont ul.lefttxt h2{font-size: 24px;font-weight: 100;margin-bottom: 10px;}
.cont ul.lefttxt li{line-height: 35px;list-style: disc;font-size: 16px;color: #666;}

/*考勤管理*/
.part.attenceManagement{background:url(../../../static/img/banner/1.jpg) no-repeat;background-size:cover; }
.part.attenceManagement .title  p{color: #fff;}
.part.attenceManagement .title  p.desc{color: #fff;}
.attenceManagement .cont{width: 68%;margin-left: 16%;margin-top: 3rem;}
.four-cols {margin: -1px 0 0 0!important;border-top: 1px solid #3099c2;border-bottom: 1px solid #3099c2;
    display: flex;}
.four-cols .col-border {border-right: 1px solid #3099c2;}
.four-cols .col-sm-3 {width: 25%;height: 0;padding-bottom: 21%;display: inline-block;color: #fff;}
.four-cols .col-img {border-radius: 50%;display: block;font-size: 16px;width: 70px;height: 70px;line-height: 70px;margin: 10px auto 0;}
.four-cols:nth-child(1) .col-sm-3:nth-child(1) .col-img{background: url(../../../static/img/attench/1.png)no-repeat center/50%;}
.four-cols:nth-child(1) .col-sm-3:nth-child(2) .col-img{background: url(../../../static/img/attench/2.png)no-repeat center/50%;}
.four-cols:nth-child(1) .col-sm-3:nth-child(3) .col-img{background: url(../../../static/img/attench/3.png)no-repeat center/50%;}
.four-cols:nth-child(1) .col-sm-3:nth-child(4) .col-img{background: url(../../../static/img/attench/4.png)no-repeat center/50%;}
.four-cols:nth-child(2) .col-sm-3:nth-child(1) .col-img{background: url(../../../static/img/attench/5.png)no-repeat center/50%;}
.four-cols:nth-child(2) .col-sm-3:nth-child(2) .col-img{background: url(../../../static/img/attench/6.png)no-repeat center/50%;}
.four-cols:nth-child(2) .col-sm-3:nth-child(3) .col-img{background: url(../../../static/img/attench/7.png)no-repeat center/50%;}
.four-cols:nth-child(2) .col-sm-3:nth-child(4) .col-img{background: url(../../../static/img/attench/8.png)no-repeat center/50%;}
.four-cols .col-sm-3:hover{background-color: rgb(79,129,189);}
.four-cols h4{line-height: 2em;}
.four-cols p{width: 90%;margin: 0 auto;}
.attenceManagement .cont .four-cols .brnone{border-right: 0;}


/*招聘管理*/
.recruitManagement .cont{width: 60%;margin-left: 20%;margin-top: 2em;}
.recruitManagement .cont .contentwrap{width: 100%;display: flex; flex-wrap: wrap;}
.recruitManagement .cont .contentwrap .contentItem{display: inline-block;width: 20%;margin:0 6.5% 1em;text-align: center;border-radius: 10px;}
.recruitManagement .cont .contentwrap .contentItem img{margin:1em auto;width: 45px;}
.recruitManagement .cont .contentwrap .contentItem h3{color: #fff;font-weight: 100;margin-bottom: 1em;}
.recruitManagement .cont .contentwrap .contentItem .left-img{width: 70px;height: 70px;border-radius: 10px;display: inline-block;vertical-align: middle;margin-bottom:10px;background-position: center;background-repeat: no-repeat;}
.recruitManagement .contentItem:nth-child(1){background-color: #5082BD;}
.recruitManagement .contentItem:nth-child(2){background-color: #C0514E;}
.recruitManagement .contentItem:nth-child(3){background-color: #F2C6A2;}
.recruitManagement .contentItem:nth-child(4){background-color: #F79747;}
.recruitManagement .contentItem:nth-child(5){background-color: #D7A8C7;}
.recruitManagement .contentItem:nth-child(6){background-color: #7B80B6;}
.recruitManagement .contentItem:nth-child(7){background-color: #9CBB5A;}
.recruitManagement .contentItem:nth-child(8){background-color: #8165A3;}
.recruitManagement .contentItem:nth-child(9){background-color: #4CADC6;}

.recruitManagement .cont .contentwrap .contentItem p{display: none;line-height:1.5em;color: #fff;margin-top: 2.2em;width: 80%;margin-left:10%;}
.recruitManagement .cont .contentwrap .contentItem:hover img,.recruitManagement .cont .contentwrap .contentItem:hover h3{display: none;}
.recruitManagement .cont .contentwrap .contentItem:hover p{display: block;}

/*报表*/
.part.baobiao .cont{height: 100%;background:url(../../../static/img/baobiao.png)no-repeat 80%/45%;}
.part.baobiao .cont ul{opacity: 1!important;}
.part.baobiao .cont h2{font-size: 24px;line-height: 40px;}

/*绩效*/
.part.jixiao .flexbox{display:flex;margin-top:5rem;padding:0 2%;flex-direction:row;flex-wrap:wrap;}
.part.jixiao .inner{position:relative;box-sizing:border-box;margin:0 2%;padding-bottom:20%;width:21%;height:0;}
.part.jixiao .inner li{width:100%;padding-top:5%;text-align: center;}
.part.jixiao .inner li p{font-size:14px}
.part.jixiao .inner .inimg{padding-top:7%;text-align:center;min-height: 80px;}
.part.jixiao .inner .inhead p{text-align:center;color: #333;font-size: 20px;}
.part.jixiao .inner .indetail p{color:#666;padding:0 10%}
.part.jixiao .inner img{width:20%}



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

/**/
.part.solve .cont{height: 100%;background:url(../../../static/img/solve.png)no-repeat center/60%;}

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

