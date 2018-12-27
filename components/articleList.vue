<template>
  <div class="circle-list">
    <div class="circle-item" v-for="(item,index) in timeart" :key="index">
      <h3 class="title">
        <nuxt-link :to="{name:'article-artid',params:{artid:item.artid}}">{{item.title}}</nuxt-link>
      </h3>
      <div class="info cf">
        <div class="info-img">
          <nuxt-link to="/">
            <img v-lazy="songsong+item.imgurl" alt>
          </nuxt-link>
        </div>
        <div class="info-des">{{item.des}}</div>
      </div>

      <div class="circle-footer cf">
        <span class="time">
          <span class="fa fa-clock-o"></span>
          {{item.time-0 | formatDate}}
        </span>
        <span class="renshu">
          <span class="fa fa-thumbs-up"></span>
          {{item.zhan}}
        </span>
        <nuxt-link to>阅读全文</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../assets/common/date.js";
export default {
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  props: {
    timeart: {
      type: Array
    },
    timeartType: {
      type: Number
    },
    songsong: {
      type: String
    }
  }
};
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
          color: rgba(255, 0, 0, 0.4);
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
