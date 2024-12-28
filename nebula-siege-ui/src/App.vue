<template>
  <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/sign-up">signup</router-link>|
    <router-link to="/login">login</router-link>| 
    <router-link to="/logout">logout</router-link>
  </nav>
  <router-view/>
</template>
<script>
import axios from 'axios'

export default {

  name:'App',
  beforeCreate() {
    this.$store.commit('initializeStore')

    const access = this.$store.state.access
    console.log("here")
    if(access){
      axios.defaults.headers.common['Authorization'] = 'JWT ' + access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
  mounted(){
    setInterval(() => {
      this.getAccess()
    }, 5000);
  },
  methods:{
    getAccess(){
      console.log("Start getaccess")
      console.log("Output refresh1" + this.$store.state.refresh)
      const accessData = {
        refresh: this.$store.state.refresh,
        access: this.$store.state.access

      }
      console.log("output accessdate")

      console.log(accessData)

      axios
          .post('auth/jwt/refresh/',accessData)
          .then(response => {
            const access = response.data.access

            localStorage.setItem("access", access)

            this.$store.commit('setAccess',access)

          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
