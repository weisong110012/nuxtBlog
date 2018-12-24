<template>
  <div id="main" :style="{minHeight:minHeight+'px'}">
    <div class="content-wrap">
      <div class="content-top"></div>
      <div class="content">
        <article-list :timeart="manshenghuo" :timeartType="1" :songsong="songsong"/>
      </div>
      <div class="content-end"></div>
    </div>
  </div>
</template>

<script>
import articleList from "~/components/articleList.vue";
export default {
  async asyncData({ app }) {
    let manshenghuo = await app.$axios.post("/api/manshenghuo", { moreNum: 0 });
    return {
      manshenghuo: manshenghuo.data,
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
    }
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
      }
    }
  }
}
</style>
