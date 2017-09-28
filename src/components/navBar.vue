<template>
    <div class="fp-nav right">
        <ul>
            <li v-for="(n, index) in pageNum" @click="selectmove(index)"><a href="javascript:;" :class="{active: currentNavIndex === index}"><span></span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'swiper-slide',
        props: {
            pageNum: {
                type: Number,
                default: 0
            },
            currentNavIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {
            selectmove(index) {
                this.$emit('selectMove', index);
            }
        }
    };
</script>
<style type="text/css">
/*右侧点击*/
.fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translate3d(0,0,0)}
.fp-nav.right{right:17px}
.fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}
.fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}
.fp-slidesNav ul li{display:inline-block}
.fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}
.fp-nav ul li a.active span,.fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;background-color:rgba(0,0,0,.9)}
.fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:12px!important;width:12px!important;border:0;left:50%;top:50%;margin:-6px 0 0 -6px;transition:all .1s ease-in-out;background-color:rgba(0,0,0,.3)}
.fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:12px;height:12px}

</style>
