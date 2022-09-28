import axios from 'axios';

const baseUrl = 'http://localhost:8051/swagger-resources/svehicle';

export default {
    props: ['vehicleSearch'],
    data() {
        return{
            vehicles: []
           
        }
    },
    created() {
        axios.get(baseUrl + '/get-all')
            .then(response => {
                console.log(response)
                this.vehicles = response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }, methods: {
        search(){
            axios.get(baseUrl + '/svehicle/find-any', )
            .then(response => {
                console.log(response)
                this.vehicles = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    
    
}
