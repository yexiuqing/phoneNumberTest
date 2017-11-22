<template>
  <div class="app">
    <input type="text"  class="tel" v-model="phone" placeholder="请输入手机号" :disabled="inputDisabled" >
    <div class="btn" @click="send" >{{this.click ? second : "发送验证码" }}</div>
    <!-- <div class="btn" v-else>{{second}}s</div>  -->
    <input type="text" class="num" placeholder="请输入验证码">
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "app",
  data() {
    return {
      phone: "",
      second: 60,
      click: false,
      resData: "",
      inputDisabled:false
    };
    
  },
  methods: {
    send() {
      // 正则验证手机号
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) {
        alert("手机号不对");
      } else {
        // 手机号格式正确
        this.click = true;
                
        
        // 发请求
        Axios.get("static/data.json").then(res => {
          this.resData = res.data;
        });
        var timer = setInterval(() => {
          this.second--;
          if (this.second === 0) {
            // 时间到
            clearInterval(timer);
            this.click = false;
            this.second = 60;
            this.inputDisabled = false;

          }
        }, 1000);
      }
    }
  },
  watch: {
    resData(newVal) {
      if (newVal) {
        let i = 0;
        for (i = 0; i < newVal.length; i++) {
          if (newVal[i].phone == this.phone) {
            break;
          }
        }
        if (i == newVal.length) {
          // 手机号不存在
          alert("手机号不存在");
          this.click = false;
          
        } else {
           this.inputDisabled = true; 
          // 发送验证码
          alert("发送验证码");
        }
      }
    }
  }
};
</script>
<style>
.app {
  position: relative;
  width: 400px;
  height: 500px;
  border: 3px solid #eee;
  margin: 0 auto;
}
.tel {
  margin: 20px 20px;
  float: left;
  height: 28px;
}
.btn {
  float: left;
  width: 95px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 20px 30px 20px 0;
  background: #eee;
}
.num {
  float: left;
    position: absolute;
    left: 20px;
    top: 75px;
    height: 28px;
}
</style>
