<template>
        <nav class="middle-breadcrumb" v-if="breadList!=[]">
            <router-link class="router-link" :to="item.path" v-for="(item,index) in breadList" 
                :key="index">
                <span class="router-link-span">/</span>
                <span class="router-link-span-title">{{item.meta.title}}</span>
            </router-link>
        </nav>
</template>
<script>
export default {
    name:"middleBreadcrumb",
    data() {
        return {
            breadList: [] // 路由集合
        };
    },
    watch: {
        $route() {
            this.getBreadcrumb();
        }
    },
    methods: {
        isHome(route) {
            if(route!=null){
                return route.name === "Home";
            }
            return false;
        },
        getBreadcrumb() {
            let matched = this.$route.matched;
            //如果不是首页
            if (!this.isHome(matched[0])) {
                matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
            }
            this.breadList = matched;
        }
    },
    created() {
        this.getBreadcrumb();
    }
};
</script>
<style>
    .middle-breadcrumb{
        padding-left: 14px;
    }
    .router-link{
        text-decoration: none;
        color: rgb(82, 81, 81);
        width: 86px;
        height: 36px;
        padding-left: 2px;
        padding-right: 2px;
        line-height: 36px; /* 设置垂直居中 */
        text-align: center;
    }
    .router-link-span{
        color: rgb(170, 166, 162);
    }
    .router-link-span-title{
        color: rgb(82, 81, 81);
    }
    .router-link-span-title:hover{
        color: rgb(27, 27, 27);
    }
</style>

