<template>
    <div>
        <blog-header/>
        <blog-main/>
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
    
</style>