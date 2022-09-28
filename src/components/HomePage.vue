<link rel="stylesheet" href="style.css">
<template>




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
    </tr>
    </thead>
    <tbody v-for="vehicle in vehicles" :key="vehicle.id">

    <tr >
      <th>{{vehicle.id}} </th>
      <td>{{vehicle.name}}</td>
      <td>{{vehicle.model}}</td>
      <td>{{vehicle.price}}</td>
      <td>{{vehicle.year}}</td>
      <td>{{vehicle.type}}</td>
      <td>{{vehicle.nation}}</td>
      <td>{{vehicle.color}}</td>
      <td>{{vehicle.vehicleCode}}</td>
      <td>{{vehicle.amount}}</td>

    </tr>
    </tbody>
  </table>
  </div>

</template>

<script src="./Repository.js"></script>

<!--<script src="./script.js" type="javascript"></script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

