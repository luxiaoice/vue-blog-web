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
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta:{
      title:'首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta:{
      title:'关于'
    }
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import(/* webpackChunkName: "archives" */ '@/views/Archives.vue'),
    meta:{
      title:'归档'
    }
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import(/* webpackChunkName: "comment" */ '@/views/Comment.vue'),
    meta:{
      title:'留言'
    }
  
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "friends" */ '@/views/Friends.vue'),
    meta:{
      title:'友情链接'
    }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import(/* webpackChunkName: "tags" */ '@/views/Tags.vue'),
    meta:{
      title:'标签'
    },
    children:[
      {
        path: 'hi',
        name: 'hi',
        component: () => import(/* webpackChunkName: "type" */ '@/views/Tag.vue'),
        meta:{
          title: "hi"
        }
      },
      {
        path: 'css',
        name: 'css',
        component: () => import(/* webpackChunkName: "type" */ '@/views/Tag.vue'),
        meta:{
          title: "css"
        }
      },
      {
        path: 'vue',
        name: 'vue',
        component: () => import(/* webpackChunkName: "type */ '@/views/Tag.vue'),
        meta:{
          title: "vue"
        }
      },
      {
        path: 'java',
        name: 'java',
        component: () => import(/* webpackChunkName: "type" */ '@/views/Tag.vue'),
        meta:{
          title: "java"
        }
      },
    ]
  },
  {
    path: '/types',
    name: 'Types',
    component: () => import(/* webpackChunkName: "types" */ '@/views/Types.vue'),
    meta:{
      title:'分类',
      
    },
    children:[
      {
        path: 'coding',
        name: 'Coding',
        component: () => import(/* webpackChunkName: "type" */ '@/views/Type.vue'),
        meta:{
          title: "代码人生"
        }
      },
      {
        path: 'lifeInsights',
        name: 'LifeInsights',
        component: () => import(/* webpackChunkName: "type" */ '@/views/Type.vue'),
        meta:{
          title: "人生感悟"
        }
      },
      {
        path: 'utilities',
        name: 'Utilities',
        component: () => import(/* webpackChunkName: "type */ '@/views/Type.vue'),
        meta:{
          title: "实用工具"
        }
      },
      {
        path: 'picturesque',
        name: 'Picturesque',
        component: () => import(/* webpackChunkName: "type" */ '@/views/Type.vue'),
        meta:{
          title: "风景如画"
        }
      },
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/Search.vue'),
    meta:{
      title:'搜索'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
