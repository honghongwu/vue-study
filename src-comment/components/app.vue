<template>
<div>
  <header class="site-header jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>请发表对React的评论</h1>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
   <add :add="add"/>
   <list :todos="todos" :del="del" />
  </div>
</div>
</template>
<script>
  import add from './add.vue'
  import list from './list.vue'
  export default{
      components:{
          list , add
      },
      data(){
          return{
              todos:[
                {username: '北京', comment: 'haha'},
                {username: '上海', comment: '嘻嘻'}
              ]
          }
    },
    methods: {
      add(commentObj){
        this.todos.unshift(commentObj)
      },
      del(index){
        this.todos.splice(index,1)
      }
    }
  }
</script>
<style>
  .reply {
    margin-top: 0px;
  }


</style>
