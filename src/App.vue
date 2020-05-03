<template>
  <div id="app">
    <el-backtop>
      <div id="backtop">
        Top
      </div>
    </el-backtop>
    <!-- <router-link to="/"></router-link>
    <router-view></router-view> -->
    <!-- <router-link to="/Carousel"></router-link> -->
    <Login></Login>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Login from "./views/login/Login.vue";

export default {
  name: "app",
  data() {
    return {};
  },

  methods: {
    // 参数就是子组件传递出来的数据
  },

  // 引入子组件
  components: {
    Carousel,
    Login,
  },
};
</script>
<style lang="scss" scoped>
#app {
  background-color: red;
  #backtop {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
  }
  #backtop:hover{
    color: white;
    background-color: gray;
  }
}
</style>
