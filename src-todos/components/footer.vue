<template>
  <div class="todo-footer">
    <label>
      <input v-model="changeAllcomplete" type="checkbox"/>
    </label>
    <span>
          <span>已完成{{allCompleteTodos}}</span> / 全部{{todos.length}}
        </span>
    <button  @click="delAllCheckTodo" v-show="allCompleteTodos" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>
<script>
  export default{
      props:['todos','changeAllcheckdBox','delAllCheckTodo'],
      computed: {
          //计算全部完成的todolength
      allCompleteTodos(){
          return this.todos.filter( item => item.complete).length
      },
      //返回T F 给changeAllcomplete对应的input
      changeAllcomplete:{
          get(){
              return this.allCompleteTodos == this.todos.length && this.allCompleteTodos
          },
        //用set监视 input的type="checkbox"的状态是T还是F ，定义形参isChecked
        //数据源在APp，在App中定义方法
        set(isChecked){
        this.changeAllcheckdBox(isChecked)
        }
      }
    }
  }

</script>
<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
