/**
 * Created by hong on 2017/12/12.
 */
const todo_key = 'todo_key'

export default {
  getData(){  //读取用户的数据
    return JSON.parse(localStorage.getItem(todo_key))
  },
  setData(value) {  //保存用户的数据
    localStorage.setItem(todo_key, JSON.stringify(value))
  }
}
