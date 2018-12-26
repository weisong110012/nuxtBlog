<template lang="html">
  <transition name="slide-left">
    <div class="chatting" style='padding-top:6rem;'>
      <!-- 聊天界面头部 -->
      <div class="chatting-header">
        <div class="chatting-title" style="text-align: center;width: 100%;">
          <h2 ><i class="icon-group"></i>博客聊天室</h2>
        </div>
      </div>

      <!-- 聊天内容区域 -->
      <div ref="chattingContent" class="chatting-content" :style="{ height:routerHeight+ 'px' }">

        <div v-for="item of msgs">
          <div v-if="item.self" class="chatting-item self cf">
            <div class="msg-date">
              {{ item.date }}
            </div>
            <div class="msg-from">
              <span class="msg-author">{{ item.from}}</span>
              <img src="https://songsongwei.top/static/img/touxiang.7b48125.jpeg" alt="">
            </div>
            <div class="msg-content">{{ item.content }}</div>
          </div>

          <div v-else class="chatting-item other cf">
            <div class="msg-date">
              {{ item.date }}
            </div>
            <div class="msg-from">
              <img src="https://songsongwei.top/static/img/touxiang.7b48125.jpeg" alt="">
              <span class="msg-author">{{ item.from }}</span>
            </div>
            <div class="msg-content">{{ item.content }}</div>
          </div>

        </div>
      </div>

      <!-- 输入区域 -->
      <div class="chatting-input">
        <textarea @keyup.enter="send" @input="newLine" ref="textarea" v-model.trim="inputContent" placeholder="畅所欲言吧。。。反正没存数据库"></textarea>
        <button @click="send">发送</button>
      </div>
    </div>
  </transition>

</template>

<script>
  import socket from "../../plugins/socket.io";
import status from "../../assets/common/status.js";
import { formatDate } from "../../assets/common/date.js";
export default {
  name: 'chatting',
  data() {
    return {
      msgs: [],
      inputContent: '',
      oContent: {},
      oTextarea: {},
      emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳'],
      isShowEmoji: false,
      isRedAI: false,
      routerHeight:null
    }
  },
  watch: {
    msgs(val) {
      localStorage.msgs_group = JSON.stringify(val);
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    avatarUrl() {
      return this.$store.state.avatarUrl;
    }
  },
  mounted() {

      this.routerHeight=(document.documentElement.clientHeight)-150;
    console.log(this.routerHeight)
    setInterval(() => this.isRedAI = !this.isRedAI, 2500);

    this.oContent = document.querySelector('.chatting-content');
    this.oContent.scrollTop = this.oContent.scrollHeight;
    this.oTextarea = document.querySelector('textarea');

    socket.emit('online',decodeURIComponent( status.get('userName')));

    socket.on('online', (name) => {
      let oOnline = document.createElement('div');
      oOnline.className = 'online';
      oOnline.innerText = name + '上线了';
      oOnline.style='text-align: center;color: #ff7223;font-size:12px;';
      this.oContent.appendChild(oOnline);
      this.oContent.scrollTop = this.oContent.scrollHeight;


    });

    // 接收群聊消息
    socket.on('receiveGroupMsg', data => {
      this.msgs.push(data);
      setTimeout(() => {
        this.oContent.scrollTop = this.oContent.scrollHeight;
      }, 0);
    });

    this.oContent.scrollTop = this.oContent.scrollHeight;
  },
  methods: {
    send() {
      this.isShowEmoji = false;
      if (this.inputContent === '') {
        return;
      } else {
        socket.emit('sendGroupMsg', {
          date: `${formatDate(new Date(), 'yyyy-MM-dd hh:mm')}`,
          loc: '',
          from: `游客`,
          content: this.inputContent,
          avatarUrl: this.avatarUrl
        });
        this.msgs.push({
          date:  `${formatDate(new Date(), 'yyyy-MM-dd hh:mm')}`,
          loc: '',
          from: `游客`,
          content: this.inputContent,
          self: true,
          avatarUrl: this.avatarUrl
        });
        this.inputContent = '';
        setTimeout(() => this.oContent.scrollTop = this.oContent.scrollHeight, 0);
      };
    },


    insertText(str) {
      str = str + ` `;
      const oTextarea = this.$refs.textarea;

      if (document.selection) {

        let sel = document.selection.createRange();

        sel.text = str;

      } else if (typeof oTextarea.selectionStart === 'number' && typeof oTextarea.selectionEnd ==='number') {

        let startPos = oTextarea.selectionStart;
        let endPos = oTextarea.selectionEnd;
        let cursorPos = startPos;
        let tempVal = oTextarea.value;
        this.inputContent = tempVal.substring(0, startPos) + str + tempVal.substring(startPos, tempVal.length)
        cursorPos += str.length;
        oTextarea.selectionStart = oTextarea.selectionEnd = cursorPos;

      } else {
        oTextarea.value += str;
      }
      this.newLine();
    },

    newLine() {
      setTimeout(() => this.oTextarea.scrollTop = this.oTextarea.scrollHeight, 0);
    }
  }
}
</script>

<style lang="less" scoped>
  @blue: #2196f3;
  .chatting {
    background: #fafafa;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    border-radius: 8px 8px 0px 0px;
    .chatting-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 100%;
      background-color: @blue;
      color: white;
      border-radius: 8px 8px 0px 0px;
      .chatting-back {
        width: 32px;
        height: 32px;
        .icon-back {
          background-size: contain;
        }
        .icon-back2 {
          background-size: contain;
        }
      }
      .chatting-title {
        i.icon-group {
          vertical-align: top;
          width: 30px;
          height: 30px;
          background-size: contain;
          margin-right: 3px;
        }
      }

      .chatting-menu {
        width: 30px;
        height: 30px;
        i.icon-menu {
          background-size: contain;
        }
      }
    }

    .chatting-content {
      flex: 1;
      width: 100%;
      background-color: rgba(0, 0, 0, .1);
      overflow: auto;
      padding: 10px 0px;
      .chatting-item {
        width: 100%;
        .msg-date {
          text-align: center;
          color: gray;
          font-size: 80%;
        }
        .msg-from {
          display: flex;
          align-items: center;
          span.loc {
            color: gray;
            font-size: 60%;
            margin-right: 5px;
          }
          .msg-author {
            font-size: 1.2rem;
          }
          img {
            width: 30px;
            height: 30px;
            border-radius: 15px;
          }
        }
        .msg-content {
          margin-top: 5px;
          background-color: white;
          width: 200px;
          padding: 6px 10px;
          border-radius: 10px;
        }
      }

      .chatting-item + .chatting-item {
        margin-top: 10px;
      }
      .self {
        .msg-from {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          img {
            margin-left: 10px;
          }
        }

        .msg-content {
          float: right;
          word-wrap: break-word;
          word-break: break-all;
          margin-right: 10px;
        }


      }

      .other {
        .msg-from {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span.loc {
            color: gray;
            font-size: 60%;
            margin-right: 5px;
          }
          img {
            margin-right: 10px;
          }
        }

        .msg-content {
          float: left;
          margin-left: 10px;
          word-wrap: break-word;
          word-break: break-all;
        }

      }




    }

    .chatting-input {
      position: relative;
      display: flex;
      height: 40px;
      width: 100%;
      .emoji-display {
        position: absolute;
        width: 100%;
        height: 210px;
        background-color: white;
        top: -210px;
        left: 0;
          overflow-y: auto;
        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            padding: 2px 3px;
            font-size: 2.2rem;
          }
        }
      }

      textarea {
        flex: 1;
        resize: none;
        font-size: 1.4rem;
        outline: none;
        height: 30px;
        border: none;
        text-indent: 10px;
        padding: 5px 0px;
      }
      button {
        width: 60px;
        height: 100%;
        background-color: @blue;
        color: white;
        font-size: 16px;
        outline: none;
        border-radius: 4px;
        border: none;
      }
    }
  }
</style>
