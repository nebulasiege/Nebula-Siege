import { createStore } from 'vuex'
/* eslint-disable */
// Create a new store instance.
export default createStore({
  state: {
    access: '',
    refresh:''
    }
  ,
  mutations: {
    initializeStore(state){
        if(localStorage.getItem('access')){
          console.log("here13")
            state.access = localStorage.getItem("access")
            state.refresh = localStorage.getItem("refresh")

        }else{
            state.access = ''
            state.refresh = ''
        }
    },
    setAccess(state,access){
        state.access = access
    },
    setRefresh(state,refresh){
      console.log("dsfdsfdsdf")
      console.log(state)
        state.refresh = refresh
    }
  }
})

