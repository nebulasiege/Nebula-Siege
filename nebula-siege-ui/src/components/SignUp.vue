<template>
   <div class="about">
     <h1>SignUp</h1>
     <form v-on:submit.prevent="submitForm">
       <label>Username:</label>
       <input type="email" name="username" v-model="username"> <br><br>
       <label>Password:</label>
       <input type="password" name="password" v-model="password"> <br><br>
       <button type="submit">Signup</button>
     </form>
   </div>
 </template>
 <script>
 import axios from 'axios'
 
 export default {
   name: 'SignUp',
   data(){
     return{
       username:'',
       password:''
     }
   },
   methods:{
     submitForm(){
       const formData = {
         username:this.username,
         password: this.password
       }
       console.log(formData)
       axios
           .post('/auth/users/',formData)
           .then(response => {
             console.log(response)
//             this.$route.push('/Login')
           })
           .catch(error => {
             console.log(error)
           })
     }
   }
 }
 </script>
 