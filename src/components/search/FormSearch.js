// import axios from 'axios';
// const baseUrl = 'http://localhost:8051/swagger-resources';

export default {
    props: ['vehicle'],
    data() {
        return{
            valueSearch: {
                id: '',
                name: '',
                model: '' ,
                price: '',
                year: '',
                type: '',
                nation: '',
                color: '',
                vehicleCode: '',
                amount: '',

            }

        }
    }, methods: {
        search(){
            this.$emit('search', this.valueSearch);
        },

        check() {
            console.log(this.vehicle);


        },
    },
    // created() {
    //     axios.get(baseUrl + '/svehicle/get-all')
    //         .then(response => {
    //             console.log(response)
    //             this.vehicles = response.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }
}
