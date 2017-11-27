<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <v-phone :time="-4" :descript="msg" :hasbtn="true"></v-phone>

  </div>
</template>

<script>
// export default {
//   name: 'app'
// }
import phone from './components/phoneTest' 
export default {
  name: 'app',
  data() {
    return {
      msg:'请等待'
    };
  },
  components:{
    'v-phone':phone
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
