<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input v-model="username" type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea v-model="comment" class="form-control" rows="6" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click="addComment" type="button" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  export default{
      props:['add'],
      data(){
          return{
              username : '',
              comment : ''
          }
      },
      methods:{
      addComment(){
          let username = this.username
          let comment = this.comment
          if(!username || !comment){
              alert('重新')
              return
          }
          let commentObj = {username, comment}
          this.add(commentObj)

      }
    }
  }
</script>
<style>

</style>
