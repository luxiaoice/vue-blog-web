<template>
  <div class="types">
    <div class="types-list">
        <router-link class="types-list-div" :to="type.url" v-for="type in types" 
        :key="type.id">{{type.name}} ({{type.count}})</router-link>  
    </div>
     <!-- 添加:key="$route.fullPath"解决渲染同一页面不刷新问题 -->  
     <router-view class="type-list-view" :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name:"types",
  data(){
    return{
      types:[]
    }
  },
  created(){
    this.getTypes()
  },
  methods: {
    getTypes(){
      this.$axios.post('/blog/getTypes')
          .then((response)=>{
            this.types=response.data.types;
          })
          .catch((response)=>{
          console.log(response);
          })
    },
  },
}
</script>

<style>
    .types-title{
      height: 40px;
      width: 570px;
      line-height: 40px;
      font-size: 20px;
      color: rgb(82, 81, 81);
    }
    .types-title span:hover{
      cursor:text;
      color: #000;
    }
    .types-title-count{
      height: 30px;
      width: 570px;
      line-height: 30px;
      font-size: 14px;
      color: rgb(82, 81, 81);
    }
    .types-title-count span:hover{
      cursor:text;
    }
    .types-list{
      display: flex;
      flex-wrap: wrap;
      width: 570px;
    }
    .types-list-div{
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
    .types-list-div:hover{
       /*鼠标滑过*/
      cursor:pointer;
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15)
    }
    .type-list-view{
      width: 570;
    }
</style>
