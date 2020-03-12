<template>
  <div id="main" :style="{minHeight:minHeight+'px'}">
    <div class="content-wrap">
      <div class="person-wrap">
        <div class="person-des">
          <div class="gs-wrap">
            <p class="dfb dfb1">莫听穿林打叶声，何妨吟啸且徐行。</p>
            <p class="dfb dfb2">竹杖芒鞋轻胜马，谁怕？ 一蓑烟雨任平生。</p>
            <p class="dfb dfb3">定风波 苏轼</p>
          </div>
        </div>
        <div class="person-card">
          <div class="lianxi">
            <a
              href="tencent://message/?uin=1721705261&Site=Sambow&Menu=yes"
              target="_blank"
              title="qq"
            >
              <span class="fa fa-qq"></span>
            </a>
            <a
              href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=1721705261@qq.com"
              target="_blank"
              title="qq邮箱"
            >
              <span class="fa fa-envelope-o"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="content-top"></div>
      <div class="content">
        <div class="content-left">
          <article-list :timeart="homeData.timeart" :timeartType="2" :songsong="songsong"/>
        </div>
        <div class="content-right">
          <div class="tjwz">
            <h3 class="tjwz-title">推荐文章</h3>
            <ul class="text-lists">
              <li v-for="(item,index) in homeData.hotart" :key="item.artid">
                <span class="Num">{{index.toString()[1]?index.toString():0+(index+1).toString()}}</span>
                <nuxt-link :to="{name:'article-artid',params:{artid:item.artid}}" class="title">{{item.title}}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="twtj">
            <h3 class="twtj-title">图文推荐</h3>
            <ul class="Imgtext-lists">
              <li v-for="(item,index) in homeData.hotart" :key="item.artid" v-if="index<3">
                <nuxt-link :to="{name:'article-artid',params:{artid:item.artid}}" class="title">
                  <div class="img">
                    <img v-lazy="songsong+item.imgurl" alt>
                  </div>
                  <div class="title">{{item.title}}</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content-end"></div>
    </div>
  </div>
</template>

<script>
import articleList from "../components/articleList.vue";
export default {
  async asyncData({ app }) {
    let homeData = await app.$axios.get("/api/home");
    return {
      homeData: homeData.data,
      songsong: "https://songsongwei.top"
    };
  },
  components: {
    articleList
  },
  data() {
    return {
      minHeight: 0
    };
  },
  mounted() {
    this.minHeight = window.screen.height;
  },
  computed: {}
};
</script>

<style lang="less" scoped>
#main {
  background: url("~assets/imgs/bg.png") no-repeat;
  background-attachment: fixed;
  background-position: 0 6rem;
  padding-top: 6rem;
  &::after {
    content: "";
    position: fixed;
    bottom: 0;
    right: 0;
    width: 28rem;
    height: 18rem;
    background: url("~assets/imgs/right-bg.png") no-repeat;
    z-index: -1;
  }
  .content-wrap {
    max-width: 1000px;
    margin: 0 auto;
    .person-wrap {
      display: flex;
      margin: 1rem 0;
      justify-content: space-around;
      flex-wrap: wrap;
      .person-des {
        flex: 0 0 51rem;
        background: url("~assets/imgs/bg.jpg") no-repeat;
        background-size: 100% 100%;
        height: 20rem;
        border-radius: 2px;
        box-shadow: 6px 6px 6px #bdbdbd;
        .gs-wrap {
          padding-top: 10%;
          .dfb {
            width: 31rem;
            height: 3rem;
            margin: 0 auto;
            text-indent: -999rem;
            background-size: 100% 100%;
          }
          .dfb1 {
            background: url("~assets/imgs/content/dfb1.png") no-repeat;
            animation: dfb 1s;
          }
          .dfb2 {
            background: url("~assets/imgs/content/dfb2.png") no-repeat;
            animation: dfb1 2s;
          }
          .dfb3 {
            background: url("~assets/imgs/content/dfb3.png") no-repeat;
            animation: dfb2 3s;
          }
        }
      }
      .person-card {
        flex: 0 0 27rem;
        background: url("~assets/imgs/content/person-card.png") no-repeat;
        height: 20rem;
        position: relative;
        .lianxi {
          position: absolute;
          bottom: 11%;
          right: 11%;
          a {
            font-size: 2.5rem;
            margin-right: 3rem;
            color: #000;
          }
        }
      }
    }
    .content-top {
      height: 1rem;
      width: 100%;
      background: url("~assets/imgs/content/maintopbg.jpg") no-repeat;
      background-size: 100% 100%;
      margin-top: 1rem;
    }
    .content-end {
      height: 1rem;
      width: 100%;
      background: url("~assets/imgs/content/mainendbg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .content {
      width: 97%;
      margin: 0 auto;
      box-shadow: 0px 0px 2px #bdbdbd;
      background: rgb(229, 229, 229, 0.6);
      height: auto;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .content-left {
        flex: 0 0 63%;
      }
      .content-right {
        flex: 0 0 30%;
        .tjwz {
          width: 100%;
          .tjwz-title {
            background: url("~assets/imgs/content/rtitbg.png") no-repeat;
            background-size: 100% 100%;
            text-indent: -999rem;
            position: relative;
            height: 44px;
            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              left: 0;
              bottom: 0;
              height: 44px;
              background: url("~assets/imgs/content/tjwz.png") no-repeat;
            }
          }
          .text-lists li {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #a6a6a6;
            margin-top: 10px;
            margin-left: 15px;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
              margin-left: 10px;
              .Num {
                color: #000;
                font-size: 19px;
              }
            }
            &:nth-child(1) {
              .Num {
                color: #f8490b;
              }
            }
            .Num {
              font-size: 15px;
              color: #3f3e3c;
            }
            .title {
              cursor: pointer;
              font-size: 13px;
              transition: all 0.5s;
              display: inline-block;
              color: #000;
              &:hover {
                transform: translate(8px);
              }
            }
          }
        }
        .twtj {
          width: 100%;
          margin: 1rem 0;
          .twtj-title {
            background: url("~assets/imgs/content/rtitbg.png") no-repeat;
            background-size: 100% 100%;
            text-indent: -999rem;
            position: relative;
            height: 44px;
            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              left: 0;
              bottom: 0;
              height: 44px;
              background: url("~assets/imgs/content/twtj.png") no-repeat;
            }
          }
          .Imgtext-lists {
            li {
              color: #000;
              margin-top: 16px;
              margin-left: 10px;
              a {
                display: block;
                cursor: pointer;
                &:after {
                  content: "";
                  display: block;
                  clear: both;
                }
                .img {
                  float: left;
                  width: 80px;
                  height: 60px;
                  margin-right: 10px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .title {
                  color: #444;
                  font-size: 13px;
                  line-height: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes dfb {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes dfb1 {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes dfb2 {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}


@media screen and (max-width: 960px) {
  #main {
    padding-top: 6rem;
    background-position: 0 8rem;
    background: none;
    &::after {
      background: none;
    }
    .content-wrap {
      .person-wrap {
        .person-des {
          flex: 0 0 100%;
        }
        .person-card {
          display: none;
        }
      }
      .content {
        .content-left {
          flex: 0 0 100%;
        }
        .content-right {
          flex: 0 0 100%;
        }
      }
    }
  }
}
</style>
