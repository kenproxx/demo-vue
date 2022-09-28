<template>


  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form >
            <div class="form-control">
              <label for="recipient-name" class="col-form-label">Id</label>
              <input  type="text" class="form-control"  v-model="valueSearch.id" @input="check">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueSearch.name" >
              <label for="exampleFormControlInput1">Model</label>
              <input type="text" class="form-control" v-model="valueSearch.model" >
              <label for="exampleFormControlInput1">Price</label>
              <input type="text" class="form-control" v-model="valueSearch.price" >
              <label for="exampleFormControlInput1">Year</label>
              <input type="text" class="form-control" v-model="valueSearch.year" >
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueSearch.type">
              <label for="exampleFormControlInput1">Nation</label>
              <input type="text" class="form-control" v-model="valueSearch.nation" >
              <label for="exampleFormControlInput1">Color</label>
              <input type="text" class="form-control" v-model="valueSearch.color" >
              <label for="exampleFormControlInput1">Vehicle Code</label>
              <input type="text" class="form-control" v-model="valueSearch.vehicleCode" >
              <label for="exampleFormControlInput1">Amount</label>
              <input type="text" class="form-control" v-model="valueSearch.amount" >


            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="search">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script src="./FormSearch.js" />


<style scoped>

</style>