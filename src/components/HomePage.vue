<link rel="stylesheet" href="style.css">
<template>

  <FormSearch v-bind:vehicle="editVehicles" />

  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">MODEL</th>
        <th scope="col">PRICE</th>
        <th scope="col">YEAR</th>
        <th scope="col">TYPE</th>
        <th scope="col">NATION</th>
        <th scope="col">COLOR</th>
        <th scope="col">VEHICLE CODE</th>
        <th scope="col">AMOUNT</th>
        <th scope="col">ACTION</th>
      </tr>
      </thead>
      <tbody v-for="(vehicle) in vehicles" :key="vehicle.id">

      <tr>
        <th>{{ vehicle.id }}</th>
        <td>{{ vehicle.name }}</td>
        <td>{{ vehicle.model }}</td>
        <td>{{ vehicle.price }}</td>
        <td>{{ vehicle.year }}</td>
        <td>{{ vehicle.type }}</td>
        <td>{{ vehicle.nation }}</td>
        <td>{{ vehicle.color }}</td>
        <td>{{ vehicle.vehicleCode }}</td>
        <td>{{ vehicle.amount }}</td>
        <td>
          <button @click="findVehicle(vehicle.id)"
                  type="button" class="btn btn-primary"
                  data-toggle="modal" data-target="#exampleModal">
            Edit
          </button>
          <button @click="deleteVehicle(vehicle.id)">Delete</button>
        </td>

      </tr>
      </tbody>
    </table>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal sửa</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form >
            <div class="form-control">
              <label for="recipient-name" class="col-form-label">Id</label>
              <input type="text" class="form-control"  v-model="valueEdit.id" >
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueEdit.name" >
              <label for="exampleFormControlInput1">Model</label>
              <input type="text" class="form-control"  v-model="valueEdit.model">
              <label for="exampleFormControlInput1">Price</label>
              <input type="text" class="form-control" v-model="valueEdit.price" >
              <label for="exampleFormControlInput1">Year</label>
              <input type="text" class="form-control" v-model="valueEdit.year">
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueEdit.type">
              <label for="exampleFormControlInput1">Nation</label>
              <input type="text" class="form-control" v-model="valueEdit.nation" >
              <label for="exampleFormControlInput1">Color</label>
              <input type="text" class="form-control"  v-model="valueEdit.color">
              <label for="exampleFormControlInput1">Vehicle Code</label>
              <input type="text" class="form-control"  v-model="valueEdit.vehicleCode">
              <label for="exampleFormControlInput1">Amount</label>
              <input type="text" class="form-control" v-model="valueEdit.amount">


            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateVehicle">Save changes</button>
        </div>
      </div>
    </div>
  </div>


</template>


<script src="./Repository.js"></script>

<!--<script src="./script.js" type="javascript"></script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

