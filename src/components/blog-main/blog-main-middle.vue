<template>
    <div class="blog-main-middle">
        <div class="blog-main-middle-top">

        </div>
        <div class="blog-main-middle-middle">

        </div>
        <div class="blog-main-middle-bottpm">

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
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        /* 边线 */
        border:1px solid #888;
         /* 轮廓 */
        outline: 1px #888;
        background: #66ccff;
        border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 1px 3px rgb(196, 177, 177)
    }
    .blog-main-middle-middle{
        display: flex; /* 设置为块元素 */
        width: 100%;
        height: 500px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 25px;/*圆角*/
        /* 边线 */
        border:1px solid #888;
         /* 轮廓 */
        outline: 1px #888;
        background: #66ccff;
         border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 1px 3px rgb(196, 177, 177)
    }
    .blog-main-middle-bottpm{
        display: flex; /* 设置为块元素 */
        width: 100%;
        height: 50px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 25px;/*圆角*/
        /* 边线 */
        border:1px solid #888;
         /* 轮廓 */
        outline: 1px #888;
        background: #66ccff;
         border-radius: 6px;/*圆角*/
        box-shadow: 0px 0px 1px 3px rgb(196, 177, 177)
    }
</style>