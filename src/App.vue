<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-show="isTrue">
    <FormSearch @search="search"/>
  </div>


  <HomePage :vehicleSearch="vehicles"/>
</template>

<script>
import axios from 'axios'
import HomePage from './components/HomePage.vue'
import FormSearch from './components/search/FormSearch.vue'
const baseUrl = 'http://localhost:8051/swagger-resources/svehicle';

export default {
  name: 'App',
  components: {
     HomePage,
    FormSearch
  },
  data(){
    return{
      vehicles:[],
      isTrue: true
    }
  },
  methods:{
    search(value){
      axios.get(baseUrl+ '/find-any',  {

          id: value.id,
          name: value.name,
          model: value.model,
          price: value.price,
          year: value.year,
          type: value.type,
          nation: value.nation,
          color: value.color,
          vehicleCode: value.vehicleCode,
          amount: value.amount,
          page: 0,
          size: 10

      }).then(res => {
        console.log(res.data);

        return  this.vehicles = res.data
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
  margin-top: 60px;
}
</style>
