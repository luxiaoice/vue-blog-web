<template>
    <div class="blog-header">
        <blog-nav class="blog-nav"/>
        <blog-search class="blog-search"/>
        <blog-signin class="blog-signin"/>
    </div>
</template>
<script>
import blogNav from "@/components/blog-header/blog-header-nav.vue"
import blogSearch from "@/components/blog-header/blog-header-search.vue"
import blogSignin from "@/components/blog-header/blog-header-signin.vue"
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
        display: grid;
        width: 100%;
        height: 38px;
        grid-template-columns: 60% 20% 20%;
        background:rgb(255, 255, 255,0.5);
        box-shadow: 0px 0px 8px rgb(187, 168, 168);
        padding: 12px;
        margin-bottom: 12px;
    }
    .blog-nav{
        position: grid;
        left: 80px;
    }
    .blog-search{
        position: grid;
        left: 200px；
    }
    .blog-signin{
        position: grid;
        left: 100px;
    }

</style>