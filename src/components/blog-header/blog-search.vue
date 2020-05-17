<template>
        <div class="blog-search">
            <form action="/search" method="get">
                <input class="search-input" @keyup.enter="submit" type="text" placeholder="搜索...">
                <button class="search-button" type="submit">
                    <img class="icon-search-img" src="../../assets/icon/Search.png"/>
                </button>
            </form>
        </div>
</template>
<script>
export default {
    name:"Search",
    data () {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
    .blog-search{
        display: flex; /* 设置为块元素 */
        width: 168px;
        height: 36px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 25px;/*圆角*/
        /* 边线 */
        border:1px solid #888;
         /* 轮廓 */
        outline: 1px #888;
        padding-left: 16px;
    }
    .blog-search:hover{
        /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        box-shadow: 0px 0px 1px 1px #888;
        
    }
    .search-input{
       display:block;
       height: 36px;
       width: 118px;
       font-size: 16px;
       text-align:start;
        /* 样式清空 */
       outline:none;
       padding: 0px;
       border: none; 
    }
    .icon-search-img{
        width: 36px;
        height: 36px;
    }
    .icon-search-img:hover{
        /*鼠标滑过显示为手*/
        cursor:pointer
    }
    .search-button{
        display: block;
        /* 样式 */
        width: 36px;
        height: 36px;
        position: absolute;
        top: 0px;
        left: 147px;
        border-radius: 25px;
        /* 默认样式清空 */
        outline: none;
        background: none;
        border: none;
        margin: 0px;
        padding: 0px;
    }
    
</style>