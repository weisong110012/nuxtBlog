<template>
  <header>
    <div class="logo">松松的个人博客</div>
    <transition name="navslide">
      <nav v-show="navshow">
        <div class="item">
          <nuxt-link to="/" class="index">首页</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/jishu" class="jishu">技术研究</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/manshenghuo" class="manshenghuo">慢生活</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/chating" class="liaotian">聊天室</nuxt-link>
        </div>
      </nav>
    </transition>
    <transition name="fade">
      <div class="login-wrap" v-show="navshow">
        <nuxt-link to="/login" class="login">登录</nuxt-link>
        <span>/</span>
        <nuxt-link to="/signup" class="signup">注册</nuxt-link>
      </div>
    </transition>
    <transition name="fade">
      <div class="search-wrap" v-show="navshow">
        <div>
          <input type="search" class="search-input">
          <span class="fa fa-search"></span>
        </div>
      </div>
    </transition>
    <div class="header-bar" @click="navshow=!navshow">
      <span class="fa fa-bars"></span>
    </div>
  </header>
</template>
<script>
export default {
  name: "myheader",
  data() {
    return {
      navshow: true
    };
  },
  beforeMount() {
    if (window.screen.width < 900) {
      this.navshow = false;
    }
  }
};
</script>

<style lang="less" scoped>
header {
  height: 6rem;
  background: #fdf5e8 url("~assets/imgs/header/head_bg.png") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 2px #dbc7a0;
  z-index: 100;
  .logo {
    text-indent: -999rem;
    background: url("~assets/imgs/header/logo.png") no-repeat;
    width: 27rem;
    height: 6rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .header-bar{
    display: none;
  }
  // 导航栏开始
  nav {
    display: flex;
    height: 6rem;
    align-items: center;
    justify-content: center;
    .item {
      flex: 0 0 10rem;
      &:hover a::after {
        width: 100%;
        background: url("~assets/imgs/header/fontActiveBg.png") no-repeat;
      }
      &:hover .index::before {
        background: url("~assets/imgs/header/indexFontActive.png") no-repeat;
      }
      &:hover .jishu::before {
        background: url("~assets/imgs/header/jishuFontActive.png") no-repeat;
      }
      &:hover .manshenghuo::before {
        background: url("~assets/imgs/header/manshenghuoFontActive.png")
          no-repeat;
      }
      &:hover .liaotian::before {
        background: url("~assets/imgs/header/liaotianFontActive.png") no-repeat;
      }
      a {
        display: block;
        text-align: center;
        line-height: 3rem;
        text-indent: -999rem;
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 2;
          transition: all 0.5s;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 0;
          z-index: 1;
          transition: all 0.5s ease-out;
        }
        &.index::before {
          background: url("~assets/imgs/header/indexFont.png") no-repeat;
        }
        &.manshenghuo::before {
          background: url("~assets/imgs/header/manshenghuoFont.png") no-repeat;
        }
        &.jishu::before {
          background: url("~assets/imgs/header/jishuFont.png") no-repeat;
        }
        &.liaotian::before {
          background: url("~assets/imgs/header/liaotianFont.png") no-repeat;
        }
        &.index.nuxt-link-exact-active::before {
          background: url("~assets/imgs/header/indexFontActive.png") no-repeat;
        }
        &.manshenghuo.nuxt-link-exact-active::before {
          background: url("~assets/imgs/header/manshenghuoFontActive.png")
            no-repeat;
        }
        &.jishu.nuxt-link-exact-active::before {
          background: url("~assets/imgs/header/jishuFontActive.png") no-repeat;
        }
        &.liaotian.nuxt-link-exact-active::before {
          background: url("~assets/imgs/header/liaotianFontActive.png")
            no-repeat;
        }
        &.nuxt-link-exact-active::after {
          width: 100%;
          background: url("~assets/imgs/header/fontActiveBg.png") no-repeat;
        }
      }
    }
  }
  // 导航栏结束
  // 登录注册开始
  .login-wrap {
    position: absolute;
    right: 2%;
    top: 1rem;
    // line-height: 6rem;
    font-size: 1.3rem;
    font-family: "宋体";
    a {
      font-weight: bold;
      color: #000;
      transition: all 0.3s;
      &:hover {
        color: #f32728;
      }
    }
  }
  // 登录注册结束
  // 搜索开始
  .search-wrap {
    position: absolute;
    right: 1%;
    bottom: 0.5rem;
    border: 2px solid #000;
    height: 2.5rem;
    width: 20rem;
    .search-input {
      background: rgba(0, 0, 0, 0);
      color: #000;
      outline: none;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: calc(100% - 3.2rem);
      text-indent: 1rem;
    }
    .fa-search {
      position: absolute;
      right: 0;
      color: white;
      top: 0;
      bottom: 0;
      line-height: 2.2rem;
      text-align: center;
      width: 3rem;
      cursor: pointer;
      font-size: 1.4rem;
      background: rgba(0, 0, 0, 1);
      &:hover {
        background: rgba(0, 0, 0, 1);
      }
    }
  }
  // 搜索结束
}
// 低于960px
@media screen and (max-width: 960px) {
  header {
    height: 6rem;
    .logo {
      margin: 0 auto;
      width: 270px;
      left: 50%;
      margin-left: -135px;
    }
    .header-bar {
      display: block;
      position: absolute;
      left: 1rem;
      font-size: 2rem;
      line-height: 6rem;
    }
    .header-search {
      position: absolute;
      right: 1rem;
      font-size: 2rem;
      line-height: 6rem;
    }
    nav {
      height: auto;
      position: fixed;
      background: #fdf5e8;
      box-shadow: 1px 0px 2px #dbc7a0;
      display: block;
      width: 10rem;
      top: 6rem;
      height: 100%;
      width: 50%;
      transition: left 0.5s;
      .item {
        width: 10rem;
        margin: 2rem auto;
      }
    }
    .navslide-enter,
    .navslide-leave-to {
      left: -50%;
    }
    .navslide-enter-to,
    .navslide-leave {
      left: 0;
    }
    .fade-enter-active {
      transition: opacity 2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
      opacity: 0;
    }
    .search-wrap {
      position: fixed;
      left: 0rem;
      right: auto;
      top: auto;
      bottom: 10rem;
      width: 50%;
    }
    .login-wrap {
      position: fixed;
      left: 25%;
      margin-left: -55px;
      right: auto;
      top: auto;
      bottom: 2rem;
      height: 2rem;
      font-size: 1.8rem;
    }
  }
}
</style>
