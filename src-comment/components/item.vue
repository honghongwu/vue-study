<template>
<div>
  <li class="list-group-item">
    <div class="handle">
      <a @click="del(index)" href="javascript:;">删除</a>
    </div>
    <p class="user"><span >{{todo.username}}</span><span> 说: </span></p>
    <p class="centence">{{todo.comment}}</p>
  </li>
</div>
</template>
<script>
  export default{
      props:['todo','index','del']
  }
</script>
<style>

</style>
