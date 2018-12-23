<template>
  <div class="circle-list">
    <div class="circle-item">
      <h3 class="title">
        <nuxt-link to="/">博客开通了</nuxt-link>
      </h3>
      <div class="info cf">
        <div class="info-img">
          <nuxt-link to="/">
            <img src="~static/img/css3.jpg" alt>
          </nuxt-link>
        </div>
        <div class="info-des">
          帝国cms列表页图文展示，或者首页图文展示，
          如果使用全图和文字，编辑起来比较麻烦，因为每一篇文章，
          你都得花时间去配图，所以，可有使用以下方法来实现。
        </div>
      </div>

      <div class="circle-footer cf">
        <span class="time">
          <span class="fa fa-clock-o"></span> 2018-06-07
        </span>
        <span class="renshu">
          <span class="fa fa-thumbs-up"></span> 107
        </span>
        <nuxt-link to>阅读全文</nuxt-link>
      </div>
    </div>
    <div class="circle-item">
      <h3 class="title">
        <nuxt-link to="/">博客开通了</nuxt-link>
      </h3>
      <div class="info cf">
        <div class="info-img">
          <nuxt-link to="/">
            <img src="~static/img/css3.jpg" alt>
          </nuxt-link>
        </div>
        <div class="info-des">
          帝国cms列表页图文展示，或者首页图文展示，
          如果使用全图和文字，编辑起来比较麻烦，因为每一篇文章，
          你都得花时间去配图，所以，可有使用以下方法来实现。
        </div>
      </div>

      <div class="circle-footer cf">
        <span class="time">
          <span class="fa fa-clock-o"></span> 2018-06-07
        </span>
        <span class="renshu">
          <span class="fa fa-thumbs-up"></span> 107
        </span>
        <nuxt-link to>阅读全文</nuxt-link>
      </div>
    </div>
     <div class="circle-item">
      <h3 class="title">
        <nuxt-link to="/">博客开通了</nuxt-link>
      </h3>
      <div class="info cf">
        <div class="info-img">
          <nuxt-link to="/">
            <img src="~static/img/css3.jpg" alt>
          </nuxt-link>
        </div>
        <div class="info-des">
          帝国cms列表页图文展示，或者首页图文展示，
          如果使用全图和文字，编辑起来比较麻烦，因为每一篇文章，
          你都得花时间去配图，所以，可有使用以下方法来实现。
        </div>
      </div>

      <div class="circle-footer cf">
        <span class="time">
          <span class="fa fa-clock-o"></span> 2018-06-07
        </span>
        <span class="renshu">
          <span class="fa fa-thumbs-up"></span> 107
        </span>
        <nuxt-link to>阅读全文</nuxt-link>
      </div>
    </div>
     <div class="circle-item">
      <h3 class="title">
        <nuxt-link to="/">博客开通了</nuxt-link>
      </h3>
      <div class="info cf">
        <div class="info-img">
          <nuxt-link to="/">
            <img src="~static/img/css3.jpg" alt>
          </nuxt-link>
        </div>
        <div class="info-des">
          帝国cms列表页图文展示，或者首页图文展示，
          如果使用全图和文字，编辑起来比较麻烦，因为每一篇文章，
          你都得花时间去配图，所以，可有使用以下方法来实现。
        </div>
      </div>

      <div class="circle-footer cf">
        <span class="time">
          <span class="fa fa-clock-o"></span> 2018-06-07
        </span>
        <span class="renshu">
          <span class="fa fa-thumbs-up"></span> 107
        </span>
        <nuxt-link to>阅读全文</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.circle-list {
  width: 100%;
  .circle-item {
    width: 100%;
    padding: 0.6rem 1rem;
    box-shadow: -2px 1px 1px #140e02;
    .title {
      a {
        display: inline-block;
        background-size: 100% 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: "楷体";
        color: #000;
        width: 100%;
      }
    }
    .info {
      .info-img {
        float: left;
        width: 30%;
        height: 10rem;
        margin-right: 10px;
        overflow: hidden;
        a {
          display: block;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
      .info-des {
        font-size: 1.4rem;
        color: #888;
        line-height: 2rem;
      }
    }
    .circle-footer {
      margin-top: 1rem;
      .time {
        float: left;
        margin-right: 1rem;
        .fa {
          color: #5b3f3c;
        }
      }
      .renshu {
        float: left;
        .fa {
          color: rgba(255, 0, 0,.4);
        }
      }
      a {
        float: right;
        color: #000;
      }
    }
  }
}
</style>
