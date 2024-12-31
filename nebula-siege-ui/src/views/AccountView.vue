<template>
    <div class="about">
      <h1>You are logged in</h1>
      <button @click="signout()">Signout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
  name: 'AccountView',
  beforeCreate() {
    console.log("BeforeCreate AccoutView")

    this.$store.commit('initializeStore')

    const access = this.$store.state.access
    console.log("Access BeforeCreate:" + access)

    if(access){
      axios.defaults.headers.common['Authorization'] = 'JWT ' + access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
  mounted(){
    console.log("BeforeCreate mount")

    this.$store.commit('initializeStore')
    const access = this.$store.state.access
    const intervalId = localStorage.getItem('intervalId');
    console.log("intervalId" + intervalId)
    console.log(access)
    if(access !== '' && intervalId !== ''){
        const intervalHandler = setInterval(() => {
          this.getAccess()
          }, 5000);  
        localStorage.setItem('intervalId', intervalHandler);
    }
  },
  methods: {
    signout(){
        this.$store.commit('initializeStore')

    let access = this.$store.state.access
    console.log(access)
        this.$store.commit('clear')

     access = this.$store.state.access
     console.log(localStorage.getItem('intervalId'))
     clearInterval(localStorage.getItem('intervalId'))
     console.log(access)
     localStorage.clear();
     this.$router.push({ path: '/' })


    }, getAccess(event){
      console.log("Start getaccess")
      const accessData = {
        refresh: this.$store.state.refresh,
        access: this.$store.state.access

      }
      console.log("output accessdate")

      console.log(accessData)
      console.log(accessData.access)
      console.log(event)
      console.log(accessData.access === '')

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
