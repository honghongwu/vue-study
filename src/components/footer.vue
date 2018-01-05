<template>
  <div class="todo-footer">
    <label>
      <input v-model="changeAllComplete" type="checkbox"/>
    </label>
    <!--<span>
          <span>已完成{{allCompleteTodos}}</span> / 全部{{todos.length}}
    </span>-->
    <slot name="count"></slot>
    <slot name="delAll"></slot>
  </div>
</template>
<script>
  export default {
    props:['todos','changeAllCheckBox','delAllCompleteTodo'],
    computed :{
        allCompleteTodos(){
//           return this.todos.filter(item => item.complete).length
          let result = 0
          this.todos.reduce(function (perCount,todo) {
            result += todo.complete ? 1 : 0
          },0)
        },
        changeAllComplete: {
        get(){
          return this.allCompleteTodos == this.todos.length && this.allCompleteTodos
        },
        set(isChecked){// 监视checkbox是否选中,数据源在app，在app中定义方法传参
          this.changeAllCheckBox(isChecked)
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
