<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view/>

  </div>
</template>
<script>
import blogHeader from '@/components/blog-header/blog-header.vue';
export default {
  name:"App",
  components: {
    "blog-header":blogHeader
  }
}
</script>

<style scoped>
  
</style>