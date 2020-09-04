<template>
  <div class="home">
    <div class="home-card" v-for="indexData in indexData" :key="indexData.id">
      <div class="home-card-left">
          <div class="home-card-left-box">
              <div class="home-card-left-box-title">
                <span class="home-card-left-box-title-titlespan">{{indexData.title}}</span>
              </div>
              <div class="home-card-left-box-icon">
                <span class="home-card-left-box-title-span">{{indexData.heat}}热度</span>
                <span class="home-card-left-box-title-span">{{indexData.commentsNumber}}</span>
                <span class="home-card-left-box-title-span">{{indexData.type}}</span>
              </div>
              <div class="home-card-left-box-content">
                <span class="home-card-left-box-content-span">{{indexData.content | ellipsis}}</span>
              </div>
          </div>
      </div>
      <div class="home-card-right">
          <div class="home-card-right-box">
               <img class="home-card-right-box-img" src="../assets/icon/left-top-background.png"/>
          </div>
      </div>
    </div>
    <div class="pagination">
      <ul class="pagination-ul">
        <li class="pagination-ul-previous-if" v-if="pages.currentPage>1" @click="pagePrevious()">上一页</li>
        <li class="pagination-ul-previous-else" v-else></li>
        <li class="pagination-ul-middle"></li>
        <li class="pagination-ul-next-if" v-if="pages.currentPage<pages.totalPageNum" @click="pageNext()">下一页</li>
        <li class="pagination-ul-next-else" v-else></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      pages: {
        //当前页
        currentPage:1,
        //一页多少个
        pageSize:3,
        //总页数
        totalPageNum: 1,
        //总个数
        //totalNum: Number,
        //是否有下一页
        //hasPrev:true,
        //hasNext:true,
      },
      indexData:[]
    }
  },
  components: {
    
  },
  filters: {
        //过滤器当字串大于20时后面的字符改为省略号
        ellipsis (str) {
            if (!str) return '';
            if (str.length > 62) {
                return str.slice(0,62) + '. . .';
        }
            return str;
        }
  },
  created(){
    this.getIndexData()
  },
  methods: {
    getIndexData(){
      this.$axios.post('/blog/getHomeIndex',{
          params: {
            currentPage:this.pages.currentPage,
          }})
          .then((response)=>{
            this.indexData=response.data.indexData.newIndexData;
            this.pages=response.data.indexData.pages
          })
          .catch((response)=>{
          console.log(response);
          })
    },
    pagePrevious(){
      if(this.pages.currentPage>1){
      this.pages.currentPage=this.pages.currentPage-1;
      this.getIndexData()
      }
    },
    pageNext(){
    if(this.pages.currentPage<this.pages.totalPageNum){
      this.pages.currentPage=this.pages.currentPage+1;
      this.getIndexData()
    }
    }
  },
}
</script>
<style>
  .home{
    width: 570px;
    height: 801px;
  }
  .home-card{
      display: flex; /* 设置为块元素 */
      width: 530px;
      height: 225px;
      margin: 20px;
      background-color: rgba(230,238,232,0.65);
      color: rgb(82, 81, 81);
      line-height: 36px; /* 设置垂直居中 */
      text-align: center;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
    }
    .home-card:hover{
      /*鼠标滑过*/
      cursor:pointer;
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15)
    }
    .home-card:hover .home-card-right-box-img{
      transform: scale(1.1);
    }
    .home-card-left{
      display: flex; /* 设置为块元素 */
      width: 245px;
      height: 225px;
      background-color: rgba(230,238,232,0.65);
      line-height: 36px; /* 设置垂直居中 */
      text-align: center;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px 0px 0px 10px;/*圆角*/
    }
    .home-card-left-box{
      
    }
    .home-card-left-box-title{
      display: flex; /* 设置为块元素 */
      font-size: 15px;
      color: rgb(82, 81, 81);
      width: 185px;
      padding-top: 3px;
      padding-bottom: 3px;
      padding-left: 30px;
      padding-right: 30px;
    }
    .home-card-left-box-title-title span:hover{
      cursor:text;
      color: #000;
    }
    .home-card-left-box-icon{
      display: flex; /* 设置为块元素 */
      font-size: 15px;
      color: rgb(82, 81, 81);
      width: 205px;
      line-height: 26px;
      height: 26px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .home-card-left-box-title-span{
      margin-left: 17px;
      margin-right: 17px;
      font-size: 6px;
      color: rgb(112, 112, 112);
    }
    .home-card-left-box-title-span:hover{
      color: rgb(90, 90, 90);
    }
    .home-card-left-box-content{
      display: flex; /* 设置为块元素 */
      font-size: 13px;
      color: rgb(82, 81, 81);
      width: 215px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .home-card-left-box-content-span:hover{
      cursor:text;
      color: #000;
    }
    .home-card-right{
      display: flex; /* 设置为块元素 */
      width: 285px;
      background-color: rgba(230,238,232,0.65);
      line-height: 36px; /* 设置垂直居中 */
      text-align: center;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 0px 10px 10px 0px;/*圆角*/
    }
    .home-card-right-box{
      width: 285px;
      height: 225px;
      overflow: hidden; /* 当图片溢出的时候隐藏*/
    }
    .home-card-right-box-img{
      display: flex; /* 设置为块元素 */
      width: 285px;
      height: 225px;
      text-align: center;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 0px 10px 10px 0px;/*圆角*/
      transition: all .6s;
    }
    .pagination{
      width: 530px;
      height: 46px;
      margin-left: 10px;
      margin-right: 10px;
      color: rgb(82, 81, 81);
      line-height: 36px; /* 设置垂直居中 */
      text-align: center;
    }
    .pagination-ul{
      margin: 0px;
      padding: 5px;
      width: 540px;
      height: 36px;
    }
    .pagination-ul-previous-if{
      display: block;
      float:left;
      width: 76px;
      height: 33px;
      margin: 3px;
      outline: 1px #888;
      text-align: center;
      line-height: 33px;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
    }
    .pagination-ul-previous-if:hover{
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15);
      color:rgb(90, 90, 90);
    }
    .pagination-ul-previous-else{
      display: block;
      float:left;
      width: 76px;
      height: 33px;
      margin: 3px;
    }
    .pagination-ul-next-if{
      display: block;
      float:left;
      width: 76px;
      height: 33px;
      margin: 3px;
      outline: 1px #888;
      text-align: center;
      line-height: 33px;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
    }
    .pagination-ul-next-else{
      display: block;
      float:left;
      width: 76px;
      height: 33px;
      margin: 3px;
    }
    .pagination-ul-next-if:hover{
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15);
      color: rgb(90, 90, 90);
    }
    .pagination-ul-middle{
      display: block;
      float:left;
      width: 376px;
      height: 33px;
    }
    .pagination-ul li a{
      text-decoration: none;
      color: rgb(82, 81, 81);
    }
</style>
