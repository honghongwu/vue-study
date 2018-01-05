<template>
  <div class="todo-header">
    <input @keyup.enter="addTodo" v-model="newTodo" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>
<script>
  export default{
      props:['add'],
      data(){
          return {
            newTodo:''
          }
      },
      methods:{
        addTodo(){
          let newTodo = this.newTodo
          if(!newTodo.trim()){
              alert('不能空')
            return
          }
          let todoObj = {todoName:newTodo,complete:false}
          //给App
          this.add(todoObj)
          //清空
          this.newTodo = ''
        }
    }
  }

</script>
<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
