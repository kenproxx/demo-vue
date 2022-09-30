import axios from 'axios';

const baseUrl = 'http://localhost:8051/swagger-resources/svehicle';

let regexNumber = new RegExp('^[0-9]+$');

export default {
    data() {
        return {
            vehicles: []
            , vehicle: {
                id: null,
                name: null,
                model: null,
                price: null,
                year: null,
                type: null,
                nation: null,
                color: null,
                vehicleCode: null,
                amount: null
            },
            valueEdit: {
                id: null,
                name: null,
                model: null,
                price: null,
                year: null,
                type: null,
                nation: null,
                color: null,
                vehicleCode: null,
                amount: null,
            },
            valueSearchs: {
                id: null,
                name: null,
                model: null,
                price: null,
                year: null,
                typee: null,
                nation: null,
                color: null,
                vehicleCode: null,
                amount: null,

            },
            valueAdd: {

                name: null,
                model: null,
                price: null,
                year: null,
                type: null,
                nation: null,
                color: null,
                vehicleCode: null,
                amount: null,
            },
            page: {
                page: 1,
                size: 5
            },

            valiValue: {

                name: null,
                model: null,
                price: null,
                year: null,
                type: null,
                nation: null,
                color: null,
                vehicleCode: null,
                amount: null,
            }


        }
    },
    created() {
        this.getAll();
    },
    methods: {

        getAll() {
            axios.get(`${baseUrl}/get-all?page=${this.page.page}&size=${this.page.size}`)
                .then(response => {
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

        findVehicleById(id) {
            axios.get(`${baseUrl}/get-by-id?id=${id}`)
                .then(response => {
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
                .then(response => {
                    console.log(response)
                    console.log(this.valueEdit)
                    this.getAll();
                })
                .catch(error => {
                    console.log(error);
                })
        },

        findVehicleAny() {
            axios.post(`${baseUrl}/find-any`, this.valueSearchs)
                .then(response => {
                    this.vehicles = response.data;
                })
                .catch(error => {
                    console.log(this.valueSearchs)
                    console.log(error);
                })
        },

        addVehicle() {
            axios.post(`${baseUrl}/save`, this.valueAdd)
                .then(response => {
                    console.log(response)
                    console.log(this.valueAdd)
                    this.getAll();
                })
                .catch(error => {
                    console.log(error);
                })
        },

        checkValidNull(obj) {
            for (var key in obj) {
                if (obj[key] == null || obj[key] == "") {
                    return false;
                }
            }
            return true;
        },
        insertVehicle() {
            if (!this.checkValidNull(this.valueAdd)) {
                alert("Vui lòng kiểm tra lại thông tin");
            } else {
                if (this.regexNum()) {
                    this.addVehicle();
                }
            }
        },
        regexNum() {
            if (regexNumber.test(this.valueAdd.price)
                && regexNumber.test(this.valueAdd.year)
                && regexNumber.test(this.valueAdd.amount)) {
                return true
            } else {
                return false
            }
        },
        setPage(page) {
            if(page > 0){
                this.page.page = page;
                this.getAll();
            }

        }


        }
    }
