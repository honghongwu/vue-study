<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <!--<todoHeader :add="add"/>-->
      <!--给todoHeader绑定事件-->
    <!-- <todoHeader v-on:add="add"/>-->
     <todoHeader ref="header"/>
     <todoMain :todos="todos" :del="del"/>
      <!--使用slot插座插槽时不能使用自结束标签，这里将footer中的一些页面显示
      放到App中写,并将涉及的方法拿到app-->
      <todoFooter :todos="todos" :changeAllCheckBox="changeAllCheckBox" :delAllCompleteTodo="delAllCompleteTodo">
        <span slot="count">
          <span>ddd已完成{{allCompleteTodos}}</span> / 全部{{todos.length}}
        </span>
        <button slot="delAll" v-show="allCompleteTodos"  @click="delAllCompleteTodo" class="btn btn-danger" >清除已完成任务</button>
      </todoFooter>
    </div>
  </div>

</template>
<script>
  import header from './header.vue'
  import footer from './footer.vue'
  import main from './main.vue'
  import localStorage from '../unit/localStorage'
  export default {
      components:{
          'todoHeader':header,
          'todoMain':main,
          'todoFooter':footer
      },
    data(){
          return{
//              todos:[
//                {todoName: '吃饭', complete: false},
//                {todoName: '睡觉', complete: false},
//                {todoName: '打豆豆', complete: false}
//              ]
            todos:[]
          }
    },
    mounted(){
        //通过 this指向当前app，this.$ref.header找到header组件
      //this.add指当前app方法中的add
        this.$refs.header.$on('add',this.add)
        //读取刷新前的值
     this.todos = localStorage.getData() || []
    },
    methods:{
      add(todoObj){
          this.todos.unshift(todoObj)
      },
      del(index){
          this.todos.splice(index,1)
      },
      changeAllCheckBox(isChecked){
        this.todos.forEach(item => item.complete = isChecked)
      },
      delAllCompleteTodo(){
      this.todos = this.todos.filter(item=> !item.complete)
      }
    },
    //深度监视todos数据的变化
    watch: {
   todos: {
       deep: true,
       handler: function (value) {
         localStorage.setData(value)
       }
     }
    },
   computed:{
     allCompleteTodos(){
       return this.todos.filter(item => item.complete).length
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
