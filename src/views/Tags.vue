<template>
  <div class="tags">
    <div class="tags-list">
        <router-link class="tags-list-div" :to="tags.url" v-for="tags in tags" 
        :key="tags.id">{{tags.name}} ({{tags.count}})</router-link>  
    </div>
     <!-- 添加:key="$route.fullPath"解决渲染同一页面不刷新问题 -->  
     <router-view class="tags-list-view" :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name:"tags",
  data(){
    return{
      tags:[]
    }
  },
  created(){
    this.getTags()
  },
  methods: {
    getTags(){
      this.$axios.post('/blog/getTags')
          .then((response)=>{
            this.tags=response.data.tags;
          })
          .catch((response)=>{
          console.log(response);
          })
    },
  },
}
</script>

<style>
    .tags-title{
      height: 40px;
      width: 570px;
      line-height: 40px;
      font-size: 20px;
      color: rgb(82, 81, 81);
    }
    .tags-title span:hover{
      cursor:text;
      color: #000;
    }
    .tags-title-count{
      height: 30px;
      width: 570px;
      line-height: 30px;
      font-size: 14px;
      color: rgb(82, 81, 81);
    }
    .tags-title-count span:hover{
      cursor:text;
    }
    .tags-list{
      display: flex;
      flex-wrap: wrap;
      width: 570px;
    }
    .tags-list-div{
      height: 36px;
      width: 102px;
      margin-top: 15px;
      margin-left: 15px;
      margin-right: 15px;
      background-color: rgba(230,238,232,0.65);
      color: rgb(82, 81, 81);
      line-height: 36px; /* 设置垂直居中 */
      text-align: center;
      text-decoration: none;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
    }
    .tags-list-div:hover{
       /*鼠标滑过*/
      cursor:pointer;
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15)
    }
    .tags-list-view{
      width: 570;
    }
</style>
