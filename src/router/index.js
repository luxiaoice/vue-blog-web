import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
// import Archives from '@/views/Archives.vue'
// import Comment from '@/views/Comment.vue'
// import Friends from '@/views/Friends.vue'
// import Tags from '@/views/Tags.vue'
// import Types from '@/views/Types.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    
    //如果这么用不会延迟加载那么加载会变慢
    //component: Home
    //这么做js文件会被拆分并且懒加载
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import(/* webpackChunkName: "archives" */ '@/views/Archives.vue')
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import(/* webpackChunkName: "comment" */ '@/views/Comment.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "friends" */ '@/views/Friends.vue')
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import(/* webpackChunkName: "tags" */ '@/views/Tags.vue')
  },
  {
    path: '/types',
    name: 'Types',
    component: () => import(/* webpackChunkName: "types" */ '@/views/Types.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/Search.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
