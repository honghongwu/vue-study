<template>
  <li :style="{background:MyColor}" @mouseenter="handleLeav(true)" @mouseleave="handleLeav(false)" >
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.todoName}}</span>
    </label>
    <button @click="del(index)" v-show="isShow" class="btn btn-danger" >删除</button>
  </li>
</template>
<script>
  export default {
      props:['todo','index','del'],
      data(){
       return{
         MyColor:'white',
         isShow:false
       }
    },
    methods:{
      handleLeav(isEnter){
          this.MyColor = isEnter ?'#eee':'white'
          this.isShow = isEnter ? true : false
      }
    }
  }
</script>
<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
