<link rel="stylesheet" href="style.css">
<template>

  <div class="form-control" >
    <div style="width:  49%; float:left;">

      <label for="exampleFormControlInput1">ID</label>
      <input type="text" class="form-control " v-model="valueSearchs.id">
      <label for="exampleFormControlInput1">Name</label>
      <input type="text" class="form-control" v-model="valueSearchs.name">
      <label for="exampleFormControlInput1">Model</label>
      <input type="text" class="form-control" v-model="valueSearchs.model">
      <label for="exampleFormControlInput1">Price</label>
      <input type="text" class="form-control" v-model="valueSearchs.price">
      <label for="exampleFormControlInput1">Year</label>
      <input type="text" class="form-control" v-model="valueSearchs.year">

    </div>

    <div style="width:  49%; float: right">


      <label for="exampleFormControlInput1">Type</label>
      <input type="text" class="form-control" v-model="valueSearchs.type">
      <label for="exampleFormControlInput1">Nation</label>
      <input type="text" class="form-control" v-model="valueSearchs.nation">
      <label for="exampleFormControlInput1">Color</label>
      <input type="text" class="form-control" v-model="valueSearchs.color">
      <label for="exampleFormControlInput1">Vehicle Code</label>
      <input type="text" class="form-control" v-model="valueSearchs.vehicleCode">
      <label for="exampleFormControlInput1">Amount</label>
      <input type="text" class="form-control" v-model="valueSearchs.amount">
    </div>

    <button type="button" class="btn btn-primary" style="margin: 1%" data-dismiss="modal" @click="findVehicleAny">
      Search
    </button>

  </div>



  <button
      type="button" class="btn btn-primary" style="margin: 1%"
      data-toggle="modal" data-target="#exampleModal2">
    Add
  </button>


  <div style="height: 400px; overflow: auto; padding: 10px">
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
      <tbody v-for="vehicle in vehicles" :key="vehicle.id">

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

          <button @click="findVehicleById(vehicle.id)"
                  type="submit" class="btn btn-primary"
                  data-toggle="modal" data-target="#exampleModal">
            Edit
          </button>

          <button type="submit" class="btn btn-danger" @click="deleteVehicle(vehicle.id)">Delete</button>
        </td>

      </tr>
      </tbody>
    </table>


  </div>


  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item ">
        <a class="page-link" href="#" tabindex="-1" @click="setPage(this.page.page - 1)">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" @click="setPage(1)" href="#">1</a></li>
      <li class="page-item"><a class="page-link" @click="setPage(2)" href="#">2</a></li>
      <li class="page-item"><a class="page-link" @click="setPage(3)" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" @click="setPage(this.page.page + 1)">Next</a>
      </li>
    </ul>
  </nav>


  <div>Page size
    <select v-model="page.size" @change="getAll">
      <option value="5" selected>5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </div>

  <!--  Form edit-->

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Sửa</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-control">
              <label for="recipient-name" class="col-form-label">Id</label>
              <input type="text" class="form-control" readonly v-model="valueEdit.id">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueEdit.name">
              <label for="exampleFormControlInput1">Model</label>
              <input type="text" class="form-control" v-model="valueEdit.model">
              <label for="exampleFormControlInput1">Price</label>
              <input type="text" class="form-control" v-model="valueEdit.price">
              <label for="exampleFormControlInput1">Year</label>
              <input type="text" class="form-control" v-model="valueEdit.year">
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueEdit.type">
              <label for="exampleFormControlInput1">Nation</label>
              <input type="text" class="form-control" v-model="valueEdit.nation">
              <label for="exampleFormControlInput1">Color</label>
              <input type="text" class="form-control" v-model="valueEdit.color">
              <label for="exampleFormControlInput1">Vehicle Code</label>
              <input type="text" class="form-control" v-model="valueEdit.vehicleCode">
              <label for="exampleFormControlInput1">Amount</label>
              <input type="text" class="form-control" v-model="valueEdit.amount">


            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateVehicle">Edit</button>
        </div>
      </div>
    </div>
  </div>


  <!--Form search-->

  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal tìm kiếm</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-control">
              <label for="recipient-name" class="col-form-label">Id</label>
              <input type="text" class="form-control" v-model="valueSearchs.id">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueSearchs.name">
              <label for="exampleFormControlInput1">Model</label>
              <input type="text" class="form-control" v-model="valueSearchs.model">
              <label for="exampleFormControlInput1">Price</label>
              <input type="text" class="form-control" v-model="valueSearchs.price">
              <label for="exampleFormControlInput1">Year</label>
              <input type="text" class="form-control" v-model="valueSearchs.year">
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueSearchs.type">
              <label for="exampleFormControlInput1">Nation</label>
              <input type="text" class="form-control" v-model="valueSearchs.nation">
              <label for="exampleFormControlInput1">Color</label>
              <input type="text" class="form-control" v-model="valueSearchs.color">
              <label for="exampleFormControlInput1">Vehicle Code</label>
              <input type="text" class="form-control" v-model="valueSearchs.vehicleCode">
              <label for="exampleFormControlInput1">Amount</label>
              <input type="text" class="form-control" v-model="valueSearchs.amount">


            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="findVehicleAny">Search</button>
        </div>
      </div>
    </div>
  </div>


  <!--  form add-->

  <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Add</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-control">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueAdd.name">
              <label for="exampleFormControlInput1">Model</label>
              <input type="text" class="form-control" v-model="valueAdd.model">
              <label for="exampleFormControlInput1">Price</label>
              <input type="number" class="form-control" v-model="valueAdd.price">
              <label for="exampleFormControlInput1">Year</label>
              <input type="number" class="form-control" v-model="valueAdd.year">
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueAdd.type">
              <label for="exampleFormControlInput1">Nation</label>
              <input type="text" class="form-control" v-model="valueAdd.nation">
              <label for="exampleFormControlInput1">Color</label>
              <input type="text" class="form-control" v-model="valueAdd.color">
              <label for="exampleFormControlInput1">Vehicle Code</label>
              <input type="text" class="form-control" v-model="valueAdd.vehicleCode">
              <label for="exampleFormControlInput1">Amount</label>
              <input type="number" class="form-control" v-model="valueAdd.amount">
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="insertVehicle">Add</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script src="./Repository.js"></script>



