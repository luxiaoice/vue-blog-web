<template>
    <nav class="blog-nav">
        <router-link class="router-link" :to="title.url" v-for="title in titles" 
        :key="title.id">{{title.name}}</router-link>
    </nav>
</template>
<script>
export default {
    name:"blogNav",
    data(){ 
        return{
            titles:[
                
            ]
        }
    },
    created(){
        this.$axios.get('/blog/getHeaderNav')
        .then((response)=>{
        this.titles=response.data.titles;
        })
        .catch((response)=>{
        console.log(response);
      })
    },
    mouthed:{
      
    }
}
</script>
<style scoped>
    .blog-nav{
        display : flex;
        height: 36px;
        
    }
    .router-link{
        text-decoration: none;
        color: rgb(82, 81, 81);
        position: relative;
        display: block; /* 设置为块元素 */
        width: 86px;
        height: 36px;
        padding-left: 2px;
        padding-right: 2px;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border: 1px solid rgb(124, 109, 109,0.7);
        border-radius: 25px;
    }
    .router-link:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        box-shadow: 0px 0px 3px  rgba(29, 28, 28,0.7);
        color: rgb(27, 27, 27);
    }
</style>