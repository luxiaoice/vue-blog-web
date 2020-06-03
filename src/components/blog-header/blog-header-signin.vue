<template>

    <div class="user-signin">
        <div class="signin-icon">

        </div>
        <div class="signin-page">
            <div class="signin-page-conn">
                <signin-triangle class="sigin-triangle"></signin-triangle>
            </div>
            <div class="signin-page-show">
                功能正在完善中~
            </div>
        </div>
    </div>
    
</template>
<script>
import signinTriangle from "@/components/blog-header/bolg-header-signin-triangle.vue"
export default {
    name:"blogSignin",
    components: {
        "signin-triangle":signinTriangle
    }
}
</script>
<style scoped>
    .user-signin{
        position: flex;
        width: 200px;
        height: 320px;
    }
    .signin-icon{
        margin:auto;
        width: 36px;
        height: 36px;
        background: fuchsia;
        border: 0.95px solid bisque;
        border-radius: 28px;
    }
    .signin-icon:hover{
        transform: scale(1.66667);
        /*鼠标滑过显示为手*/
        cursor:pointer;
        /* 阴影 */
        box-shadow: 0px 0px 10px rgb(138, 123, 123);
    }
    .signin-icon:hover+.signin-page{
        display: block;
    }
    .sigin-triangle{
       margin-right: 93.5px;
       margin-left: 93px;
    }
    .signin-page{
        display: none;
        width: 200px;
        height: 306px;
    }
    .signin-page-conn{
        width: 200px;
        height: 6px;
        padding-top: 11.5px;
    }
    .signin-page-show{
        width: 200px;
        height: 300px;
        border: 1px solid rgb(148, 148, 148);
        background: rgb(255, 255, 255);
    }
</style>