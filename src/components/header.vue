<template>
    <div class="header" :class="{ 'dark' : bgType || dark }">
        <div class="header_wrap clear">
            <div class="logo" ref='logo'>
                <router-link to="/">
                    <img src="./../../static/img/logo_01.png">
                </router-link>
            </div>
            <div class="lang clear">
                <span><a href="#">登录</a></span>
                <span class="line"></span>
                <span><a href="#">注册</a></span>
            </div>
            <div class="search" style="display:none;">
                <form class="form">
                    <div class="input-group">
                        <input type="text" placeholder="请输入关键词" class="input" ref='pcSearch' v-model='pcSearch' @focus="clearVal()">
                        <button class="btn" type="button"><router-link :to="'/search/'+this.pcSearch"></router-link></button>
                    </div>
                </form>
            </div>
            <div class="menu" ref="menuList">
                <div class="search" style="display:none;">
                    <form class="form">
                        <div class="input-group" @click="close">
                            <input type="text" placeholder="请输入关键词" class="input" v-model="pcSearch">
                            <router-link class="btn" :to="'/search/'+this.pcSearch"><button type="button"></button></router-link>
                        </div>
                    </form>
                </div>
                <ul class="list clear" ref="menu">
                   <!--  <li class="list-item active">
                        <router-link to="/">
                            <span class="icon"></span>
                            <span>首页</span>
                        </router-link>
                        <span class="line"></span>
                    </li> -->

                    <li class="list-item" v-for="(item, index) in menuList" :class="{ active : index === currentIndex}" @click = "chooseMenu(index)">
                        <router-link :to="{path: item.menuItemPath}">
                            <span class="icon"></span>
                            <span>{{item.menuItemName}}</span>
                        </router-link>
                        <span class="line"></span>
                        <div class="submenu" :class="'width'+item.menuItemContent.length" v-if="item.menuItemContent.length">
                            <ul class="sub_wrap clear">
                                <li class="sub_list" v-for="item2 in item.menuItemContent">
                                    <router-link :to="{path:item.menuItemPath +'#'+item2.secondPath}">{{item2.secondName}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
            <div class="menu_icon clear" @click="openMenu" ref="menuIcon">
                <span class="line lg"></span>
                <span class="line md"></span>
                <span class="line sm"></span>
            </div>
            <div class="shadow"  @click="openMenu"></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import $ from 'jquery';
    import axios from 'axios';
    export default{
        props: ['dark'],
        data() {
            return {
                head: {},
                scroll: '',
                width: null,
                pcSearch: '请输入关键词',
                menuList: [],
                currentIndex: 0
            };
        },
        created() {
            this.getDate();
        },
        methods: {
            getDate() {
                axios.get('./../static/data/index-body.json').then((response) => {
                    // console.log(response);
                    let data = response.data;
                    this.menuList = data.menu;
                    console.log(data.menu);
                });
            },
            menu() {
                this.scroll = document.body.scrollTop;
            },
            chooseMenu(index) {
                this.currentIndex = index;
            },
            openMenu() {
                if ($(this.$refs.menuIcon).hasClass('active')) {
                    $(this.$refs.menuIcon).removeClass('active').siblings('div.logo').stop().fadeIn(600);
                    $(this.$refs.menuList).stop().animate({
                        'left': '100%'}, 400);
                    $('.header .header_wrap div.shadow').css('z-index', '-1').css('display', 'none');
                } else {
                    $(this.$refs.menuIcon).addClass('active').siblings('div.logo').stop().fadeOut(600);
                    $(this.$refs.menuList).stop().animate({
                        'left': '11rem'}, 400);
                    $('.header .header_wrap div.shadow').css('z-index', '99').css('display', 'block');
                }
            },
            getActive(obj) {
                $(this.$refs.menu).children().eq(obj).addClass('active').siblings().removeClass('active');
                if ($(window).width() < 768) {
                    $(this.$refs.menuIcon).trigger('click');
                    $('.header .header_wrap div.shadow').css('z-index', '-1').css('display', 'none');
                }
                $('#toTop').trigger('click');
            },
            close() {
                $(this.$refs.menuIcon).removeClass('active').siblings('div.logo').stop().fadeIn(600);
                $(this.$refs.menuList).stop().animate({'left': '100%'}, 400);
                $('.header .header_wrap div.shadow').css('z-index', '-1').css('display', 'none');
            },
            clearVal() {
                $(this.$refs.pcSearch).val('');
            }
        },
        computed: {
            bgType() {
                if (window.location.href.split('#')[1] === '/') {
                    var scrollTop = $('div.banner').height();
                } else {
                    scrollTop = $('div.banner').height();
                }
                this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
                return this.scroll > scrollTop;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
        }
    };

</script>
<style scoped>
 .header {
    height: 5rem;
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    z-index: 100;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}

.header .header_wrap {
    width: 75rem;
    margin: 0 auto;
    height: 100%;
    font-size: 0
}

.header .header_wrap .logo {
    width: 11.4rem;
    height: 100%;
    line-height: 5rem;
    display: inline-block;
    vertical-align: top
}

.header .header_wrap .logo a {
    display: block;
    width: 100%;
    height: 100%
}

.header .header_wrap .logo a img {
    width: 100%;
    line-height: 5rem;
    vertical-align: middle
}

.header .header_wrap .menu {
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    float: right;
    margin-right: 2rem
}

.header .header_wrap .menu div.lang,
.header .header_wrap .menu div.search {
    display: none
}

.header .header_wrap .menu .list .list-item {
    display: inline-block;
    font-size: 16px;
    line-height: 5rem;
    color: #fff;
    float: left;
    position: relative
}

.header .header_wrap .menu .list .list-item span.line {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: .15rem;
    background: #076CE0;
    display: none
}

.header .header_wrap .menu .list .list-item.active span.line {
    display: block
}

.header .header_wrap .menu .list .list-item.active a,
.header .header_wrap .menu .list .list-item:hover a {
    color: #076CE0
}

.header .header_wrap .menu .list .list-item:hover div.submenu {
    height: 10rem;
    display: block;
}

.header .header_wrap .menu .list .list-item:hover div.submenu.fixed {
    height: 7rem
}

.header .header_wrap .menu .list .list-item a {
    color: #000;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    display: block
}

.header .header_wrap .menu .list .list-item .submenu {
    position: absolute;
    top: 5rem;
    left: 0;
    display: none;
    width: auto;
    background: hsla(0, 0%, 100%, .4);
    z-index: 100;
    transition: all .6s;
    overflow: hidden;
    background: rgb(92,96,113);
}

.header .header_wrap .menu .list .list-item .submenu.width1,
.header .header_wrap .menu .list .list-item .submenu.width2,
.header .header_wrap .menu .list .list-item .submenu.width3,
.header .header_wrap .menu .list .list-item .submenu.width4 {
    width: 10.5rem
}

.header .header_wrap .menu .list .list-item .submenu.width5 {
    width: 25rem
}

.header .header_wrap .menu .list .list-item .submenu.width5 .sub_wrap .sub_list {
    width: 50%
}

.header .header_wrap .menu .list .list-item .submenu.width6 {
    width: 25rem
}

.header .header_wrap .menu .list .list-item .submenu.width6 .sub_wrap .sub_list {
    width: 50%
}

.header .header_wrap .menu .list .list-item .submenu.width7 {
    width: 25rem
}

.header .header_wrap .menu .list .list-item .submenu.width7 .sub_wrap .sub_list {
    width: 50%
}

.header .header_wrap .menu .list .list-item .submenu.width8 {
    width: 25rem
}

.header .header_wrap .menu .list .list-item .submenu.width8 .sub_wrap .sub_list {
    width: 50%
}

.header .header_wrap .menu .list .list-item .submenu.width9 {
    width: 31.5rem
}

.header .header_wrap .menu .list .list-item .submenu.width9 .sub_wrap .sub_list {
    width: 33.3%
}

.header .header_wrap .menu .list .list-item .submenu.width10 {
    width: 31.5rem
}

.header .header_wrap .menu .list .list-item .submenu.width10 .sub_wrap .sub_list {
    width: 33.3%
}

.header .header_wrap .menu .list .list-item .submenu .sub_wrap {
    padding: 20px 1.25rem;
    border-top: 2px solid #1eeae7
}

.header .header_wrap .menu .list .list-item .submenu .sub_wrap .sub_list {
    height: 2rem;
    width: 100%;
    float: left
}

.header .header_wrap .menu .list .list-item .submenu .sub_wrap .sub_list a {
    display: block;
    line-height: 2rem;
    font-size: 14px;
    color: #fff;
    height: 2rem;
    padding-left: .5rem;
    padding-right: .5rem;
    text-align: left
}


.header .header_wrap .lang {
    display: inline-block;
    vertical-align: top;
    float: right;
    height: 5rem;
    font-size: 14px;
    line-height: 5rem;
    margin-left: 1.5rem
}

.header .header_wrap .lang span {
    float: left;
    line-height: 5rem;
    display: inline-block;
    height: 5rem
}

.header .header_wrap .lang span.line {
    height: .6rem;
    vertical-align: middle;
    border-left: 1px solid #000;
    margin-left: .7rem;
    margin-right: .7rem;
    margin-top: 2.2rem
}

.header .header_wrap .lang span a {
    color: #000
}

.header .header_wrap div.shadow {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 100%, 0);
    z-index: -1;
    display: none
}

.header.dark {
    background: rgb(92,96,113);
}

.header.dark .header_wrap .menu .list .list-item .submenu {
    background: #fff;
    box-shadow: 0 0 3px #333;
    background: rgb(92,96,113);
}

.header.dark .header_wrap .menu .list .list-item .submenu .sub_wrap .sub_list a {
    color: #fff
}

.header.dark .header_wrap .menu .list .list-item .submenu .sub_wrap .sub_list a:hover {
    color: #076CE0
}

@media screen and (max-width:1370px) {
    .header .header_wrap {
        width: 78.125%
    }
    .header .header_wrap .logo {
        width: 15.2%
    }
    .header .header_wrap .menu {
        margin-right: 1rem
    }
    .header .header_wrap .menu ul.list li.list-item a {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        font-size: 16px
    }
    .header .header_wrap .menu ul.list li.list-item .submenu ul.sub_wrap {
        padding: 10px 6px
    }
    .header .header_wrap .menu ul.list li.list-item .submenu.width1,
    .header .header_wrap .menu ul.list li.list-item .submenu.width2,
    .header .header_wrap .menu ul.list li.list-item .submenu.width3,
    .header .header_wrap .menu ul.list li.list-item .submenu.width4 {
        width: 8rem
    }
    .header .header_wrap .menu ul.list li.list-item .submenu.width5,
    .header .header_wrap .menu ul.list li.list-item .submenu.width6,
    .header .header_wrap .menu ul.list li.list-item .submenu.width7,
    .header .header_wrap .menu ul.list li.list-item .submenu.width8 {
        width: 26rem
    }
    .header .header_wrap .menu ul.list li.list-item .submenu.width9,
    .header .header_wrap .menu ul.list li.list-item .submenu.width10,
    .header .header_wrap .menu ul.list li.list-item .submenu.width11,
    .header .header_wrap .menu ul.list li.list-item .submenu.width12 {
        width: 29rem
    }
    .header .header_wrap .menu ul.list li.list-item .submenu ul.sub_wrap li.sublist a {
        font-size: 12px
    }
}

@media screen and (max-width:1050px) {
    .header .header_wrap {
        width: 90%
    }
    .header .header_wrap .menu {
        margin-right: 20px
    }
    .header .header_wrap .menu ul.list li.list-item a {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 12px
    }
    .header .header_wrap .lang {
        margin-left: 10px
    }
}

@media screen and (max-width:767px) {
    .header .header_wrap {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        width: 100%;
        position: relative
    }
    .header .header_wrap .logo {
        width: 12.5rem
    }
    .header .header_wrap .lang,
    .header .header_wrap .search {
        display: none
    }
    .header .header_wrap .menu {
        position: absolute;
        padding-top: .8rem;
        padding-bottom: 3rem;
        left: 100%;
        top: 0;
        display: block;
        width: 21rem;
        height: 100vh;
        background: #1f2933;
        float: none;
        margin-right: 0;
        z-index: 200
    }
    .header .header_wrap .menu ul.list {
        width: 100%;
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .header .header_wrap .menu ul.list li.list-item {
        display: block;
        width: 100%;
        line-height: 4.5rem;
        border-bottom: 1px solid #414246
    }
    .header .header_wrap .menu ul.list li.list-item:nth-child(2) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3QkQ1NUJFMzE0MzExRTdCMkRDRDM5NEFENTY2MDFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3QkQ1NUJGMzE0MzExRTdCMkRDRDM5NEFENTY2MDFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjdCRDU1QkMzMTQzMTFFN0IyRENEMzk0QUQ1NjYwMUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjdCRDU1QkQzMTQzMTFFN0IyRENEMzk0QUQ1NjYwMUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WMtOkAAABaElEQVR42pzUO0sDQRDA8VyMSPALGAXBB5gikIAgWNil0UKs7CxFUTCFX8DKVksRa8HG3kpQI6KFKSSCFoIYVPAJRo2F53/iLCznXeLdwg9yszuzZF+O67oxn1bAKNrRig88YAM79kDHU2ACq6jowGO8IYU8hrXYGB7rGVJAFdzfNmPF/GzpuL765BrMazDbJNlYQRWOCdxh/p/JRhnr8mMKZyGTRQ43cV2Q/Vj4VsK1FOjFeSxaq0iBBKoRC9SkwC36IxbolAInGIyQLKe0W1YzhVekQ+7CGo7MxzI+QyQP6cHL2MEDXKKtSfKIJi/YR9k4xG6D5AHUMGdi3gFJPeNdDe5A2Y55r3NSr/GzXlvH6vtGD4pYDHoPpOUwrttkd7boid3GS1ABmfFUX58vxK2+d6Sxh1kTTHhmd7XIFaZ9Ds+T9lkZfxcqo9u0ZMU6dIeK3vFOwKOaxSbu9f/Kjb3ApHfgjwADAOwhN2g1tESkAAAAAElFTkSuQmCC)
    }
    /**/
    .header .header_wrap .menu ul.list li.list-item:nth-child(3) a span.icon {
        
    }
    .header .header_wrap .menu ul.list li.list-item:nth-child(4) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzNzY5QUYwMzE0NDExRTc5RjQ2QjAwNUM0QzA3NEI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzNzY5QUYxMzE0NDExRTc5RjQ2QjAwNUM0QzA3NEI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDM3NjlBRUUzMTQ0MTFFNzlGNDZCMDA1QzRDMDc0QjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM3NjlBRUYzMTQ0MTFFNzlGNDZCMDA1QzRDMDc0QjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xRvqKAAABo0lEQVR42qTUzyvDcRzH8e82hzmw0HLwK2WRi6hdzI+DUMtxBxxduCit5D9w0nChiOuUE1JacZDD/B6KWDiQA0utKApfz++8v/Vtbe37nU89Wvt833u17+fz/nxsqqqGFEXxwqXkHgnMYi1bgY1Alc8jnJgI7EADxjGVsYK8D/i0XBOCuFX/xlimGjuZX6hSzA0f1qV+GhPpBQWKtWFDNR7hQRwvWNYL7BYDf9COANyYxxJGjWv4hn6TaziAGK4RxzYu8Q5Han8tBmbiwR1c+qb8d2j9+629bD5raBxuw8bW6Vn5BmoBz2jFhTT5Zz6botuU5o5kamyrowd+1KMNfVYbuwiN6EQTBrGAGzktG1jFKXbMvPKKvN4etjCS9nxYliCqykSuwBYkMZdjXSeRMLspZfIvw/qJMNCuwJA8r7Cyy+Xyo+a0+VKZ91nd5UI84Ey+l8jnK+7h1BvbgScTgX7Z2UpEJegcNYihW28bp1yUXrnvjHefdj4XkUQtunCIY/RiCPsol9ZJBc5IfwWyBIYlcBfFUn8lNRE5hkEcaBO/AgwAD0VA385QcPkAAAAASUVORK5CYII=)
    }
    .header .header_wrap .menu ul.list li.list-item:nth-child(5) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MkQzRTZCMzE0NDExRTc4REY2RjY5MzMwM0U1MTc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA5MkQzRTZDMzE0NDExRTc4REY2RjY5MzMwM0U1MTc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDkyRDNFNjkzMTQ0MTFFNzhERjZGNjkzMzAzRTUxNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDkyRDNFNkEzMTQ0MTFFNzhERjZGNjkzMzAzRTUxNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6JRb9EAAABhklEQVR42ryWXysEURTAZ8ZIPMi/QrS1iQe1ZcsrH4D4AHwBXkgR5RsoypPyIG94FfbFm6W2xJsX5cmKQiZKbRi/q7M1TTPLzFx76te55+7de+aec+8913Rd10CGYQq64At+OmNIDdzCBuS9P5g4GkPvwzs8yOC48gmdUAejcOR19Ih+hj5Dn1xABmrLHRa0wqmhV07A9nYoowQNmh29iD4ABzZtSbyp2VFJ9AA0w4QdMGgGstAuH3ENO1CAw5CJ1YdewrLYadm93WLvBjlaF30joR2RpBYkwWGOHN/u80reDvnjKsxLW60qJe3UH0PnP4eN1i8x9m6aRBI2wRIMyvZXUhR9LGFyA26Ec1iI4mgFhqBX7BzsSbunwtVTjLqixQrj03FDZxlVkqAVbUnYotzgpuRoLoqjNuiI4agl6orG/yN0VcuRJUXqTfO89T771ZLKmtXs6MxXETIqR9OwDVdwJ4cvSdkol3M1xxPcQ78pj5NJmIWmBA8TrzjySFEH/APWvgUYAG2PT4pmXxf/AAAAAElFTkSuQmCC)
    }
    .header .header_wrap .menu ul.list li.list-item:nth-child(6) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyMkUzNzNCMzE0NDExRTdCRkFDRDNCOEI4M0RBQzdBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyMkUzNzNDMzE0NDExRTdCRkFDRDNCOEI4M0RBQzdBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTIyRTM3MzkzMTQ0MTFFN0JGQUNEM0I4QjgzREFDN0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTIyRTM3M0EzMTQ0MTFFN0JGQUNEM0I4QjgzREFDN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40VUDRAAABYklEQVR42mL4// 8/Ax5sBsSrgPgzEP8D4r9A/BGIlwGxHi59+Axs/Q8Bv4F4KRBHAXE0EK+BWgACpaQYuh6qKRWPpUVQNXOJMbQRqtiGQNCAsC9UbTY+Q1mhiqqJMBCGJ0P14DQ0A10BERjmkECYGBMDKggB4hsMpIHfQPwMiMNhAuiGCgHxIwbSwXMgFsdl6FcgFiHDUAEg/ojL0L1ArE+GocpAvBPOQwt0QWigx5AQUblQPRz40ukqqCJBIgwUg6qdSkyOOgLE94FYF4+BplADLxGbTXX/I8BRIM4EYgsgtoSyD0PlVhKb92EZYC0QFwDxg/+Y4AlSYgdl0Th8htZCNaVhiUBLqGuF0eQmQfVkYTO0ECrpRGI2ZYAaCAKRyIbyQAWryDAQhtfAyg2YwHIgfk+BgTAMAu0gBj+Uk0gFQ1fCirgcqKEsVDDUC2QQKO+rA/FdIP7DQDm4CsSfAQIMAEPzgAr9ZhxBAAAAAElFTkSuQmCC)
    }
    .header .header_wrap .menu ul.list li.list-item span.line {
        display: none
    }
    .header .header_wrap .menu ul.list li.list-item a {
        font-size: 1.1rem;
        color: #fff;
        display: block;
        padding-left: 2.5rem;
        padding-right: 1.5rem
    }
    .header .header_wrap .menu ul.list li.list-item a span.icon {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVCNjVGOTdCMzE0MzExRTc5NDU3REE2MDdBQzk5NEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVCNjVGOTdDMzE0MzExRTc5NDU3REE2MDdBQzk5NEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUI2NUY5NzkzMTQzMTFFNzk0NTdEQTYwN0FDOTk0RTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUI2NUY5N0EzMTQzMTFFNzk0NTdEQTYwN0FDOTk0RTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz67agAzAAABqElEQVR42qyTzStEURjG73xgqBlMJGk2omSNmqIsyM5OKWaj5CsbC3b2ZCE7FsosZuUvoGxEShbKYpKFUrMRDTN2OJ4znlOnY+7cc2e89bt13vu873M+HSGE44MpkAM9tjUB+bGMFEiDZ9AOkuAK9IIWTVcEOfBWGlnOZFX8xgbHxxwPgC3xN1ZUrU3zTRYtGfk95hdBnGaDzO3YGqgm0y7/t/l/TMsVwK6NQYbFEx6TWKdumWMZR14GpxQmLc9onvo1blmqksE1xX1VXGH9IpQ1eKCoy2dzxTjrM6ZBBOR5QLEqmyuGaHKiHlo3nkMWvIBO53+iGeTBbRCfS75O2XwUTNbYfA608oUn5JJGtOXdg2yNWyQjrcZhuJxr7k8gUOMKPrgjpQgbPwUxox/Is4ppuVee3aOh/dZ7hC1ntQ+Gy+QPwEKlwqClQRs4BFGuIsrLkfAqtF1BgFtS1HIFmwnaruALRIxcHfO+DOT408XA1IZctELXmlvUBOJ8iSHtVnWABkPbSHStwzOqdzOQBzcLzlikrp3U3RjaCzBjaKXJO7hToh8BBgCLfTFeNUC03AAAAABJRU5ErkJggg===) no-repeat 50%;
        background-size: contain;
        margin: 1.8rem 2rem 0 0
    }
    .header .header_wrap .menu ul.list li.list-item.active span.line,
    .header .header_wrap .menu ul.list li.list-item .submenu {
        display: none!important;
    }
    /**/
    .header .header_wrap .menu ul.list li.list-item.active a span.icon {
        
    }
    .header .header_wrap .menu ul.list li.list-item.active:nth-child(2) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFQjQ2QzVEMzE0NDExRTdCNTBCQzY2QkJDRjUxQTI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFQjQ2QzVFMzE0NDExRTdCNTBCQzY2QkJDRjUxQTI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUVCNDZDNUIzMTQ0MTFFN0I1MEJDNjZCQkNGNTFBMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUVCNDZDNUMzMTQ0MTFFN0I1MEJDNjZCQkNGNTFBMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4PjE9CAAABcElEQVR42pzUTygEYRjH8XfGFrF3f8rBUoRCSZGLckCSExdnnIiTIxdHxUGSs5y4KOQk6yApSUhx0W75n1jbUvi+9bw1ve3sn3nqM73NzPubZt7nHcdJfKg0NYlehBFCEs9Yw573RscKGMQiYtjBCT5Rjm60S1gfXuyACZk8hlXlXxsYRg1uTYBO30cTzlX2WpAHhU3AA+awrHKvS0R1wAiDGTSq/KoZ2y6Hfhyq/OsM9zoggisVrGKurHMiYEBKB8RRHTCgwpVmaQ0wuRiVehXKGNygDdd5BKygxfTBPKZRlONk/bBjvfTeVo6iVPohlWFypyy73nBL9mY6wje6fCbXSqtPma61AwrxJhsl7rMHelBvToSsGxycygdKWtd+UYXdTP8DJTtyACX485wvkI7dxLtfgCM9/oQfuJ5rX6jDAcb9XsE88Q6jab7Bq1zL+AoNuJD/w6yc08u7JeOObAHmO6zjUVYlIt06ZN/4L8AAMKRlWgfbnLkAAAAASUVORK5CYII=)
    }
    .header .header_wrap .menu ul.list li.list-item.active:nth-child(3) a span.icon {
        /*background-image: url(static/img/pro01.63927f5.png)*/
    }
    .header .header_wrap .menu ul.list li.list-item.active:nth-child(4) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1RjlDQjk4MzE0NDExRTc5NTdDODdFNDIwNkM4NUZDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1RjlDQjk5MzE0NDExRTc5NTdDODdFNDIwNkM4NUZDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzVGOUNCOTYzMTQ0MTFFNzk1N0M4N0U0MjA2Qzg1RkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzVGOUNCOTczMTQ0MTFFNzk1N0M4N0U0MjA2Qzg1RkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6h4A7sAAABxUlEQVR42qTVOyiFYRzH8fdgcJckhoOIyMB0FtdBLiEWg2SyICmUDBaLkrvJLQbLGWTAxGBQyv06KAaDy+BW7ikc3yf/t14n8r6vpz49dd6nX8/T// 88x+F4eujXNM2FMO3vcY0hzOo/fAQGf1vgINDDvIltE4E5SEEren8K9MMrmrBiIrAFDejBGwa9F/jIhxjN3MjEnKwfQJv3Aj/N2nAgFmdIwrHP8+MVx5407tDK+EA2KhCJYUwQ2mg3cAYX6MQUknGILkJ97RzZLYxDHX0Bqtx3Vnf401D9+w6PnSMbR6ShsIl6lt1AFXCJDBxIk7/+J3BI5g5a5gmteLEbWIBiqXAW1S212tghSEUu0lGFMRzJbZkndJp5B0tmdjiOVZQhAvWolW/tqEMQytU6M4HduMc+ijDy7eoEBo+iRO0ON2aOrJ61BHkLw1Etffd11Z4f1f3uQzOcZotyg2hUIs3rW7iEZbHTcytVDsAp9gxB6si3TCfw19vGVy78X6NYKuuUIqmgfY4cx7yLfL1t/OWhdMl7Z3z7PFLlO8QjDxvYQiFqsIYoTOuBg9JfFb8EuiVwGaGy/lDWLMo1VH8N6+qHTwEGALeYdTItNitQAAAAAElFTkSuQmCC)
    }
    .header .header_wrap .menu ul.list li.list-item.active:nth-child(5) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwQkZBQzhBMzE0NDExRTdCOTBEOEI5M0ZDNDBCN0Q4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwQkZBQzhCMzE0NDExRTdCOTBEOEI5M0ZDNDBCN0Q4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDBCRkFDODgzMTQ0MTFFN0I5MEQ4QjkzRkM0MEI3RDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDBCRkFDODkzMTQ0MTFFN0I5MEQ4QjkzRkM0MEI3RDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5r6ka1AAABoklEQVR42sSWTytEURTA333eJJPkXyGamsRCTZmy5QMQH4AvwIYUUb6BoqyUheywlT8bO0MpsbNRVkYUMs2gJmb8bp10m3kz3pt5cerXuf/ePe/cc+89V6m3tIUMwSR0Qg7yVmVSA3ewngvXJ8wOhaFR9B58wKMMrlS+oANqYQRjh6ahJ/QL9FYyM5MVtdnvmUtUjL7QTxu0wKkVrJyAYzboShbCARt6Fc/2USnYcCTwKmBDWdH90ATjjsugaYhDm/zEDWzDORy4xMOSH70iJkvSHNXho94lY3bcDK2JvpWlHYaQGIqV8EDJEpm7z5SEU+LDFZiTsvYqIuWIl13ncg4b7F/W2Nw0VUmpCRZhQLa/lqToY1mmfEGM9CG/wLt5P4aWYRB6pH4Eu1LuLnP1JP16tFBmfNRjjIpvC+uPxM2jTVk2Tze4cY50jGb9GGqFdp+pQhtq9uvRWLW397/GyJYklQl43rqCetqWzBoP2NBZQUaI6RhNwRZcw70cPs9pQ3adWzpX9D2jH6BPyeNkAmagsYqHiSkpeaToA/4Jq98CDADGI2Z2ORkE+wAAAABJRU5ErkJggg===)
    }
    .header .header_wrap .menu ul.list li.list-item.active:nth-child(6) a span.icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNUU4Qjg5MzE0NDExRTdCNTM3ODgwMDJCRDhEMjJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDNUU4QjhBMzE0NDExRTdCNTM3ODgwMDJCRDhEMjJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEM1RThCODczMTQ0MTFFN0I1Mzc4ODAwMkJEOEQyMkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEM1RThCODgzMTQ0MTFFN0I1Mzc4ODAwMkJEOEQyMkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vT8PgAAABxElEQVR42qzVSyhEURzH8XsHG5RHYmFhYcHGY8OKlQ0Lyiua2CiRRyFJXkXRlBIJpSSPmpJMKQsLNmRho0gp2ShkIcmwQK7vv86t6Zo77sw49WnO3Mdv7jn3/M/o+turFqIVox8VSIABP/bgwfl3fOKvm/QQoZMYwhe2VJCOatSo/gCh079TCQ3CBwOtNudFn7pmxTAMLVCwJx3HGEpxrIVuldhFF0+8YDf8OHxgRA3fSZtXobpdaDuW1Hw5beaD1BDskwMuywV1uAojUCPok497NJjHrKGpuNXCbw/IsAt9Q1oEocl4sQs9QEEEodnYtwudQwyanKa53v3dqrsaqqKkeurV/D7/kZmORyzywjr/KlNZ9JmowoVNYBFO5TyB+U5qP082C9U/wSbO1PothBslMioCG5xsKGYB7OAIPciyXHMHmUtZ7DLsV8LXzZOxlotHMYE2LKtjs0hBrtr6rvEUcE+O/AAvLJHgReuT9mIGZTgMo6JkBXTQlQ3FzXevGSo7rXSGMRVmmZpLa5uPWtlYzFAvytUwtUhCVbBMj0fmNAmNaNGib7LGB6WimtWBjX8IXTPLVN7ejfovirZdyrv5EWAAjqitPln8+b8AAAAASUVORK5CYII=)
    }
    .header .header_wrap .menu .search {
        display: block;
        padding-left: 2.5rem;
        padding-right: 1.5rem;
        float: none;
        width: 100%;
        height: 3.3rem
    }
    .header .header_wrap .menu .search form {
        margin: 0;
        height: 100%;
        line-height: 3.3rem
    }
    .header .header_wrap .menu .search form .input-group {
        border: none;
        border-bottom: 1px solid #fff;
        border-radius: 0
    }
    .header .header_wrap .menu .search form .input-group a.btn {
        right: auto;
        left: 0;
        width: 1.2rem;
        height: 1.2rem;
        top: 1rem
    }
    .header .header_wrap .menu .search form .input-group a.btn button {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        background: none
    }
    .header .header_wrap .menu .search form .input-group input.input {
        margin-left: 2.2rem;
        font-size: .9rem;
        color: #fff;
        width: 80%
    }
    .header .header_wrap .menu .lang {
        float: none;
        position: absolute;
        bottom: 3rem;
        left: 2.5rem;
        margin-left: 0;
        display: block
    }
    .header .header_wrap .menu .lang a {
        float: none;
        display: inline-block;
        color: #fff;
        font-size: 1rem
    }
    .header .header_wrap .menu .lang span {
        float: none;
        height: 1rem;
        color: #fff;
        line-height: 1rem
    }
    .header .header_wrap .menu_icon {
        position: absolute;
        right: 1.5rem;
        top: 0;
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        margin-top: 1.75rem;
        transition: all .6s;
        z-index: 120
    }
    .header .header_wrap .menu_icon.active {
        right: 22rem
    }
    .header .header_wrap .menu_icon.active span.md {
        width: 80%
    }
    .header .header_wrap .menu_icon.active span.sm {
        width: 60%
    }
    .header .header_wrap .menu_icon span.line {
        display: block;
        width: 100%;
        float: right;
        height: .15rem;
        background: #000;
        margin-bottom: .52rem;
        transition: all .6s;
    }
}   
</style>

