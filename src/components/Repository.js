import axios from 'axios';

const baseUrl = 'http://localhost:8051/swagger-resources/svehicle';

export default {
    data() {
        return {
            vehicles: [],
            editVehicles:[]
           , vehicle: {
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
            },
            valueEdit: {
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
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            axios.get(baseUrl + '/get-all')
                .then(response => {
                    console.log(response)
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
                    console.log(response.data)
                    this.valueEdit.id = response.data.id;
                    this.valueEdit.name = response.data.name;
                    this.valueEdit.model = response.data.model;
                    this.valueEdit.price = response.data.price;
                    this.valueEdit.year = response.data.year;
                    this.valueEdit.type = response.data.type;
                    this.valueEdit.nation = response.data.nation;
                    this.valueEdit.color = response.data.color;
                    this.valueEdit.vehicleCode = response.data.vehicleCode;
                    this.valueEdit.amount = response.data.amount;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        updateVehicle() {
            axios.put(`${baseUrl}/update`, this.valueEdit)
                .then( response => {
                       console.log(response)
                    this.getAll();
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }


}
