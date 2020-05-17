<template>
    <nav class="blog-nav">
        <router-link class="router-link" to="/">首页</router-link>
        <router-link class="router-link" to="/types">分类</router-link>
        <router-link class="router-link" to="/tags">标签</router-link>
        <router-link class="router-link" to="/archives">归档</router-link>
        <router-link class="router-link" to="/about">关于我</router-link>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .blog-nav{
        display : flex;
        height: 36px;
        
    }
    .router-link{
        text-decoration: none;
        color: #212121;
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
        border: 1px solid #ccc;
        border-radius: 25px;
    }
    .router-link:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        box-shadow: 0px 0px 1px 1px #888;
    }
</style>