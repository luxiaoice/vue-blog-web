<template>
  <div  class="comment">
    <div class="comment-list" v-for="commentData in commentData" :key="commentData.id">
        <div class="comment-list-img">
          hh
        </div>
        <div class="comment-list-1">
            <div class="comment-list-info-name">
              <div class="comment-list-info-name">
               {{commentData.name}}
              </div>
              <div class="comment-list-info-link">
                <a @click="getcommentId(commentData.id)">回复</a>
              </div>
            </div>
            <div class="comment-list-info">
              <div class="comment-list-info-time">发布于{{commentData.date}}</div>
              <div class="comment-list-info-ip">{{commentData.ip}}</div>
              <div class="comment-list-info-city">来自{{commentData.ipaddress}}</div>
            </div>
          </div>
          <div class="comment-list-text">
              <p>{{commentData.comment}}</p>
          </div>
          <div class="comment-card" v-if="cid==commentData.id">
          <div>
            <textarea class="comment-card-testarea">
            </textarea>
            <input type="text" class="comment-card-input" placeholder="昵称">
            <input type="text" class="comment-card-input" placeholder="邮箱">
            <input type="text" class="comment-card-submit" readonly value="提交">
          </div>
        </div>
        <div class="comment-list-sub" v-for="commentData in commentData.subComments" :key="commentData.id">
        <div class="comment-list-sub-img">
          hh
        </div>
        <div class="comment-list-sub-1">
            <div class="comment-list-sub-info-name">
              <div class="comment-list-sub-info-name">
               {{commentData.name}}  @{{commentData.targetUserId}}
              </div>
              <div class="comment-list-sub-info-link">
                <a  @click="getcommentId(commentData.id)">回复</a>
              </div>
            </div>
            <div class="comment-list-sub-info">
              <div class="comment-list-sub-info-time">发布于{{commentData.date}}</div>
              <div class="comment-list-sub-info-ip">{{commentData.ip}}</div>
              <div class="comment-list-sub-info-city">来自{{commentData.ipaddress}}</div>
            </div>
          </div>
          <div class="comment-list-sub-text">
              <p>{{commentData.comment}}</p>
          </div>
          <div class="comment-card" v-if="cid==commentData.id">
          <div>
            <textarea class="comment-card-testarea">

            </textarea>
            <input type="text" class="comment-card-input" placeholder="昵称">
            <input type="text" class="comment-card-input" placeholder="邮箱">
            <input type="text" class="comment-card-submit" readonly value="提交">
          </div>
        </div>
    </div>
    </div>
    <div class="comment-card-buttom" v-if="cid==0">
        <div>
          <textarea class="comment-card-testarea">

          </textarea>
          <input type="text" class="comment-card-input" placeholder="昵称">
          <input type="text" class="comment-card-input" placeholder="邮箱">
          <input type="text" class="comment-card-submit" readonly value="提交">
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
      cid:0,
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
      commentData:[]
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
    getcommentId(id){
      this.cid=id
    },
    getIndexData(){
      this.$axios.post('/blog/getComment',{
          params: {
            currentPage:this.pages.currentPage,
          }})
          .then((response)=>{
            this.commentData=response.data.commentData.newcommentData;
            this.pages=response.data.commentData.pages
          })
          .catch((response)=>{
          console.log(response);
          })
    },
    pagePrevious(){
      if(this.pages.currentPage>1){
      this.pages.currentPage=this.pages.currentPage-1;
      this.getIndexData()
      this.cid=0
      }
    },
    pageNext(){
    if(this.pages.currentPage<this.pages.totalPageNum){
      this.pages.currentPage=this.pages.currentPage+1;
      this.getIndexData()
      this.cid=0
    }
    }
  },
}
</script>

<style>
    .comment{
      width: 570px;
      height: 801px;
    }
    .comment-list{
      width: 530px;
      margin: 20px;
      padding-bottom: 1px;
      background-color: rgba(230,238,232,0.65);
      color: rgb(82, 81, 81);
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
      
    }
    .comment-list:hover .comment-list-info-link{
      display:block;
      width: 60px;
    }
    .comment-list-img{
      float: left;
      height: 41px;
      width: 41px;
      margin-right: -50px;
    }
    .comment-list-1{
      width: 480px;
      height: 41px;
      font-size: 16px;
      overflow: hidden;
      margin-bottom: 5px;
      text-transform: uppercase;
      text-align: left;
      margin-left: 50px;
    }
    .comment-list-info{
      display: flex;
      width: 480px;
      height: 17px;
      line-height: 17px;
      text-align: center;
      margin-top: 2px;
      font-size: 12px;
      letter-spacing: 0px;
      text-transform: none;
    }
    .comment-list-info div{
      padding-left: 10px;
      padding-right: 10px;
    }
    .comment-list-info-name{
      display: flex;
      width: 480px;
      height: 24px;
      line-height: 24px;
    }
    .comment-list-info-link{
      width: 60px;
      display: none;
    }
    .comment-list-info-link a{
      text-decoration: none;
    }
    .comment-list-text p{
      font-size: 14px;
      line-height: 30px;
      margin-left: 15px;
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: left;
    }
    .comment-list-sub{
      width: 490px;
      margin-left: 20px;
      margin-bottom: 20px;
      background-color: rgba(230,238,232,0.65);
      color: rgb(82, 81, 81);
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);    
    }
    .comment-list-sub:hover .comment-list-info-link{
      display:none;
    }
    .comment-list-sub:hover .comment-list-sub-info-link{
      display:block;
      width: 60px;
    }
    .comment-list-sub-img{
      float: left;
      height: 41px;
      width: 41px;
      margin-right: -50px;
    }
    .comment-list-sub-1{
      width: 440px;
      height: 41px;
      font-size: 16px;
      overflow: hidden;
      margin-bottom: 5px;
      text-transform: uppercase;
      text-align: left;
      margin-left: 50px;
    }
    .comment-list-sub-info{
      display: flex;
      width: 440px;
      height: 17px;
      line-height: 17px;
      text-align: center;
      margin-top: 2px;
      font-size: 12px;
      letter-spacing: 0px;
      text-transform: none;
    }
    .comment-list-sub-info div{
      padding-left: 10px;
      padding-right: 10px;
    }
    .comment-list-sub-info-name{
      display: flex;
      width: 440px;
      height: 24px;
      line-height: 24px;
    }
    .comment-list-sub-info-link{
      width: 60px;
      display: none;
    }
    .comment-list-sub-info-link a{
      text-decoration: none;
    }
    .comment-list-sub-text p{
      font-size: 14px;
      line-height: 30px;
      margin-left: 15px;
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: left;
    }
     .comment-card{
      display: flex; /* 设置为块元素 */
      width: 100%;
      height: 225px;
      background-color: rgba(230,238,232,0.65);
      color: rgb(82, 81, 81);
      text-align: center;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
    }
    .comment-card:hover{
      /*鼠标滑过*/
      cursor:pointer;
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15)
    }
    .comment-card-buttom{
      display: flex; /* 设置为块元素 */
      width: 530px;
      height: 225px;
      margin: 20px;
      background-color: rgba(230,238,232,0.65);
      color: rgb(82, 81, 81);
      text-align: center;
      /* 轮廓 */
      outline: 1px #888;
      border-radius: 10px;/*圆角*/
      box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7);
    }
    .comment-card-buttom:hover{
      /*鼠标滑过*/
      cursor:pointer;
      background-color: rgba(230,238,232,0.75);
      /* 阴影 */
      box-shadow: 0px 0px 10px  rgb(15, 15, 15)
    }
    .comment-card-testarea{
      width: 88%;
      height: 150px;
      margin-top: 5px;
      margin-left: 26px;
      margin-right: 26px;
      background-color: rgba(230,238,232,0.65);
      border-radius: 10px;/*圆角*/
      resize:none;
      outline: none;
    }
    .comment-card-input{
    width: 18%;
      height: 15px;
      margin-left: 15px;
      margin-right: 15px;
      padding: 10px;
      background-color: rgba(230,238,232,0.65);
      border-radius: 10px;/*圆角*/
      outline: none;
      text-align: center;
    }
    .comment-card-submit{
      width: 18%;
      height: 15px;
      margin-left: 15px;
      margin-right: 15px;
      padding: 10px;
      text-align: center;
      background-color: rgba(230,238,232,0.65);
      border-radius: 10px;/*圆角*/
      outline: none;
    }
    .comment-card-submit:hover{
      width: 18%;
      height: 15px;
      margin-left: 15px;
      margin-right: 15px;
      padding: 10px;
      cursor:pointer;
      background-color: rgba(212, 219, 214, 0.75);
      border-radius: 10px;/*圆角*/
      outline: none;
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
