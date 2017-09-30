<template>
    <div class="sign" v-show="isShow">
        <div class="theme-popover" style="display: block;">  
            <div class="page regPage">  
                <ul class="tabs">    
                    <li v-for="(item, index) in tabContent" @click="showTab(index)" :class="{ activeTab : index === showTabType }" style="border-radius: 8px 0 0 0;">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>     
                </ul>  
                <div class="tab_container">    
                    <div id="tab1" class="tab_content" v-show="!showTabType">      
                        <div id="tips1" style="color:#000;position: absolute;top: 5px;left: 24px;font-size:12px;">为了我们能更好的服务您，请您填写以下信息，我们将会严格保密！</div>      
                        <div id="tips2" style="color:#000;position: absolute;top: 60px;left: 35px;font-size:15px;display:none;">亲，欢迎您回来体验！</div>      
                        <div class="fields">        
                            <input type="hidden" id="_url" name="_url" value="">        
                            <input type="hidden" id="city" name="city" value="">        
                            <input type="hidden" id="province" name="province" value="">        
                            <input type="hidden" id="type" name="type" value="0">        
                            <div class="field">
                                <span class="require">*</span>手机：<input type="text" id="phonenum" name="mobile" style="width: 160px;" maxlength="11"><input id="getCode" type="button" value="获取验证码">
                            </div>        
                            <div class="line"></div>        
                            <div class="field"><span class="require">*</span>验证码：<input type="text" id="radomcode" name="radomcode" style="width: 160px;"></div>        
                            <div class="line"></div>        
                            <div class="field"><span class="require">*</span>姓名：<input type="text" id="uname" name="name"></div>        
                            <div class="line"></div>        
                            <div class="field"><span class="require">*</span>单位：<input type="text" id="company" name="company"></div>        
                            <div class="line"></div>        
                            <div class="field"><span class="require" style="color:#ffffff">&nbsp;</span>邮箱：<input type="text" id="email" name="email"></div>              
                        </div>      
                        <button id="save" class="btn" style="margin-top: -20px;">马上体验</button>    
                    </div>    
                    <div id="tab2" class="tab_content" v-show="showTabType">      
                        <div class="fields" style="margin-top: 90px;">        
                            <div class="field">手机：<input type="text" id="qphonenum" name="qphonenum" maxlength="11"></div>      
                        </div>      
                        <button id="login" class="btn">马上体验</button>    
                    </div>  
                </div>  
            </div>  
            <div class="theme-popover-close" @click="close()"></div>
        </div>
        <div class="theme-popover-mask" style="display: block;" @click="close()"></div>
    </div>
</template>

<script>
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tabContent: [{name: '亲，麻烦先注册'}, {name: '快速登录'}],
                showTabType: 0
            };
        },
        methods: {
            showTab(index) {
                this.showTabType = index;
            },
            close() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style type="text/css" scoped>
.theme-popover-mask {
  z-index: 99998;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#000;
  opacity:0.4;
  filter:alpha(opacity=40);
  display:none
}

.theme-popover {
  z-index:99999;
  position:fixed;
  top:50%;
  left:50%;
  margin:-193px 0 0 -216px;
  border-radius:8px;
  background-color:#fff;
  display:none;
}

.theme-popover * {
  font-size: 16px;
  box-sizing: content-box;
}

.theme-popover-close {
  position: absolute;
  right: -25px;
  top: -25px;
  width: 52px;
  height: 52px;
  background-image: url('./../../static/img/popover-close.png');
  cursor: pointer;
}

.theme-popover .tab_container {
  float: left;
  width: 100%;
  position: relative;
}

.theme-popover .tabs {
  margin: 0;
  padding: 0;
  float: left;
  list-style: none;
  height: 46px;
  border: none;
  width: 100%;
}

.theme-popover .tabs li {
  float: left;
  margin: 0;
  padding: 0;
  height: 45px;
  width: 50%;
  line-height: 45px;
  border: none;
  margin-bottom: -1px;
  background: #e0e4e8;
  overflow: hidden;
  position: relative;
}

.theme-popover .tabs .activeTab, .theme-popover .tabs .activeTab a:hover {
  background: #fff;
  border-bottom: 1px solid #fff;
}

.theme-popover .tabs li a {
  text-decoration: none;
  color: #242424;
  display: block;
  padding: 0 20px;
  outline: none;
  text-align: center;
}

.theme-popover .tabs li a:hover {
  background: #ccc;
}

.theme-popover .line {
  border-bottom: 1px solid #bfbfbf;
}

.theme-popover .fields {
  padding: 0 20px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  width: 345px;
  margin: 35px auto;
}

.theme-popover .require {
  color: red;
  padding: 0 5px;
}

.theme-popover .field {
  height: 45px;
  line-height: 45px;
  color: #888888;
}

.theme-popover .btn {
  display: block;
  border: none;
  height: 45px;
  width: 385px;
  border-radius: 5px;
  background-color: #49a7e0;
  margin: 0 auto;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
}

.theme-popover button, .theme-popover input[type="button"] {
  box-sizing: border-box;
}

.theme-popover #getCode {
  border: none;
  height: 30px;
  background-color: #49a7e0;
  color: #ffffff;
  float: right;
  margin-top: 7px;
  cursor: pointer;
  line-height: normal;
  outline: none;
  font-size: 12px;
  padding: 1px 6px;
}

.theme-popover .disable {
  background-color: #d5d5d5 !important;
  cursor: auto !important;
}

.theme-popover input[type=text] {
  border: none;
  outline: none;
  background-color: #ffffff;
  font-size: 15px;
  line-height: normal;
  width: 275px;
}

.theme-popover .page {
  display: none;
}

.theme-popover .regPage {
  display: block;
  width:433px;
  height:387px;
  top: 0;
}

.theme-popover .wxQcode, .theme-popover .mobiQcode {
  width: 735px;
  height: 448px;
}

.theme-qcode {
  margin-left: -367px;
  margin-top: -224px;
}
</style>
