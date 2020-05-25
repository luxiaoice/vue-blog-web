<template>
  <div id="app">
    <blog-container></blog-container>
  </div>
</template>
<script>
import blogContainer from '@/components/blog-container.vue';
export default {
  name:"App",
  components: {
    "blog-container":blogContainer
  }
}
</script>

<style scoped>
  
</style>