<template>
    <div class="blog-header">
        <blog-nav class="blog-nav"></blog-nav>
        <blog-search class="blog-search"></blog-search>
        <blog-signin class="blog-signin"></blog-signin>
    </div>
</template>
<script>
import blogNav from "@/components/blog-header/blog-nav.vue"
import blogSearch from "@/components/blog-header/blog-search.vue"
import blogSignin from "@/components/blog-header/blog-signin.vue"
export default {
    name : "blogHeader",
    components: {
        "blog-nav" : blogNav,
        "blog-search"  : blogSearch,
        "blog-signin" : blogSignin,
    }
}
</script>
<style scoped>
    .blog-header{
        display: flex;
        width: 100%;
        height: 38px;
        background:rgb(255, 255, 255,0.5);
        box-shadow: 0px 0px 1px 3px rgb(196, 177, 177);
        padding: 12px;
    }
    .blog-nav{
        position: fixed;
        left: 80px;
    }
    .blog-search{
        position: fixed;
        right: 300px;
    }
    .blog-signin{
        position: fixed;
        right: 100px;
    }
</style>