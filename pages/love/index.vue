<template>
  <div id="love" :style="{minHeight:minHeight+'px'}">
      <div class="love-wrap">
          <div class="left">
              <ul class="photos">
                <li>
                    <a href="" title='百米高喷'>
                      <img src="../../assets/imgs/love/love-3.9.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="" title='媳妇儿美照'>
                      <img src="../../assets/imgs/love/love-3.10.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="" title='媳妇儿美照'>
                      <img src="../../assets/imgs/love/love-3.10.1.jpg" alt="">
                    </a>
                </li>
              </ul>
          </div>
          <div class="right">
                <div class="hundred_wrap">
                    <div class="shengzi">
                          <span class="dingzi"></span>
                    </div>
                    <div class="gunzi">

                    </div>
                    <div class="neirong-wrap">
                      <div class="neirong">
                         <div class="title">
                              <h1>100件重要的小事情</h1>
                              <span>This life wants to do 100 important little things with you</span>
                         </div>
                         <ul class="tips">
                           <li v-for="(tipItem,index) in tipsArray" :key='index' >
                              <div class="tipItem" :class="tipItem.compute?'active':''" :style="{'background':tipItem.compute?`url(${tipItem.bg})`:'none','background-size':'100% 100%'}" @click='showTips(tipItem)'>
                                 <span class="text">
                                   {{tipItem.compute?'完成':tipItem.text}}
                                 </span>
                              </div>
                           </li>
                         </ul>
                      </div>
                    </div>
                    <div class="gunzi">

                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      minHeight: 0,
      tipsArray:[{
          compute:false,
          text:'一起给对方洗头发'
      },
      {
          compute:false,
          text:'一起包饺子'
      },
      {
          compute:false,
          text:'一起比赛吃瓜子'
      },
      {
          compute:false,
          text:'一起比赛吃西瓜'
      },
      {
          compute:false,
          text:'一起比赛吹气球'
      },
      {
          compute:false,
          text:'一起乘坐热气球'
      },
      {
          compute:false,
          text:'一起吃小龙虾'
      },
      {
          compute:false,
          text:'一起吃烛光晚餐'
      },
      {
          compute:false,
          text:'一起穿情侣装逛街'
      },
      {
          compute:false,
          text:'一起穿古装'
      },
      {
          compute:false,
          text:'一起打雪仗'
      },
      {
          bg:'img/love/dayouxi.png',
          compute:true,
          text:'一起打游戏'
      },
      {
          compute:false,
          text:'一起打桌球'
      },
      {
          bg:'img/love/fangfengzheng.png',
          compute:true,
          text:'一起放风筝'
      },
      {
          compute:false,
          text:'一起放孔明灯'
      },
      {
          compute:false,
          text:'一起放漂流瓶'
      },
      {
          bg:'img/love/guangchaoshi.png',
          compute:true,
          text:'一起逛超市'
      },
      {
          compute:false,
          text:'一起规划旅行'
      },
      {
          compute:false,
          text:'一起过春节'
      },
      {   compute:false,
          text:'一起过七夕'
      },
      {
          bg:'img/love/qingrenjie.png',
          compute:true,
          text:'一起过情人节'
      },
      {
          compute:false,
          text:'一起过圣诞节'
      },
      {
          compute:false,
          text:'一起过恋爱纪念日'
      },
      {
          compute:false,
          text:'一起合唱一首歌'
      },
      {
          compute:false,
          text:'一起互相写情书'
      },
      {
          compute:false,
          text:'一起划船'
      },
      {
          compute:false,
          text:'一起滑雪'
      },
      {
          compute:false,
          text:'一起介绍父母'
      },{
          compute:false,
          text:'一起看海豚'
      },
      {
          compute:false,
          text:'一起看日升日落'
      },
      {
          compute:false,
          text:'一起看午夜电影'
      },
      {
          compute:false,
          text:'一起看烟花'
      },
      {
          compute:false,
          text:'一起看演唱会'
      },
      {
          compute:false,
          text:'一起溜冰'
      },{
          compute:false,
          text:'一起溜冰'
      },
      {
          compute:false,
          text:'一起陪对方过生日'
      },
      {
          compute:false,
          text:'一起骑马'
      },
      {
          compute:false,
          text:'一起去菜市场买菜'
      },
      {
          compute:false,
          text:'一起亲吻10分钟'
      },
      {
          compute:false,
          text:'一起蹦极'
      },
      {
          compute:false,
          text:'一起吃火锅'
      },
      {
          compute:false,
          text:'一起去钓鱼'
      },{
          compute:false,
          text:'一起去动物园'
      },
      {
          compute:false,
          text:'一起去海底世界'
      },
      {
          compute:false,
          text:'一起去看海'
      },
      {
          compute:false,
          text:'一起去看熊猫'
      },
      {
          compute:false,
          text:'一起去爬长城'
      },
      {
          compute:false,
          text:'一起看对方学校'
      },{
          compute:false,
          text:'一起去野外烧烤'
      },
      {
          compute:false,
          text:'一起去夜市吃'
      },
      {
          compute:false,
          text:'一起去游乐园'
      },
      {
          compute:false,
          text:'一起送儿童节礼物'
      },
      {
          compute:false,
          text:'一起听雨滴声'
      },
      {
          compute:false,
          text:'一起完成健身目标'
      },
      {
          compute:false,
          text:'一起骑行'
      },
      {
          compute:false,
          text:'一起画对方'
      },{
          compute:false,
          text:'一起为对方系围巾'
      },
      {
          bg:'img/love/jixiedai.png',
          compute:true,
          text:'一起为对方系鞋带'
      },
      {
          compute:false,
          text:'一起午睡'
      },
      {
          compute:false,
          text:'一起洗澡'
      },
      {
          compute:false,
          text:'一起撑一把伞'
      },
      {
          compute:false,
          text:'一起学做一道新菜'
      },{
          compute:false,
          text:'一起沿着铁轨走'
      },
      {
          compute:false,
          text:'一起养一只宠物'
      },
      {
          compute:false,
          text:'一起一个耳机听歌'
      },
      {
          compute:false,
          text:'一起去河边写祝福'
      },
      {
          bg:'img/love/shuaya.png',
          compute:true,
          text:'一起刷牙'
      },
      {
          compute:false,
          text:'一起玩抓娃娃机'
      },
      {
          compute:false,
          text:'一起坐飞机'
      },
      {
          compute:false,
          text:'一起坐摩天轮'
      },{
          compute:false,
          text:'一起坐旋转木马'
      },
      {
          compute:false,
          text:'一起做蛋糕'
      },
      {
          compute:false,
          text:'一起坐缆车'
      },
      {
          compute:false,
          text:'一起打扑克'
      },
      {
          compute:false,
          text:'一起对视五分钟'
      },
      {
          compute:false,
          text:'一起玩捉迷藏'
      },{
          compute:false,
          text:'一起在树上挂祝福'
      },
      {
          compute:false,
          text:'一起追一部剧'
      },
      {
          compute:false,
          text:'一起登山'
      },
      {
          compute:false,
          text:'一起给对方起外号'
      },
      {
          compute:false,
          text:'一起教对方特长'
      },
      {
          compute:false,
          text:'一起设想未来小家'
      },
      {
          compute:false,
          text:'一起赏月'
      },
      {
          compute:false,
          text:'一起种一棵树'
      },
      {
          compute:false,
          text:'一起自驾游'
      },{
          compute:false,
          text:'一起跑马拉松'
      },
      {
          compute:false,
          text:'一起寺庙祈福'
      },
      {
          compute:false,
          text:'一起去做义工'
      },
      {
          compute:false,
          text:'一起去图书馆看书'
      },
      {
          compute:false,
          text:'一起进鬼屋'
      },
      {
          compute:false,
          text:'一起吃冰激凌'
      },{
          bg:'img/love/zaochan.png',
          compute:true,
          text:'一起做早餐'
      },
      {
          compute:false,
          text:'一起拥抱10分钟'
      },
      {
          compute:false,
          text:'一起喝醉'
      },
      {
          compute:false,
          text:'一起拍写真'
      },
      {
          compute:false,
          text:'一起为对方写诗'
      },
      {
          compute:false,
          text:'学10国语言我爱你'
      },

      {
          compute:false,
          text:'房间摆满两人合照'
      },
      {
          compute:false,
          text:'一起结婚吧'
      },
      {
          compute:false,
          text:'一起参加朋友婚礼'
      },
      {
          compute:false,
          text:'一起拍婚纱照'
      }
      ]
    };
  },
  mounted() {
    this.minHeight = window.screen.height;
  },
   methods: {
     showTips(item){
       var computeText=item.compute?'完成':'未完成'
       alert(item.text+':'+computeText)
     }
   },
  computed: {}
};
</script>

<style lang="less" scoped>
  #love{
    padding-top: 6rem;
    .love-wrap{
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        // margin: 1rem 0;
        justify-content: space-around;
        flex-wrap: wrap;
        .left{
           flex: 0 0 34rem;
          .photos{
            &:after{
              display: block;
              content: '';
              clear: both;
            }
            li{
              float: left;
              -webkit-box-reflect:below -88px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(60%, transparent) , to(rgba(0, 0, 0, .4)));
              &:nth-child(even) a {
              	-webkit-transform: rotate(8deg);
              	-moz-transform: rotate(8deg);
              	-ms-transform: rotate(8deg);
              	transform: rotate(8deg);
                position: relative;
                top: 8px;
              }
              &:nth-child(5n) a {
              	-webkit-transform: rotate(5deg);
              	-moz-transform: rotate(5deg);
              	-ms-transform: rotate(5deg);
              	transform: rotate(5deg);
              	position: relative;
              	right: 5px;
              }
              &:nth-child(8n) a {
              	position: relative;
              	top: 8px;
              	right: 5px;
              }
              &:nth-child(11n) a {
              	position: relative;
              	top: 3px;
              	right: -5px;
              }
              a{
                  background-color: #FFFFFF;
                	display: inline;/*转为行元素*/
                	float: left;/*左浮动*/
                	width: auto;
                	margin: 0 0 27px 30px;
                	padding: 10px 10px 15px;/*上内边距是 10px; 右、左内边距是10px;下内边距是 15px*/
                	text-decoration: none;
                	font-size: 17px;
                	color: #333333;
                	/*这里设置的box-shadow四个值意思是：水平位移0;垂直位移3px;模糊半径6px;阴影颜色rgba(0,0,0,0.25)*/
                	box-shadow: 0 3px 6px rgba(0,0,0,0.25) ;
                	-webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.25);
                	-moz-box-shadow: 0 3px 6px rgba(0,0,0,0.25);
                	-o-box-shadow: 0 3px 6px rgba(0,0,0,0.25);
                	-ms-box-shadow: 0 3px 6px rgba(0,0,0,0.25);
                   transform: scale(.8);
                  // &:after{
                  //   content: attr(title);
                  // }
                  &:hover{
                     transform: scale(1);
                     -webkit-transform: scale(1);
                     -moz-transform: scale(1);
                     -ms-transform: scale(1);
                     -o-transform: scale(1);
                     /*为了使放大效果更佳美观  所以我们也可以将鼠标悬停时的阴影（透明度这一块）加点改变*/
                     box-shadow: 0 3px 6px rgba(0,0,0,0.25) ;
                     -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.35);
                     -moz-box-shadow: 0 3px 6px rgba(0,0,0,.35);
                     -o-box-shadow: 0 3px 6px rgba(0,0,0,.35);
                     -ms-box-shadow: 0 3px 6px rgba(0,0,0,.35);
                     transition: all .1s linear;
                  }
                  img{
                    display: block;/*转为块元素*/
                    width: 120px;
                    margin-bottom: 12px;
                  }
              }
            }
          }
        }
        .right{
              flex: 0 0 40rem;
              .hundred_wrap{
                 width: 100%;
                .shengzi{
                  position: relative;
                  height: 8rem;
                   width: 100%;
                   top:1rem;
                   .dingzi{
                     width: 1rem;
                     height: 1rem;
                     // background: #000;
                     position: absolute;
                     border-radius: 50%;
                     left: 46%;
                     z-index: 2;
                     top: -0.7rem;
                     box-shadow:  0px 0px 8px #000 inset;
                   }
                  &:before{
                    position: absolute;
                    content: '';
                    width: 30%;
                    left: 22%;
                    background: rgb(240,240,240);
                    height: .4rem;
                    top: 3rem;
                    transform: rotate(-40deg);
                    box-shadow: 0px 2px 2px 1px #222;
                  }
                  &:after{
                    position: absolute;
                    content: '';
                    width: 30%;
                    left: 44%;
                    background: rgb(225,225,225);
                    height: .4rem;
                    top: 3rem;
                    transform: rotate(40deg);
                     // box-shadow: 0px 8px 4px #222;
                  }
                }
                .gunzi{
                  width: 100%;
                  height: 1rem;
                  background: url('~assets/imgs/love/mutouBg.jpg') repeat;
                  position: relative;
                }
                .neirong-wrap{
                  box-sizing: border-box;
                  width: 100%;
                  padding: .5rem;
                  background: rgb(125,159,161);
                  .neirong{
                    border: 2px solid #fff;
                    border-radius: .4rem;
                    .title{
                      text-align: center;
                      padding-top: 4px;
                      h1{
                        font-size: 3rem;
                        color: #fff;
                        margin-bottom: 3px;
                      }
                      span{
                        font-size: .5rem;
                        color: #fff;
                      }
                    }
                  }
                  .tips{
                    width: 100%;
                    box-sizing: border-box;
                    padding: 5px;
                    &:after{
                      display: block;
                      content: '';
                      clear: both;
                    }
                    li{
                      float: left;
                      width: 16.66666666%;
                      box-sizing: border-box;
                      padding: 4px;
                      &:nth-child(99){
                        width: 33.333333333%;
                        .tipItem{
                          font-size: 1.4rem;
                        }
                      }
                      .tipItem{
                        width: 100%;
                        border: 1px dashed rgb(82,118,114);
                        border-radius:4px ;
                        text-align: center;
                        height: 3rem;
                        font-size: 10px;
                        display: table;
                        .text{
                          vertical-align:middle;
                          display:table-cell;
                          color: white;
                          line-height: 14px;
                        }
                        &.active{
                          background: url('~assets/imgs/love/compute.jpg');
                          background-size:100% 100% ;
                           .text{
                             color: #ccc;
                           }
                        }
                      }
                    }

                  }
                }
              }
        }
    }
  }
  @media screen and (max-width: 960px) {
    #love{
      .love-wrap {
        .right{
              flex: 0 0 38rem;
              .hundred_wrap{
                .shengzi{
                  position: relative;
                  height: 7.2rem;
                  .dingzi{
                   top:-0.1rem
                  }
                }
              }

        }
      }
    }

  }
</style>
