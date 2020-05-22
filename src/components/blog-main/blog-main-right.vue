<template>
    <div class="blog-main-right">
        <div class="blog-main-right-top">

        </div>
        <div class="blog-main-right-bottom">

        </div>
    </div>
</template>
<script>
export default {
    name:"blogMainRight"
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
        width: 100%;
        height: 300px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        grid-template-rows: 45% 55%;
        border-radius: 6px;/*圆角*/
        background: #66ccff;
        box-shadow: 0px 0px 1px 3px rgb(196, 177, 177)
    }
    .blog-main-right-bottom{
        display: grid; /* 设置为块元素 */
        width: 100%;
        height: 300px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 6px;/*圆角*/
        background: #66ccff;
        box-shadow: 0px 0px 1px 4px rgb(196, 177, 177)
    }
</style>