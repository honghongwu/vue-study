<template>
   <div>
     <h2>loading……</h2>
     <p>will to <a :href="ropUrl">{{ropUsername}}</a></p>
   </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
        return{
          ropUrl:{
              RrUrl:'',
            ropUsername:''
            }
        },
          methods(){
        let url = `https://api.github.com/search/repositories?q=vu&sort=stars`
//        this.$http.get(url)
//          .then(response=>{
//              this.RrUrl=response.body.item[0].html_url
//              this. ropUsername=response.body.item[0].name
//          })
        axios.get(url){
        .then(response=>{
              this.RrUrl=data.item[0].html_url
              this. ropUsername=data.item[0].name
          })
            .catch(error=>{
                console.log(error);
            })
        }
  }
</script>
<style>

</style>
