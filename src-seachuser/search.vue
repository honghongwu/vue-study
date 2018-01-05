<template>

  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="searchName" type="text" placeholder="enter the name you search"/>
      <button @click="getName(searchName);searchName=''">Search</button>
    </div>
  </section>

</template>
<script>
  export default {
      props:['getName'],
      data(){
          return{
              serchName: ''
          }
      }
  }
</script>
<style>

</style>
