<template>
  <div class="home">
    <h1>Nebula Seige</h1>
    <SignUp v-if="isUserNew"></SignUp>
    <LogIn v-else></LogIn>
    <p v-if="isUserNew">Don't have an account <a href="#" id="remove" @click="toggleNewUserStatus(false)">signup</a></p>
    <p v-else>Have an account <a href="#" id="remove" @click="toggleNewUserStatus(true)">login</a></p>

    <DataTable :value="servers" tableStyle="min-width: 50rem">
    <Column field="server" header="Server"></Column>
    <Column field="code" header="Code"></Column>
    <Column field="status" header="Status"></Column>
    <Column field="started" header="Started"></Column>
    <Column field="players" header="Players"></Column>
    <Column field="online" header="Online"></Column>
    <Column field="bases" header="Bases"></Column>
    <Column field="planets" header="Planets"></Column>
</DataTable>
</div>
</template>

<script>
// @ is an alias to /src
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    LogIn,Column,DataTable,SignUp
  },
  data(){
    return{
      user_data:'',
      isUserNew:true,
      servers: [
                { server: 'Alpha', code: 'A1',status:"Running",started:"0 days ago",players: 1, online: 1, bases: 1, planets:1},
            ]
    };
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
    },
    toggleNewUserStatus(status){
      this.isUserNew = status
    }
  }
}
</script>
