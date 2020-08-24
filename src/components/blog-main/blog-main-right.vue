<template>
    <div class="blog-main-right">
        <div class="blog-main-right-top">
            <div class="blog-main-right-top-top">
                近期
            </div>
            <div class="blog-main-right-top-item-box">
                <div class="blog-main-right-top-item" v-for="recentArticle in recentArticles" :key="recentArticle.id">
                    <a @click="chickRecentArticle(RecentArticle.name)">
                        {{recentArticle.name}}
                    </a>
                </div>
            </div>
        </div>
        <div class="blog-main-right-bottom">
            <div class="blog-main-right-bottom-top">
                文章
            </div>
            <div class="blog-main-right-bottom-item-box">
                <div class="blog-main-right-bottom-item" v-for="hotArticle in hotArticles" :key="hotArticle.id">
                    <a @click="chickHotArticle(hotArticle.name)">
                        {{hotArticle.name}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"blogMainRight",
    data(){ 
        return{
            recentArticles:[

            ],
            hotArticles:[

            ]
        }
    },
    created(){
        this.$axios.post('/blog/recentArticle')
        .then((response)=>{
        this.recentArticles=response.data.recentArticles;
        })
        .catch((response)=>{
        console.log(response);
      }),
      this.$axios.post("/blog/hotArticle")
      .then((response)=>{
          this.hotArticles=response.data.hotArticles;
      })
      .catch((response)=>{
          console.log(response)
      })

    },
}
</script>
<style scoped>
    .blog-main-right{
        display: grid;
        grid-template-rows: 50% 50%;
        gap: 4%;
        width: 100%;
        height: 600px;
    }
    .blog-main-right-top{
        display: grid; /* grid布局 */
        grid-template-rows: 12% 88%;
        width: 100%;
        height: 300px;
        min-width: 235px;
        max-width: 235px;
        line-height: 36px; /* 设置垂直居中 */
        background-color: rgba(230,238,232,0.65);
        text-align: center;
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 6px  rgba(255, 255, 255, 0.7)
    }
    .blog-main-right-top:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        background-color: rgba(230,238,232,0.75);
        box-shadow: 0px 0px 10px  rgba(29, 28, 28)
    }
    .blog-main-right-top-top{
        display: grid;
        height: 36px;
        width: 235px;
        grid-template-columns: 35% 50% 15%;
        color: rgba(250, 250, 250);
        background-color: rgb(10,10,0,0.7);
        border-radius: 6px 6px 0px 0px;
    }
    .blog-main-right-top-item{
        display:flex;
        margin: 10px;
        
    }
    .blog-main-right-top-item:hover{
        display:flex;
        background-color: rgb(10,10,0,0.7);
        
    }
    .blog-main-right-top-item:hover a{
        color: rgb(255,255,255);
    }
    .blog-main-right-top-item a{
        text-decoration: none;
        color: #000;
        
        height: 32px;
        line-height: 32px;
    }
    .blog-main-right-bottom{
        display: grid; /* 设置为块元素 */
        width: 100%;
        height: 300px;
        grid-template-rows: 12% 88%;
        background-color: rgba(230,238,232,0.65);
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 6px  rgba(255, 255, 255, 0.7)
    }
    .blog-main-right-bottom:hover{
        cursor: pointer;
        background-color: rgba(230,238,232,0.75);
        box-shadow: 0px 0px 10px  rgba(29, 28, 28)
    }
    .blog-main-right-bottom-top{
        display: grid;
        height: 36px;
        width: 235px;
        grid-template-columns: 35% 50% 15%;
        color: rgba(250, 250, 250);
        background-color: rgb(10,10,0,0.7);
        border-radius: 6px 6px 0px 0px;
    }
    .blog-main-right-bottom-item{
        display: flex;
        margin: 10px;
    }
    .blog-main-right-bottom-item:hover{
        display:flex;
        background-color: rgb(10,10,0,0.7);
        
    }
    .blog-main-right-bottom-item:hover a{
        color: rgb(255,255,255);
    }
    .blog-main-right-bottom-item a{
        text-decoration: none;
        color: #000;
        
        height: 32px;
        line-height: 32px;
    }

    
</style>