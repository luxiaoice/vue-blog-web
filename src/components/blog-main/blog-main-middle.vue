<template>
    <div class="blog-main-middle">
        <div class="blog-main-middle-top">

        </div>
        <div class="blog-main-middle-middle">
            <router-view/>
            
        </div>
        <div class="blog-main-middle-bottom">

        </div> 
    </div>
</template>
<script>
export default {
    name:"blogMainMiddle"
}
</script>
<style scoped>
    .blog-main-middle{
        display: grid;
        grid-template-rows: 52px 500px 52px;
        gap: 2%;
        width: 100%;
        height: 600px;
    }
    .blog-main-middle-top{
        display: grid; /* 设置为块元素 */
        width: 100%;
        height: 50px;
        background-color: rgba(230,238,232,0.65);
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
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
        height: 500px;
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
    .blog-main-middle-bottom{
        display: flex; /* 设置为块元素 */
        width: 100%;
        height: 50px;
        background-color: rgba(230,238,232,0.65);
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
         /* 轮廓 */
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 6px  rgba(29, 28, 28, 0.7)
    }
    .blog-main-middle-bottom:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        background-color: rgba(230,238,232,0.75);
        /* 阴影 */
        box-shadow: 0px 0px 6px  rgba(29, 28, 28)
    }
</style>