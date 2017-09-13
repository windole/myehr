<template>
  <div class="main-content">
    <keep-alive>
        <v-header :dark='dark' :plan='plan' :product='product'></v-header>
    </keep-alive>

    <keep-alive>
        <router-view  @isdark="getDark"></router-view>
    </keep-alive>

    <!-- <keep-alive>
        <v-top></v-top>
    </keep-alive> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header.vue';
  // import top from './components/top.vue';
  export default{
      data() {
          return {
              dark: false,
              plan: {},
              product: {},
              baseUrl: '',
              hotline: '',
              title: '',
              description: '',
              keywords: '',
              Newstitle: '',
              Newsdescription: '',
              Newskeywords: ''
          };
      },
      watch: {
          '$route': 'darkFalse'
      },
      components: {
          'vHeader': header
          // 'vTop': top
      },
      methods: {
          getDark() {
              this.dark = !this.dark;
          },
          font() {
              var ohtml = document.documentElement;
              var screenWidth = ohtml.clientWidth;
              if (screenWidth >= 768) {
                  ohtml.style.fontSize = 20 * screenWidth / 1920 + 'px';
              } else {
                  ohtml.style.fontSize = screenWidth * 20 / 640 + 'px';
              };
          }
      },
      mounted() {
          window.addEventListener('resize', this.font);
      },
      created() {
          this.font();
      }
  };
</script>

<style>
.main-content{width: 100%;height: 100vh;}
</style>