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
    grid-template-columns: 235px auto 235px;
    gap:30px;
    padding: 30px;
    width: 1100px;
    min-width: 960px;
    max-width: 1268px;
}
</style>