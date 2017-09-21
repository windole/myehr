<template>
    <div class="footer page">
        <div class="foot-header">
            <h1>高端人力资源，激发企业活力</h1>
            <button>免费体验</button>
        </div>
        <div class="foot_wrap clear">
            <div class="friend clear">
                <div class="item">
                    <h4 class="title">
                        <span>关于我们</span>
                    </h4>
                    <ul class="list">
                        <li class="list-item"><router-link to="/pass">了解MyeHR</router-link></li>
                        <li class="list-item"><router-link to="/hr">公司介绍</router-link></li>
                        <li class="list-item"><router-link to="/stuffServers">联系我们</router-link></li> 
                        <li class="list-item"><router-link to="/pass">合作伙伴</router-link></li>
                    </ul>
                </div>
                <div class="item">
                    <h4 class="title">
                        <span>行业案例</span>
                    </h4>
                    <ul class="list">
                        <li class="list-item"><router-link to="/pass">金融行业</router-link></li>
                        <li class="list-item"><router-link to="/hr">制造行业</router-link></li>
                        <li class="list-item"><router-link to="/stuffServers">生活服务</router-link></li> 
                        <li class="list-item"><router-link to="/pass">国企单位</router-link></li>
                        <li class="list-item"><router-link to="/hr">房地产行业</router-link></li>
                    </ul>
                </div>
                <div class="item">
                    <h4 class="title">
                        <span>产品服务</span>
                    </h4>
                    <ul class="list">
                        <li class="list-item"><router-link to="/pass">Pass平台</router-link></li>
                        <li class="list-item"><router-link to="/hr">HR应用</router-link></li>
                        <li class="list-item"><router-link to="/stuffServers">员工服务</router-link></li>    
                    </ul>
                </div>
                <div class="item">
                    <h4 class="title">
                        <span>解决方案</span>
                    </h4>
                    <ul class="list">
                        <li class="list-item"><router-link to="/about/two">组织管理</router-link></li>
                        <li class="list-item"><router-link to="/about/three">人事管理</router-link></li>
                        <li class="list-item"><router-link to="/about/four">薪酬福利</router-link></li>
                        <li class="list-item"><router-link to="/about/six">考勤管理</router-link></li>
                        <li class="list-item"><router-link to="/about/two">绩效管理</router-link></li>
                        <li class="list-item"><router-link to="/about/three">招聘管理</router-link></li>
                        <li class="list-item"><router-link to="/about/four">培训管理</router-link></li>
                        <li class="list-item"><router-link to="/about/six">员工发展</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="code">
                <div class="code_item clear">
                    <div class="item">
                        <div class="img">
                            <img src="../../static/img/weixinImg.jpg">
                        </div>
                        <p>官方微信二维码</p>
                    </div>
                    <div class="item">
                        <div class="img">
                            <img src="../../static/img/weixinImg.jpg">
                        </div>
                        <p>官方微博二维码</p>
                    </div>
                </div>
                <div class="logo">
                    <!-- <img src="../../static/img/logo_footer.png"> -->
                    <p>电话：13122069450</p>
                    <p>邮箱：myehr@163.com</p>
                </div>
            </div>
        </div>
        <div class="btm">
            <div class="wrap">
                <span>{{ CopyRight }}</span>
                <span class="line"></span>
                <span>{{ BackUp }}</span>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    // const ERR_OK = 0;
    import axios from 'axios';
    export default{
        data() {
            return {
                foot: {},
                CopyRight: '@2016 合协版权所有',
                BackUp: '151511'
            };
        },
        created() {
            this.getDate();
        },
        methods: {
            toShare() {
                this.$router.push('/share');
            },
            getDate() {
                axios.get('./../../static/data/foot-json.json').then(function (res) {
                    console.log(res);
                });
            }
        }
    };
</script>
<style>

.footer {
    top: 5rem;
    background: #fff;
}
.foot-header{
    padding: 4rem;height: 14rem;text-align: center;background: #076ce0;
}
.foot-header h1{color: #fff;padding-bottom: 2rem;}
.foot-header button{border: none;outline: none;padding: 10px 50px;background: rgb(240,171,0);border-radius: 5px;font-size: 17px;letter-spacing: 1px;color: #fff;}
.footer .foot_wrap {
    width: 78.125%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.footer .foot_wrap .friend {
    float: left
}

.footer .foot_wrap .friend .item {
    float: left;
    margin-left: 3rem;
    width: 9rem
}

.footer .foot_wrap .friend .item:first-child {
    width: 12rem
}

.footer .foot_wrap .friend .item .title {
    font-weight: 400;
    line-height: 3rem;
    font-size: 18px;
    color: rgb(105,105,105);
}

.footer .foot_wrap .friend .item .list .list-item {
    font-size: 14px;
    line-height: 1.8rem;
    color: rgb(105,105,105);
}

.footer .foot_wrap .friend .item .list .list-item a {
    color: rgb(105,105,105);
}

.footer .foot_wrap .code {
    float: right;
    margin-right: 3.5rem;
    width: 15rem
}

.footer .foot_wrap .code div.logo {
    height: 3rem;
    /*line-height: 3rem;*/
    margin-bottom: 4rem
}

.footer .foot_wrap .code div.logo img {
    vertical-align: middle;
    max-width: 100%
}

.footer .foot_wrap .code .code_item {
    width: 18rem
}

.footer .foot_wrap .code .code_item .item {
    float: left;
    margin-right: 2rem;
    width: 6.5rem;
    display: inline-block
}

.footer .foot_wrap .code .code_item .item .img {
    width: 6.5rem;
    height: 6.5rem;
    margin-bottom: 1.4rem;
    background: #fff
}

.footer .foot_wrap .code .code_item .item .img img {
    max-width: 100%;
    width: 100%
}

.footer .foot_wrap .code .code_item .item:last-child {
    margin-right: 0
}

.footer .foot_wrap .code .code_item .item p {
    font-size: 12px;
    color: rgb(105,105,105);
    text-align: center
}

.footer .btm {
    height: 4rem;
    border-top: 1px solid #f1f1f1
}

.footer .btm .wrap {
    text-align: center;
    font-size: 12px;
    color: rgb(105,105,105);
    line-height: 4rem
}

.footer .btm .wrap span.line {
    height: .6rem;
    width: 1px;
    background: #fff;
    margin-top: 1.7rem;
    margin-left: .7rem;
    margin-right: .7rem;
    display: inline-block
}

@media screen and (max-width:1420px) {
    div.footer div.foot_wrap div.friend div.item:first-child {
        width: 12.5rem
    }
}

@media screen and (max-width:1200px) {
    div.footer div.foot_wrap div.friend div.item:first-child {
        width: 13.5rem
    }
}

@media screen and (max-width:1150px) {
    div.footer div.foot_wrap div.friend div.item {
        margin-left: 0;
        width: 110px
    }
    div.footer div.foot_wrap div.friend div.item:first-child {
        width: 160px
    }
    div.footer div.foot_wrap div.friend div.item h4.title {
        font-size: 14px
    }
    div.footer div.foot_wrap div.friend div.item ul.list li.list-item {
        font-size: 12px;
        line-height: 26px
    }
    div.footer div.foot_wrap div.code {
        margin-right: 0;
        width: 200px
    }
    div.footer div.foot_wrap div.code div.logo {
        height: 36px;
        line-height: 36px;
        margin-bottom: 50px
    }
    div.footer div.foot_wrap div.code div.code_item {
        width: 100%
    }
    div.footer div.foot_wrap div.code div.code_item div.item {
        width: 95px;
        margin-right: 10px
    }
    div.footer div.foot_wrap div.code div.code_item div.item div.img {
        width: 100%;
        height: 95px;
        margin-bottom: 16px
    }
    div.footer div.foot_wrap div.code div.code_item div.item p {
        font-size: 12px
    }
    div.footer div.foot_wrap div.code div.code_item div.item:last-child {
        margin-right: 0
    }
}

@media screen and (max-width:1050px) {
    div.footer div.foot_wrap {
        width: 90%
    }
}

@media screen and (max-width:767px) {
    div.footer {
        padding-bottom: 5.5rem
    }
    div.footer div.foot_wrap {
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 4.5rem
    }
    div.footer div.foot_wrap div.friend {
        display: none
    }
    div.footer div.foot_wrap div.code {
        float: none;
        width: 100%
    }
    div.footer div.foot_wrap div.code div.logo {
        text-align: center;
        height: 2.5rem;
        margin-bottom: 3.5rem
    }
    div.footer div.foot_wrap div.code div.logo img {
        height: 100%
    }
    div.footer div.foot_wrap div.code div.code_item {
        text-align: center
    }
    div.footer div.foot_wrap div.code div.code_item div.item {
        float: none;
        width: 7rem;
        margin-left: 2.5rem;
        margin-right: 2.5rem
    }
    div.footer div.foot_wrap div.code div.code_item div.item div.img {
        height: 7rem;
        margin-bottom: 1.5rem
    }
    div.footer div.foot_wrap div.code div.code_item div.item div.img img {
        width: 100%
    }
    div.footer div.foot_wrap div.code div.code_item div.item p {
        font-size: .9rem
    }
    div.footer div.foot_wrap div.code div.code_item div.item:last-child {
        margin-right: 2.5rem
    }
    div.footer div.btm {
        height: 6rem
    }
    div.footer div.btm div.wrap {
        font-size: .9rem;
        line-height: 2rem
    }
    div.footer div.btm div.wrap span.line {
        display: none
    }
    div.footer div.btm div.wrap span {
        display: block;
        line-height: 2rem
    }
}
</style>
