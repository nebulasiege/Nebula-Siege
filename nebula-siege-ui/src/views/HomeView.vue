<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      user_data:''
    }
  },
  mounted() {
    this.getMe()
  },
  methods: {
    getMe(){
      Axios
          .get("/auth/users/me")
          .then(response => {
            console.log(response)
            this.user_data = response.data.username
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
