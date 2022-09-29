import axios from 'axios';

const baseUrl = 'http://localhost:8051/swagger-resources/svehicle';

export default {
    // props: ['vehicleEdit'],
    data() {
        return {
            vehicles: []
           , vehicleEdit: {
                id: '',
                name: '',
                model: '',
                price: '',
                year: '',
                type: '',
                nation: '',
                color: '',
                vehicleCode: '',
                amount: ''
            }
        }
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            axios.get(baseUrl + '/get-all')
                .then(response => {
                    // console.log(response)
                    this.vehicles = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        search() {
            axios.get(baseUrl + '/find-any',)
                .then(response => {
                    console.log(response)
                    this.vehicles = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        deleteVehicle(id) {
            axios.delete(`${baseUrl}/delete?id=${id}`)
                .then(
                    this.getAll()
                )
                .catch(error => {
                    console.log(error);
                })
        },
        findVehicle(id) {
            axios.get(`${baseUrl}/get-by-id?id=${id}`)
                .then(response => {
                    this.vehicleEdit = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


}
