<template>
    <div class="blog-main">
        <blog-main-left/>
        <blog-main-middle/>
        <blog-main-right/>
    </div>
</template>
<script>
import blogMainRight from "@/components/blog-main/blog-main-right.vue"
import blogMainMiddle from "@/components/blog-main/blog-main-middle.vue"
import blogMainLeft from "@/components/blog-main/blog-main-left.vue"
export default {
    name:"blog-main",
    components:{
        "blog-main-left":blogMainLeft,
        "blog-main-middle":blogMainMiddle,
        "blog-main-right":blogMainRight,
    }
}
</script>
<style scoped>
.blog-main{
    display: grid;
    grid-template-columns: 18% 55% 27%;
    gap:2%;
    background:rgb(255, 255, 255,0.5);
    padding: 12px;
    width: 100%;
    height: 650px;
}
</style>