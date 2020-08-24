<template>
    <div class="blog-body">
        <blog-header/>
        <blog-main calss="blog-main"/>
        <blog-footer/>
    </div>
</template>
<script>
import blogHeader from "@/components/blog-header/blog-header.vue"
import blogMain from "@/components/blog-main/blog-main.vue"
import blogFooter from "@/components/blog-footer/blog-footer.vue"
export default {
    name:"blogContainer",
    components: {
        "blog-header":blogHeader,
        "blog-main":blogMain,
        "blog-footer":blogFooter,
    }
}
</script>
<style scoped>
    .blog-main{
        margin: auto;
    }
    .blog-body{
        background: url('../assets/icon/c_写真end2.jpg') no-repeat fixed;
        background-size:cover;   
    }
</style>