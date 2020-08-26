<template>
    <div class="blog-main-middle">
        <div class="blog-main-middle-top">
            <middle-breadcrumb></middle-breadcrumb>
        </div>
        <div class="blog-main-middle-middle">
            <router-view/>
        </div>
    </div>
</template>
<script>
import middleBreadcrumb from "@/components/blog-main/blog-main-middle-breadcrumb.vue"
export default {
    name:"blogMainMiddle",
    components:{
        "middle-breadcrumb" : middleBreadcrumb,
    }
}
</script>
<style scoped>
    .blog-main-middle{
        display: grid;
        grid-template-rows: 52px auto 52px;
        gap: 2%;
        width: 100%;
    }
    .blog-main-middle-top{
        display: grid; /* 设置为块元素 */
        width: 100%;
        height: 50px;
        background-color: rgba(230,238,232,0.65);
        line-height: 50px; /* 设置垂直居中 */
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7)
    }
    .blog-main-middle-top:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        background-color: rgba(230,238,232,0.75);
        /* 阴影 */
        box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7)
    }
    .blog-main-middle-middle{
        display: flex; /* 设置为块元素 */
        width: 100%;
        background-color: rgba(230,238,232,0.65);
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
         /* 轮廓 */
        outline: 1px #888;
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7)
    }
    .blog-main-middle-middle:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        background-color: rgba(230,238,232,0.75);
        /* 阴影 */
        box-shadow: 0px 0px 6px  rgba(29, 28, 28)
    }
    
</style>