<template>
  <div id="toTop" class="toTop" @click="toTop()" v-show="showTop">
    <span class="toTop"></span>
  </div>
</template>

<script>
export default {
    name: 'toTop',
    data () {
        return {
            scrollTop: 0,
            showTop: false
        };
    },
    methods: {
        toTop() {
            var timer = null;
            clearInterval(timer);
            timer = setInterval(function () {
                this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var now = this.scrollTop;
                var speed = (0 - now) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (this.scrollTop === 0) {
                    clearInterval(timer);
                }
                document.documentElement.scrollTop = this.scrollTop + speed;
                document.body.scrollTop = this.scrollTop + speed;
            }, 30);
        },
        showTopBtn() {
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var pH = document.documentElement.clientHeight;
            this.scrollTop >= pH ? this.showTop = true : this.showTop = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showTopBtn);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span.toTop{
    position: fixed;
    display: block;
    width: 50px;
    height: 50px;
    background: url('./../../static/img/toTop.png') no-repeat center center;
    background-size: contain;
    bottom:100px;
    right: 40px;
    z-index: 101;
}
@media screen and (max-width: 767px){
    span.toTop{
        right: 1.5rem;
        width: 3.5rem;
        height: 3.5rem;
    }
}
</style>
