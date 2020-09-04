<template>
  <div class="archives">
     <div id="time-line">
      <div class="item" v-for="item in archivesItem" :key="item.id">
          <a class="item-content">{{ item.title | ellipsis}}</a>
          <a class="item-index">{{ item.date }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"archives",
   data() {
    return {
      archivesItem: [

      ]
    }
  },
  filters: {
        //过滤器当字串大于20时后面的字符改为省略号
        ellipsis (str) {
            if (!str) return '';
            if  (str.length <= 5) 
                return str.slice(0,5) + '              ';
            if (str.length > 8) 
                return str.slice(0,8) + '. . .';
            
        
            return str;
        }
  },
  created(){
    this.getArchives()
  },
  methods: {
    getArchives(){
      this.$axios.post('/blog/getArchives')
          .then((response)=>{
            this.archivesItem=response.data.archivesItem;
          })
          .catch((response)=>{
          console.log(response);
          })
    },
  },
}
</script>

<style>
  .archives{
    display: flex;
    width: 570px;   
    height: 801px;
    margin-top: 30px;
    margin-left: 20px;
  }
  .item {
    display: flex;
    margin-left: 30px; /*用左边margin显示时间线*/
    width: 540px; /*因为左边部分用于显示时间线，所以右边部分减去30px*/
    height: 36px; /*高度由内容决定*/
    position: relative;
    cursor: pointer;
  }
  .item::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background-color: #868686;
    position: absolute;
    left: -15px;
    top:14px;
  }
  .item::after {
    content: "";
    width: 2px;
    height: calc(100%); /*加上10px是item底部的margin*/
    background-color: #868686;
    position: absolute;
    top: 0;
    left: -11px;
  }
  .item-index {
    line-height: 36px;
    font-size: 12px;
    width: 150px;
    margin-left: 20px;
    color: #656565;
  }
  .item-content {
    display: flex;
    width: 260px;
    height: auto; /*由内容决定*/
    line-height: auto;
    white-space: pre-wrap; /*保留空白符序列，但是正常地进行换行*/
    word-wrap: break-word; /*在长单词或 URL 地址内部进行换行*/
  }
  .item:hover::before {
  transform: scale3d(1.2, 1.2, 1);
  background-color: #9ba7be;
  }

  .item:hover::after {
    transform: scale3d(1.1, 1, 1);
    background-color: #9ba7be;
  }

  .item:hover .item-index{
    transform: scale3d(1.01, 1.01, 1);
    color: #343434;
  }
</style>
