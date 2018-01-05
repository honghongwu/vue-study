/**
 * Created by hong on 2017/12/13.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import detail from '../components/detail.vue'

// Vue.use(VueRouter)
//
// //注册路由
// export default new VueRouter({
//   mode: 'history',
//   linkActiveClass: 'active',
//   routes: [
//     {
//       path: '/about',
//       component: about
//     },
//     {
//       path: '/home',
//       component: home,
//       children: [
//         {
//           path: 'news',
//           component: news
//         },
//         {
//           path: 'message',
//           component: message,
//           children: [
//             {
//               path: 'detail/:newsId',
//               component: detail
//             }
//           ]
//         }
//       ]
//     },
//     {
//       path: '/',
//       redirect: '/about'
//     }
//   ]
// })

Vue.use(VueRouter)

export default new VueRouter({
  module: 'history',
  linkActiveClass: 'active',
  routes:[
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children:[
            {
              path: 'detail/:newsId',
              component: detail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
