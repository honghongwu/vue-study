<template>
  <div class="todo-header">
    <input @keyup.enter="addTodo" v-model="newTodo" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>
<script>
  export default {
 //      props:['add'],
// 新方法，直接在下面给app传数据时
      data(){
          return {
              newTodo: ''
          }
      },
    methods:{
          addTodo(){
              //收集
            let newTodo = this.newTodo
             //合理
            if(!newTodo.trim()){
              alert('输入的内容不能为空')
              return
            }
             //整理
            let todoObj = {todoName: newTodo, complete: false}
            //交给app
//           this.add(todoObj)
            //新方法,触发
            this.$emit('add',todoObj)
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
