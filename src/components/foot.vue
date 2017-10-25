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
                        <li class="list-item"><router-link to="/about/two">组织人事</router-link></li>
                        <li class="list-item"><router-link to="/about/four">薪酬考勤</router-link></li>
                        <li class="list-item"><router-link to="/about/two">绩效招聘</router-link></li>
                        <li class="list-item"><router-link to="/about/four">培训自助</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="code">
                <div class="consult">
                    <div class="tel">
                        <i class="icon-phone"></i>021-80394748                         
                    </div>
                    <div class="email">
                        <a href="mailto:myehr@163.com">E-mail : myehr@163.com</a>                            
                    </div>
                    <a id="consult" class="ui inverted button"><i class="icon-consult"></i>企业咨询</a>
                    <p>请点击填写咨询表单 将有客户专员回电</p>
                </div>
                <div class="code_item clear">
                    <div class="item">
                        <div class="img">
                            <img src="../../static/img/weixinImg.jpg">
                        </div>
                        <p>官方微信二维码</p>
                    </div>
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
                CopyRight: '上海合协软件有限公司',
                BackUp: '沪ICP备05043669号-1'
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
    margin-top: 5rem;
    top: 5rem;
    background: #1f2f4f;
    color: #ccc;
}
.foot-header{
    padding: 4rem;height: 14rem;text-align: center;background: #076ce0;
}
.foot-header h1{color: #fff;padding-bottom: 2rem;}
.foot-header button{border: none;outline: none;padding: 10px 50px;background: rgb(240,171,0);border-radius: 5px;font-size: 17px;letter-spacing: 1px;color: #fff;}
.footer .foot_wrap {
    width: 90%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.footer .foot_wrap .friend {
    float: left;
    width: 62.5%;
}

.footer .foot_wrap .friend .item {
    float: left;
    padding: 0 1em;
    width: 25%;
}


.footer .foot_wrap .friend .item .title {
    font-weight: 400;
    line-height: 3rem;
    font-size: 18px;
}

.footer .foot_wrap .friend .item .list .list-item {
    font-size: 14px;
    line-height: 1.8rem;
}

.footer .foot_wrap .friend .item .list .list-item a {
    color: #ccc;
}

.footer .foot_wrap .code {
    float: right;
    width: 37.5%;
}
.footer .foot_wrap .code .consult {
    width: 280px;
    float: left;
    border-left: 1px solid #758396;
    padding-left: 70px;
    margin-left: -50px;
}
.consult .tel {
    font-size: 24px;
    color: #fff;
}
.consult .email {
    font-size: 13px;
    padding-bottom: 27px;
    margin-top: 8px;
    margin-bottom: 10px;
    border-bottom: 1px solid #758396;
}
.consult .email a{color: #ccc;}
.consult a.ui.button {
    text-align: center;
    width: 124px;
    border-radius: 20px;
    padding: 12px 20px;
    margin: 8px 0;
    box-shadow: 0 0 0 1px #fff inset!important;
}
.consult p {
    font-size: 12px;
    color: #ccc;
}

.footer .foot_wrap .code .logo {
    height: 3rem;
    width: 140px;
    float: right;
    text-align: center;
}

.footer .foot_wrap .code .logo img {
    vertical-align: middle;
    max-width: 100%
}

.footer .foot_wrap .code .code_item {
    float: right;
}

.footer .foot_wrap .code .code_item .item {
    margin-right: 2rem;
    width: 12rem;
    display: inline-block
}

.footer .foot_wrap .code .code_item .item .img {
    width: 12rem;
    height: 12rem;
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
    color: #ccc;
    text-align: center
}

.footer .btm {
    /*height: 4rem;
    border-top: 1px solid #f1f1f1*/
    color: #ccc;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #162035;
}

.footer .btm .wrap {
    text-align: center;
    font-size: 12px;
    color: #ccc;
    /*line-height: 4rem*/
}

.footer .btm .wrap span.line {
    height: .6rem;
    width: 1px;
    background: #fff;
    margin-left: .7rem;
    margin-right: .7rem;
    display: inline-block
}

@media screen and (max-width:1420px) {
    
}

@media screen and (max-width:1200px) {
    
}

@media screen and (max-width:1150px) {
    .footer .foot_wrap .friend .item {
        margin-left: 0;
        width: 110px
    }
    .footer .foot_wrap .friend .item:first-child {
        width: 160px
    }
    .footer .foot_wrap .friend .item h4.title {
        font-size: 14px
    }
    .footer .foot_wrap .friend .item ul.list li.list-item {
        font-size: 12px;
        line-height: 26px
    }
    .footer .foot_wrap .code {
        margin-right: 0;
        width: 200px
    }
    .footer .foot_wrap .code .logo {
        height: 36px;
        line-height: 36px;
        margin-bottom: 50px
    }
    .footer .foot_wrap .code .code_item {
        width: 100%
    }
    .footer .foot_wrap .code .code_item .item {
        width: 95px;
        margin-right: 10px
    }
    .footer .foot_wrap .code .code_item .item .img {
        width: 100%;
        height: 95px;
        margin-bottom: 16px
    }
    .footer .foot_wrap .code .code_item .item p {
        font-size: 12px
    }
    .footer .foot_wrap .code .code_item .item:last-child {
        margin-right: 0
    }
}

@media screen and (max-width:1050px) {
    .footer .foot_wrap {
        width: 90%
    }
}

@media screen and (max-width:767px) {
    .footer {
        padding-bottom: 5.5rem
    }
    .footer .foot_wrap {
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 4.5rem
    }
    .footer .foot_wrap .friend {
        display: none
    }
    .footer .foot_wrap .code {
        float: none;
        width: 100%
    }
    .footer .foot_wrap .code .logo {
        text-align: center;
        height: 2.5rem;
        margin-bottom: 3.5rem
    }
    .footer .foot_wrap .code .logo img {
        height: 100%
    }
    .footer .foot_wrap .code .code_item {
        text-align: center
    }
    .footer .foot_wrap .code .code_item .item {
        float: none;
        width: 7rem;
        margin-left: 2.5rem;
        margin-right: 2.5rem
    }
    .footer .foot_wrap .code .code_item .item .img {
        height: 7rem;
        margin-bottom: 1.5rem
    }
    .footer .foot_wrap .code .code_item .item .img img {
        width: 100%
    }
    .footer .foot_wrap .code .code_item .item p {
        font-size: .9rem
    }
    .footer .foot_wrap .code .code_item .item:last-child {
        margin-right: 2.5rem
    }
    .footer .btm {
        height: 6rem
    }
    .footer .btm .wrap {
        font-size: .9rem;
        line-height: 2rem
    }
    .footer .btm .wrap span.line {
        display: none
    }
    .footer .btm .wrap span {
        display: block;
        line-height: 2rem
    }
}
</style>
