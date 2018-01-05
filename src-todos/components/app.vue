<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <todo-header :add="add"/>
     <todo-main :todos="todos" :del="del"/>
     <todo-footer :todos="todos" :changeAllcheckdBox="changeAllcheckdBox" :delAllCheckTodo="delAllCheckTodo"/>
    </div>
  </div>
</template>
<script>
  import header from './header.vue'
  import main from './main.vue'
  import footer from './footer.vue'
  export default{
      components:{
          'todo-header':header,
          'todo-main':main,
          'todo-footer':footer,
      },
    data(){
          return{
              todos:[
                {todoName:'上海人',complete:false},
                {todoName:'北京人',complete:false}
             ]
          }
    },
    methods:{
        add(todoObj){
            this.todos.unshift(todoObj)
        },
      del(index){
           this.todos.splice(index,1)
      },
      changeAllcheckdBox(isChecked){
       this.todos.forEach(item=> item.complete = isChecked)
      },
       delAllCheckTodo(){
          this.todos = this.todos.filter(item=> !item.complete)
       }
    }
  }

</script>
<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }


</style>
