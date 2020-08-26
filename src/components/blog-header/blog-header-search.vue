<template>
        <div class="blog-search">
            
            <input class="search-input" @keyup.enter="submit" type="text" placeholder="搜索..." v-model="search">
            <button class="search-button" type="submit" @click="submit">
                <img class="icon-search-img" src="../../assets/icon/Search.png"/>
            </button>
            
        </div>
</template>
<script>
export default {
    data () {
        return {
            search:'',
        }
    },
    created(){
        
    },
    methods:{
        submit(){
            this.$axios.get('/blog/search',this.search)
            .then((response)=>{
                
                this.$store.commit("search/set_search_data",response.data.searchData);
                //将查询结果绑定到search页面
                //search 表示vuex的文件名
                this.$router.push({
                    path:"/search",
                    name:"Search",
                }
                //.catch(err => err)
                )
            })
            .catch((response)=>{
            })
        }
    }
}
</script>
<style scoped>
    .blog-search{
        display: flex; /* 设置为块元素 */
        width: 168px;
        height: 36px;
        background-color: rgba(230,238,232,0.65);
        font-size:0;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
        border-radius: 25px;/*圆角*/
        /* 边线 */
         border: 1px solid rgb(124, 109, 109,0.7);
         /* 轮廓 */
        padding-left: 16px;
    }
    .search-input{
       display:block;
       float:left;
       height: 36px;
       width: 118px;
       font-size: 16px;
       text-align:start;
       background-color:  rgba(230,238,232,0.65);
        /* 样式清空 */
       outline:none;
       padding: 0px;
       border: none; 
    }
    .icon-search-img:hover{
        /*鼠标滑过显示为手*/
        cursor:pointer
    }
    .icon-search-img{
        width: 36px;
        height: 36px;
    }
    .search-button{
        display: flex;
        /* 样式 */
        width: 36px;
        height: 36px;
        position:relative;
        border-radius: 25px;
        /* 默认样式清空 */
        outline: none;
        background: none;
        border: none;
        margin: 0px;
        padding: 0px;
    }
    
</style>