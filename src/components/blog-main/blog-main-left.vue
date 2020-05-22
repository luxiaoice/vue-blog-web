<template>
    <div class="blog-main-left">
        <div class="blog-main-left-top">
            
            <div class="blog-main-left-top-head">
                 <div class="blog-main-left-top-head-icon">
                
                </div>
            </div>
            <div class="blog-main-left-top-ltems">
                    <a class="blog-main-left-top-ltem" href="">1</a><br>
                    <a class="blog-main-left-top-ltem" href="">2</a><br>
                    <a class="blog-main-left-top-ltem" href="">3</a><br>
                    <a class="blog-main-left-top-ltem" href="">4</a><br>
            </div>
        </div>
        
        <div class="blog-main-left-bottom">

        </div>

    </div>
</template>
<script>
export default {
    name:"blogMainLeft",
}
</script>
<style scoped>
    .blog-main-left{
        display: grid;
        grid-template-rows: 50% 50%;
        gap: 4%;
        width: 100%;
        height: 600px;
    }
    .blog-main-left-top{
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
    .blog-main-left-top-ltem{
        text-decoration:none;
        color:#333;
    
    }
    .blog-main-left-top:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        box-shadow: 0px 0px 1px 4px #888;
    }
     .blog-main-left-top-head{
        display: grid;
        height: 100%;
        width: 100%;
    }
    .blog-main-left-top-head-icon{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: auto;
        background-color: rgb(189, 84, 84);
    }
    .blog-main-left-bottom{
        display: grid; /* 设置为块元素 */
        width: 100%;
        height: 300px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 6px;/*圆角*/
        background: #66ccff;
        box-shadow: 0px 0px 1px 4px rgb(196, 177, 177)
    }
    .blog-main-left-bottom:hover{
         /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        box-shadow: 0px 0px 1px 4px #888;
    }
</style>