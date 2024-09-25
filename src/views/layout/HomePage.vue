<template>
  <div class="home">
    <LeftMenu></LeftMenu>
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <sliderNav></sliderNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from "@/views/layout/components/menu.vue";
import sliderNav from "@/views/layout/components/sliderNav.vue";
export default {
  name: 'HomeView',
  components: {
    LeftMenu,
    sliderNav,
  },
  data() {
    return {
    }
  },
  methods: {

  },
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
