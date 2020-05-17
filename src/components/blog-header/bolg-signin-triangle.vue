<template>

        <div class="sigin-triangle-one">
            <div class="sigin-triangle-tow"></div>
        </div>
        
</template>
<script>
export default {
    name:"signin-trangle"
}
</script>
<style scoped>
    .sigin-triangle-one{
        position: absolute;
        height: 0px;
        width: 0px;
        border-width: 0px 6.5px 6.5px;
        border-style: solid;
        border-color: transparent transparent rgb(148, 148, 148);

        
    }
    .sigin-triangle-tow{
        position: absolute;
        height: 0px;
        width: 0px;
        left: -6.12px;
        top: 1px;
        border-width: 0px 6px 6px;
        border-style: solid;
        border-color: transparent transparent rgb(255, 255, 255);
        
    }
</style>