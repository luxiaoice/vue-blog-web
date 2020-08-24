<template>
    <div class="search">
        <div>
            {{searchData}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        searchData:this.$store.state.search.searchData
      }
    }
  }
</script>

<style>

</style>