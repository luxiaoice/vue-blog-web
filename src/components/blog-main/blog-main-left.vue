<template>
    <div class="blog-main-left">
        <div class="blog-main-left-top">
            
            <div class="blog-main-left-top-head">
                <div class="blog-main-left-top-head-icon">
                    <img class="icon-avatar-img" src="../../assets/icon/avatar.png"/>
                    <div class="blog-main-left-top-hand-ltems">
                        {{user.name}}
                    </div>
                </div>
            </div>
            <div class="blog-main-left-top-ltems" v-if="user.github!=null">
                    <a :href="user.github" target="_blank"></a>
            </div>
        </div>
        
        <div class="blog-main-left-bottom">
            <div class="blog-main-left-bottom-top">
                <div class=“blog-main-left-bottom-top-left”>分类</div>
            </div>
            <div class="blog-main-left-bottom-item-box">
                <div class="blog-main-left-bottom-item" v-for="tag in tags" :key="tag.id">
                    <a @click="chickTag(tag.name)">
                        {{tag.name}}
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:"blogMainLeft",
    data(){ 
        return{
            user:{

            },
            tags:[

            ]
        }
    },
    created(){
        this.$axios.post('/blog/userCard')
        .then((response)=>{
        this.user=response.data.user;
        })
        .catch((response)=>{
        console.log(response);
      }),
      this.$axios.post("/blog/tags")
      .then((response)=>{
          this.tags=response.data.tags;
      })
      .catch((response)=>{
          console.log(response)
      })

    },
}
</script>
<style scoped>
    .blog-main-left{
        display: grid;
        grid-template-rows: 50% 50%;
        gap: 4%;
        width: 100%;
        min-width: 235px;
        max-width: 235px;
        height: 600px;
    }
    .blog-main-left-top{
        display: grid; /* grid布局 */
        width: 100%;
        height: 285px;
        min-width: 235px;
        max-width: 235px;
        background-color: rgba(230,238,232,0.65);
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        grid-template-rows: 85% 15%;
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 6px  rgba(255, 255, 255, 0.7)
    }
    .blog-main-left-top:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        background-color: rgba(230,238,232,0.75);
        /* 阴影 */
        box-shadow: 0px 0px 10px rgba(29, 28, 28)
    }
     .blog-main-left-top-head{
        display: grid;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 6px;
        background-image: url('../../assets/icon/left-top-background.png');
        background-repeat:repeat-x;
        background-size: 100% 50%;
    }
    .blog-main-left-top-head-icon{
        height: 90px;
        width: 90px;
        border-radius: 50%;
        margin:auto;
    }
    
    .icon-avatar-img{
        height: 75px;
        width: 75px;
        border-radius: 50%;
        
    }
    .icon-avatar-img:hover{
        width: 85px;
        height: 85px;
        cursor: pointer;
        transform: rotate(1turn);
        transition-duration: 2s;
    }
    /* 名字淡入淡出效果*/
    @-webkit-keyframes fadeIn {
        100% {
        opacity: 1; /*初始状态 透明度为0*/
        }
        50% {
        opacity: 0.5; /*中间状态 透明度为0*/
        }
        0% {
        opacity: 0; /*结尾状态 透明度为1*/
        }
    }
    .icon-avatar-img:hover+.blog-main-left-top-hand-ltems{
        visibility:visible;
        -webkit-animation-name: fadeIn; /*动画名称*/
        -webkit-animation-duration: 3s; /*动画持续时间*/
        -webkit-animation-iteration-count: 1; /*动画次数*/
        -webkit-animation-delay: 0s; /*延迟时间*/
        
    }
    .blog-main-left-top-hand-ltems{
        visibility:hidden;
    }
    .blog-main-left-top-ltems{
        display: flex;
        padding-left: 40%;
        padding-right: 40%;
        
    }
    .blog-main-left-top-ltems a{
        width: 40px;
        height: 40px;
        margin-left: 2%;
        margin-right: 2%;
        border-radius: 50%;
        overflow: hidden;
        background-image: url('../../assets/icon/github.png');
        background-size: 40px 40px;
    }
    .blog-main-left-bottom{
        display: grid; /* 设置为块元素 */
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
    .blog-main-left-bottom:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        background-color: rgba(230,238,232,0.75);
        box-shadow: 0px 0px 10px  rgba(29, 28, 28)
    }
    .blog-main-left-bottom-top{
        height: 36px;
        display: grid;
        width: 235px;
        grid-template-columns: 35% 50% 15%;
        color: rgba(250, 250, 250);
        background-color: rgb(10,10,0,0.7);
        border-radius: 6px 6px 0px 0px;
    }
    .blog-main-left-bottom-item{
        display:flex;
        margin: 10px;
    }
    .blog-main-left-bottom-item:hover{
        display:flex;
        margin: 10px;
        background-color: rgb(10,10,0,0.7);
        border-radius: 6px;
    }
    .blog-main-left-bottom-item:hover a{
        color: rgb(255,255,255);
    }
    .blog-main-left-bottom-item a{
        text-decoration: none;
        color: #000;
        margin-left: 70px;
        margin-right: 70px;
        height: 32px;
        line-height: 32px;
    }

</style>