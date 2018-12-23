<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>

    <div class="yinghua0 yinghua"></div>
    <div class="yinghua1 yinghua"></div>
    <div class="yinghua2 yinghua"></div>
  </div>
</template>
<script>
import MyFooter from "../components/footer.vue";
import MyHeader from "../components/header.vue";
export default {
  components: {
    MyFooter,
    MyHeader
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
body {
  background: #fdf5e8;
}
.yinghua {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("~assets/imgs/yinghua.png") no-repeat;
  background-size: 100% 100%;
 z-index: -1;
}
.yinghua0{
 animation: piaoluo 20s linear infinite;
}
.yinghua1{
 animation: piaoluo1 30s linear 10s infinite;
}
.yinghua2{
 animation: piaoluo2 40s linear 30s infinite;
}
@keyframes piaoluo {
  0% {
    left: 0;
    top: 0;
    transform: rotate(0deg);
  }
  100% {
    left: 100%;
    top: 100%;
    transform: rotate(360deg);
  }
}
@keyframes piaoluo1 {
  0% {
    left: 0;
    top: 0;
    transform: rotate(0deg);
  }
  100% {
    left: 80%;
    top: 100%;
    transform: rotate(360deg);
  }
}
@keyframes piaoluo2 {
  0% {
    left: 0;
    top: 0;
    transform: rotate(0deg);
  }
  100% {
    left: 60%;
    top: 100%;
    transform: rotate(360deg);
  }
}
</style>
